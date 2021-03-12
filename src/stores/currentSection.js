import { writable } from "svelte/store";
import { sections } from "./sections";

const createCurrentSection = () => {
  const { subscribe, set } = writable("Top");
  let allSections;

  sections.subscribe(($sections) => (allSections = $sections));

  const setCurrentSection = (sectionName) => {
    set(sectionName);

    const top = allSections[sectionName].offsetTop;
    window.scroll({ top, behavior: "smooth" });
  };

  return { subscribe, setCurrentSection };
};

export const currentSection = createCurrentSection();
