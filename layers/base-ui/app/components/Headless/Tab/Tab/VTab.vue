<script setup lang="ts">
import { inject } from "vue";
import { Tab as HeadlessTab } from "@headlessui/vue";
import type { ExtractPropTypes } from "vue";

interface TabProps
  extends /* @vue-ignore */ ExtractPropTypes<typeof HeadlessTab> {
  fullWidth?: boolean;
}

const { fullWidth = true } = defineProps<TabProps>()
const list = inject<any>("list");
</script>

<template>
  <HeadlessTab as="template" v-slot="{ selected }">
    <li
      :class="[
        'focus-visible:outline-none',
        { 'flex-1': fullWidth },
        { '-mb-px': list && list.variant == 'tabs' },
      ]"
    >
      <VTabProvider :selected="selected">
        <slot :selected="selected"></slot>
      </VTabProvider>
    </li>
  </HeadlessTab>
</template>
