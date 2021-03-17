import { readable } from "svelte/store";
import { sectionIntersectionRatios } from "./sectionIntersectionRatios";

const observerOptions = {
  threshold: [0.05, 0.1, 0.15, 0.2, 0.3, 1],
};

const handleIntersect = (
  [
    {
      intersectionRatio,
      target: {
        dataset: { section: observerSection },
      },
    },
  ],
  observer
) => {
  let intersectionRatios;

  sectionIntersectionRatios.subscribe(
    ($intersectionRatios) => (intersectionRatios = $intersectionRatios)
  );

  sectionIntersectionRatios.updateSectionIntersectonRatios({
    [observerSection]: intersectionRatio,
  });
};

const createObserver = () => {
  const { subscribe } = readable(
    new IntersectionObserver(handleIntersect, observerOptions)
  );

  return { subscribe };
};

export const observer = createObserver();
