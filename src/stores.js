import { writable, readable } from "svelte/store";

const createSections = () => {
  const { subscribe, update } = writable({});

  const updateSections = (newSection) => {
    update((sections) => {
      return { ...sections, ...newSection };
    });
  };

  return { subscribe, updateSections };
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
  threshold: [
    0,
    0.02,
    0.04,
    0.06,
    0.08,
    0.1,
    0.12,
    0.14,
    0.16,
    0.18,
    0.2,
    0.22,
    0.24,
    0.26,
    0.28,
    0.3,
  ],
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
