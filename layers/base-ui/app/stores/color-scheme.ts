import { defineStore } from "pinia";

export const colorSchemes = [
  "default",
  "theme-1",
  "theme-2",
  "theme-3",
  "theme-4",
  "theme-5",
  "theme-6",
  "theme-7",
  "theme-8",
  "theme-9",
  "theme-10",
  "theme-11",
  "theme-12",
  "theme-13",
  "theme-14",
  "theme-15",
  "theme-16",
  "theme-17",
] as const;

export type ColorSchemes = (typeof colorSchemes)[number];

interface ColorSchemeState {
  value: ColorSchemes;
}

const getColorScheme = () => {
  if (import.meta.client) {
    const colorScheme = localStorage.getItem("colorScheme");
    return colorSchemes.filter((item) => {
      return item === colorScheme;
    })[0];
  }
};

export const useColorSchemeStore = defineStore("colorScheme", {
  state: (): ColorSchemeState => ({
    value:
       import.meta.client && localStorage.getItem("colorScheme") === null
        ? "default"
        : getColorScheme() || "default",
  }),
  getters: {
    colorScheme(state) {
      if (import.meta.client) {
        if (localStorage.getItem("colorScheme") === null) {
          localStorage.setItem("colorScheme", "default");
        }
      }

      return state.value;
    },
  },
  actions: {
    setColorScheme(colorScheme: ColorSchemes) {
      if (import.meta.client) {
        localStorage.setItem("colorScheme", colorScheme);
      }
      this.value = colorScheme;
    },
  },
});
