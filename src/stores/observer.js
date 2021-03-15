import { readable } from "svelte/store";
import { sections } from "./sections";
import { sectionIntersectionRatios } from "./sectionIntersectionRatios";
import { currentSection } from "./currentSection";

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
  let allSections, intersectionRatios, currSection;

  sections.subscribe(($sections) => (allSections = $sections));
  sectionIntersectionRatios.subscribe(
    ($intersectionRatios) => (intersectionRatios = $intersectionRatios)
  );
  currentSection.subscribe(($currSection) => (currSection = $currSection));

  const prevRatio = intersectionRatios[observerSection];

  if (intersectionRatio > prevRatio && observerSection !== currSection) {
    currentSection.setCurrentSection(observerSection);
  }

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
