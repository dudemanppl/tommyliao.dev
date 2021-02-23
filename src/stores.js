import { writable, readable, get } from "svelte/store";

const createCurrentSection = () => {
  const { subscribe, set } = writable("Top");

  const setCurrentSection = (sectionName) => set(sectionName);

  return { subscribe, setCurrentSection };
};

const currentSection = createCurrentSection();

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

const createSectionIntersectionRatios = () => {
  const { subscribe, update } = writable({});

  return { subscribe };
};

const sectionIntersectionRatios = createSectionIntersectionRatios();

const observerOptions = {
  threshold: [
    0,
    0.01,
    0.02,
    0.03,
    0.04,
    0.05,
    0.06,
    0.07,
    0.08,
    0.09,
    0.1,
    0.11,
    0.12,
    0.13,
    0.14,
    0.15,
    0.16,
    0.17,
    0.18,
    0.19,
  ],
  // threshold: 0.15,
};

const createObserver = () => {
  const handleIntersect = ([
    {
      intersectionRatio,
      target: {
        dataset: { section },
      },
    },
  ]) => {
    // console.log(section, intersectionRatio);
  };

  const { subscribe } = readable(
    new IntersectionObserver(handleIntersect, observerOptions)
  );
  return { subscribe };
};

const observer = createObserver();

export { currentSection, sections, sectionIntersectionRatios, observer };
