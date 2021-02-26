import { writable, readable } from "svelte/store";

const createSections = () => {
  const { subscribe, set } = writable({});

  return { subscribe, set };
};

const sections = createSections();

const createCurrentSection = () => {
  let sects;

  sections.subscribe(($sections) => (sects = $sections));

  const { subscribe, set } = writable("Top");

  const setCurrentSection = (sectionName) => {
    set(sectionName);
    window.scroll({ top: sects[sectionName].offsetTop, behavior: "smooth" });
  };

  return { subscribe, setCurrentSection };
};

const currentSection = createCurrentSection();

const createSectionIntersectionRatios = () => {
  const { subscribe, update } = writable({});

  const updateIntersectionRatios = (newRatios) => {
    update((intersectionRatios) => {
      return { ...intersectionRatios, ...newRatios };
    });
  };

  return { subscribe, updateIntersectionRatios };
};

const sectionIntersectionRatios = createSectionIntersectionRatios();

const observerOptions = {
  threshold: [0.2, 0.3],
};

const createObserver = () => {
  let intersectionRatios, currSection;

  sectionIntersectionRatios.subscribe(
    ($intersectionRatios) => (intersectionRatios = $intersectionRatios)
  );

  currentSection.subscribe(($currSection) => (currSection = $currSection));

  const handleIntersect = (
    [{ intersectionRatio: currRatio, target }],
    observer
  ) => {
    const {
      dataset: { section: observerSection },
    } = target;
    const prevRatio = intersectionRatios[observerSection];

    if (
      currRatio > prevRatio &&
      currRatio &&
      prevRatio &&
      observerSection !== currSection
    ) {
      currentSection.setCurrentSection(observerSection);
    }

    sectionIntersectionRatios.updateIntersectionRatios({
      [observerSection]: currRatio,
    });
  };

  const { subscribe } = readable(
    new IntersectionObserver(handleIntersect, observerOptions)
  );

  return { subscribe };
};

const observer = createObserver();

export { sections, currentSection, sectionIntersectionRatios, observer };
