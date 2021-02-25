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
};

const createObserver = () => {
  let intersectionRatios;

  sectionIntersectionRatios.subscribe(
    ($ratios) => (intersectionRatios = $ratios)
  );

  const handleIntersect = (
    [{ intersectionRatio: currRatio, target }],
    observer
  ) => {
    const {
      dataset: { section },
    } = target;
    // console.log(section, currRatio);

    sectionIntersectionRatios.updateIntersectionRatios({
      [section]: currRatio,
    });

    console.log(intersectionRatios);

    // console.log(sectionIntersectionRatios.updateIntersectionRatios);

    // if (intersectionRatio > 0.5) {
    //   observer.unobserve(target);
    // }
  };

  const { subscribe } = readable(
    new IntersectionObserver(handleIntersect, observerOptions)
  );
  return { subscribe };
};

const observer = createObserver();

export { currentSection, sections, sectionIntersectionRatios, observer };
