import { defineStore } from "pinia";

interface TopbarActiveState {
  value: boolean;
  mobileMenu: boolean;
}

const getTopbarActive = () => {
  if (import.meta.client) {
    return localStorage.getItem("topbarActive") === "true";
  }
  return false; // Default value when not on the client-side
};

export const useTopbarActiveStore = defineStore("TopbarActive", {
  state: (): TopbarActiveState => ({
    value:
      import.meta.client && localStorage.getItem("topbarActive") === null
        ? false
        : getTopbarActive(),
    mobileMenu: false,
  }),
  getters: {
    topBarActive(state) {
      if (import.meta.client) {
        if (localStorage.getItem("topbarActive") === null) {
          localStorage.setItem("topbarActive", "false"); // Set default to "true"
        }
      }
      return state.value;
    },
    topBarMobileMenu(state) {
      if (import.meta.client) {
        if (localStorage.getItem("topbarActive") === null) {
          localStorage.setItem("topbarActive", "false"); // Set default to "true"
        }
      }
      return state.mobileMenu;
    },
  },
  actions: {
    setTopbarActive(topbarActive: boolean) {
      if (import.meta.client) {
        localStorage.setItem("topbarActive", topbarActive.toString());
      }
      this.value = topbarActive;
    },
    setTopbarMobileMenu(mobileMenu: boolean) {
      if (import.meta.client) {
        localStorage.setItem("topbarMobileMenu", mobileMenu.toString());
      }
      this.mobileMenu = mobileMenu;
    },
  },
});
