import { writable } from "svelte/store";

const createSectionIntersectionRatios = () => {
  const { subscribe, update } = writable({});

  const updateSectionIntersectonRatios = (newIntersectionRatio) =>
    update((intersectionRatios) => {
      return { ...intersectionRatios, ...newIntersectionRatio };
    });

  return { subscribe, updateSectionIntersectonRatios };
};

export const sectionIntersectionRatios = createSectionIntersectionRatios();
