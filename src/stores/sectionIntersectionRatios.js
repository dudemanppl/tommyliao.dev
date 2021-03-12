import { writable } from "svelte/store";

const createSectionIntersectionRatios = () => {
  const { subscribe, update } = writable({});

  const updateIntersectionRatios = (newRatios) => {
    update((intersectionRatios) => {
      return { ...intersectionRatios, ...newRatios };
    });
  };

  return { subscribe, updateIntersectionRatios };
};

export const sectionIntersectionRatios = createSectionIntersectionRatios();
