import { defineStore } from "pinia";

interface DarkModeState {
  value: boolean;
}

export const useDarkModeStore = defineStore("darkMode", {
  state: (): DarkModeState => ({
    value: import.meta.client && localStorage.getItem("darkMode") === "true",
  }),
  getters: {
    darkMode(state) {
      if (import.meta.client) {
        if (localStorage.getItem("darkMode") === null) {
          localStorage.setItem("darkMode", "false"); // Default to "false"
        }
      }

      return state.value;
    },
  },
  actions: {
    setDarkMode(darkMode: boolean) {
       if (import.meta.client) {
         localStorage.setItem("darkMode", darkMode.toString());
       }
      this.value = darkMode;
    },
  },
});
