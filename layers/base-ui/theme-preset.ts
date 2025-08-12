import { definePreset } from '@primeuix/themes'
import Aura from "@primeuix/themes/aura";

export const preset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "#e6f6e9",
      100: "#c2e6c7",
      200: "#9dd6a4",
      300: "#77c682",
      400: "#52b55f",
      500: "#328643", // Updated color
      600: "#2a6f38",
      700: "#22562d",
      800: "#1a3e22",
      900: "#112616",
    },
  },
});
