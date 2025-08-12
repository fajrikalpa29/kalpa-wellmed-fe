<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import type { FormattedMenu } from "../types/utils";

const props = defineProps<{
  menu: FormattedMenu
}>();

const emit = defineEmits<{
  (e: 'link-to', menu: FormattedMenu): void
}>();

const handleClick = (event: MouseEvent, menu: FormattedMenu) => {
  event.preventDefault();
  emit('link-to', menu);
};
</script>

<template>
  <li>
    <a href="" :class="[
      'side-menu__link', 'text-white',
      { 'side-menu__link--active': menu.active },
      { 'side-menu__link--active-dropdown': menu.activeDropdown },
    ]" @click="(event) => handleClick(event, menu)">
      <Icon :name="menu.icon" class="side-menu__link__icon" />
      <div class="side-menu__link__title" v-tooltip="menu.title">{{ menu.title }}</div>
      <div v-if="menu.badge" class="side-menu__link__badge">
        {{ menu.badge }}
      </div>
      <Lucide v-if="menu.subMenu" icon="ChevronDown" class="side-menu__link__chevron" />
    </a>

    <Transition enter-active-class="transition" enter-from-class="opacity-0" leave-active-class="transition"
      leave-to-class="opacity-0">
      <ul v-if="menu.subMenu && menu.activeDropdown">
        <NavMenu v-for="(subMenu, subMenuKey) in menu.subMenu" :key="subMenuKey" :menu="subMenu"
          @link-to="(menu) => emit('link-to', menu)" />
      </ul>
    </Transition>
  </li>
</template>
