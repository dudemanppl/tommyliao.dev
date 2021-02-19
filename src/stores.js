  import { writable } from "svelte/store";

  export const currentSection = writable("Top");
  export const sections = writable({});
