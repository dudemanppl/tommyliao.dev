import { writable } from "svelte/store";

const createSections = () => {
  const { subscribe, update } = writable({});

  const updateSections = (newSections) =>
    update((sections) => {
      return { ...sections, ...newSections };
    });

  return { subscribe, updateSections };
};

export const sections = createSections();
