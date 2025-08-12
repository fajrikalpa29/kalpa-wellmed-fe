import { defineStore } from "pinia";
import type { Menu, MenuState } from "../types/utils";

export const useMenuStore = defineStore("menu", {
  state: (): MenuState => ({
    value: [],
  }),
  persist: true,
  getters: {
    getMenus(state) {
      return state.value;
    },
  },
  actions: {
    updateMenu(menu: Menu[]) {
      this.value = menu;
    },
  },
});
