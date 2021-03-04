import { writable, readable } from "svelte/store";

const createSections = () => {
  const { subscribe, update } = writable({});

  const updateSections = (newSections) =>
    update((sections) => {
      return { ...sections, ...newSections };
    });

  return { subscribe, updateSections };
};

const sections = createSections();

const createCurrentSection = () => {
  let sects;

  sections.subscribe(($sections) => (sects = $sections));

  const { subscribe, set } = writable("Top");

  const setCurrentSection = (
    sectionName,
    top = sects[sectionName].offsetTop
  ) => {
    set(sectionName);
    window.scroll({ top, behavior: "smooth" });
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
  threshold: [0.05, 0.1, 0.15, 0.2, 0.3],
};

const createObserver = () => {
  let intersectionRatios, currSection;

  sectionIntersectionRatios.subscribe(
    ($intersectionRatios) => (intersectionRatios = $intersectionRatios)
  );

  currentSection.subscribe(($currSection) => (currSection = $currSection));

  const handleIntersect = (
    [{ intersectionRatio: currRatio, target, time }],
    observer
  ) => {
    const {
      dataset: { section: observerSection },
    } = target;
    const prevRatio = intersectionRatios[observerSection];
    console.log(time);
    if (currRatio > prevRatio && observerSection !== currSection) {
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
