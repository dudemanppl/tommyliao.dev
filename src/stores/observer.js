import { readable } from "svelte/store";
import { sectionIntersectionRatios } from "./sectionIntersectionRatios";

const observerOptions = {
  threshold: [0.05, 0.1, 0.15, 0.2, 0.3],
};

const handleIntersect = ([
  {
    intersectionRatio: currRatio,
    target: {
      dataset: { section: observerSection },
    },
  },
]) => {
  let intersectionRatios;

  sectionIntersectionRatios.subscribe(
    ($sectionIntersectionRatios) =>
      (intersectionRatios = $sectionIntersectionRatios)
  );

  sectionIntersectionRatios.updateIntersectionRatios({
    [observerSection]: currRatio,
  });
};

const createObserver = () => {
  const { subscribe } = readable(
    new IntersectionObserver(handleIntersect, observerOptions)
  );

  return { subscribe };
};

export const observer = createObserver();
