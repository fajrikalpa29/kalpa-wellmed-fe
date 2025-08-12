<script setup lang="ts">
import { TabPanels as HeadlessTabPanels } from "@headlessui/vue";
import type { ExtractPropTypes } from "vue";

interface PanelsProps
  extends /* @vue-ignore */ ExtractPropTypes<typeof HeadlessTabPanels> {}

defineProps<PanelsProps>();
</script>

<template>
  <HeadlessTabPanels as="div">
    <slot></slot>
  </HeadlessTabPanels>
</template>
