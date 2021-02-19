import { writable } from "svelte/store";

const createCurrentSection = () => {
  const { subscribe, set } = writable("Top");

  const setCurrentSection = (sectionName) => set(sectionName);

  return { subscribe, setCurrentSection };
};

const createSections = () => {
  const { subscribe, update } = writable({});

  const addSection = (newSection) => {
    update((sections) => {
      return { ...sections, ...newSection };
    });
  };

  return { subscribe, addSection };
};

const currentSection = createCurrentSection();
const sections = createSections();

export { currentSection, sections };
