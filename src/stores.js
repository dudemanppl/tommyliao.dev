import { writable } from "svelte/store";

const createCurrentSection = () => {
  const { subscribe, set } = writable("Top");

  const setCurrentSection = (sectionName) => set(sectionName);

  return { subscribe, setCurrentSection };
};

const sections = {};

const addSection = (sectionName, element) => {
  sections[sectionName] = element;
};

Object.setPrototypeOf(sections, { ...Object.prototype, addSection });

const currentSection = createCurrentSection();

export { currentSection, sections };
