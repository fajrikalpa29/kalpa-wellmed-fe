import { defineStore } from "pinia";
import Hook from "@/layouts/Hook";

export const themes = [
  {
    name: "Hook",
    component: Hook,
  },
] as const;

export type Themes = (typeof themes)[number];

interface ThemeState {
  value: Themes["name"];
}

export const getTheme = (search?: Themes["name"]) => {
  if (import.meta.client) {
    const theme = search === undefined ? localStorage.getItem("theme") : search;
    return (
      themes.filter((item) => {
        return item.name === theme;
      })[0] || themes[0]
    );
  }
  return themes[0]; // Default theme when not on client-side
};

export const useThemeStore = defineStore("theme", {
  state: (): ThemeState => ({
    value:
      import.meta.client && localStorage.getItem("theme") === null
        ? themes[0].name
        : getTheme().name,
  }),
  getters: {
    theme(state) {
      if (import.meta.client) {
        if (localStorage.getItem("theme") === null) {
          localStorage.setItem("theme", "Hook");
        }
      }
      return state.value;
    },
  },
  actions: {
    setTheme(theme: Themes["name"]) {
      this.value = theme;

      if (import.meta.client) {
        localStorage.setItem("theme", theme);
      }
    },
  },
});
