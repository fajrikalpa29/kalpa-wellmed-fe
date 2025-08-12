<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const {
  nestedMenu,
  linkTo,
  enter,
  forceActiveMenu,
  leave,
} = useSideMenu();

import SimpleBar from "simplebar";
import type { FormattedMenu, ProvideForceActiveMenu, Route } from "../types/utils";
const compactMenu = useCompactMenuStore();
const setCompactMenu = (val: boolean) => {
  compactMenu.setCompactMenu(val);
};

const compactMenuOnHover = ref(false);
const activeMobileMenu = ref(false);
const route: Route = useRoute();
const router = useRouter();
let formattedMenu = ref<Array<FormattedMenu | string>>([]);
const setFormattedMenu = (
  computedFormattedMenu: Array<FormattedMenu | string>
) => {
  formattedMenu.value = computedFormattedMenu;
};
const menuStore = useMenuStore();
const { getMenus } = storeToRefs(useAuthStore());
const menu = computed(() => nestedMenu(getMenus.value, route));

provide<ProvideForceActiveMenu>("forceActiveMenu", (pageName: string) => {
  forceActiveMenu(route, pageName);
  setFormattedMenu(menu.value);
});

const scrollableRef = ref<HTMLDivElement>();

const toggleCompactMenu = (event: MouseEvent) => {
  event.preventDefault();
  setCompactMenu(!compactMenu.value);
};

const compactLayout = () => {
  if (window.innerWidth <= 1600) {
    setCompactMenu(true);
  }
};

const { topBarMobileMenu } = storeToRefs(useTopbarActiveStore());
const { setTopbarMobileMenu } = useTopbarActiveStore();


watch(() => menu.value, (value) => {
  setFormattedMenu(value);
});

watch(
  computed(() => route.path),
  () => {
    delete route.forceActiveMenu;
  }
);

onMounted(() => {
  if (scrollableRef.value) {
    new SimpleBar(scrollableRef.value);
  }

  setFormattedMenu(menu.value);

  compactLayout();

  window.onresize = () => {
    compactLayout();
  };
});
</script>

<template>
  <div :class="[
    'xl:ml-0 shadow-xl transition-[margin,padding] duration-300 xl:shadow-none fixed top-0 left-0 z-50 side-menu group inset-y-0 xl:py-3.5 xl:pl-3.5',
    'after:content-[\'\'] after:fixed after:inset-0 after:bg-black/80 after:xl:hidden',
    { 'side-menu--collapsed': compactMenu.value },
    { 'side-menu--on-hover': compactMenuOnHover },
    { 'ml-0 after:block': topBarMobileMenu },
    { '-ml-[275px] after:hidden': !topBarMobileMenu },
  ]">
    <div :class="[
      'fixed ml-[275px] w-10 h-10 items-center justify-center xl:hidden z-50',
      { flex: topBarMobileMenu },
      { hidden: !topBarMobileMenu },
    ]">
      <a href="" @click="(event) => {
        event.preventDefault();
        activeMobileMenu = false;
        setTopbarMobileMenu(false);
      }
        " class="mt-5 ml-5">
        <Lucide icon="X" class="w-8 h-8 text-white" />
      </a>
    </div>
    <div :class="[
      'h-full box bg-white/[0.95] rounded-none xl:rounded-xl z-20 relative w-[275px] duration-300 transition-[width] group-[.side-menu--collapsed]:xl:w-[91px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:shadow-[6px_0_12px_-4px_#0000000f] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px] overflow-hidden flex flex-col',
    ]" @mouseover="(event) => { event.preventDefault(); compactMenuOnHover = true; }"
      @mouseleave="(event) => { event.preventDefault(); compactMenuOnHover = false; }">
      <div :class="[
        'flex-none hidden xl:flex items-center z-10 h-[65px] px-5 w-[275px] group-[.side-menu--collapsed]:xl:p-0 overflow-hidden relative duration-300 group-[.side-menu--collapsed]:xl:w-[91px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:px-5 group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px]',
      ]">

        <a href="" v-if="!compactMenu.value"
          class="flex items-center transition-[margin] duration-300 group-[.side-menu--collapsed]:xl:ml-2 group-[.side-menu--collapsed.side-menu--on-hover]:xl:ml-0">
          <img src="/logo-padma-new.png" class="w-full p-3 h-[60px]" alt="">
        </a>
        <a href="" v-else
          class="flex items-center transition-[margin] duration-300 group-[.side-menu--collapsed]:xl:p-0 group-[.side-menu--collapsed]:xl:ml-2 group-[.side-menu--collapsed.side-menu--on-hover]:xl:ml-0">
          <img src="/box-logo.png" class="w-full p-3 h-[60px]" alt="">
        </a>

        <a href="" @click="toggleCompactMenu"
          class="hidden group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:rotate-180 group-[.side-menu--collapsed]:xl:opacity-0 transition-[opacity,transform] xl:flex items-center justify-center w-[20px] h-[20px] ml-auto border rounded-full border-slate-600/40 hover:bg-slate-600/5">
          <Lucide icon="ArrowLeft" class="w-3.5 h-3.5 stroke-[1.3]" />
        </a>
      </div>
      <div ref="scrollableRef" :class="[
        'w-full h-full z-20 px-5 overflow-y-auto overflow-x-hidden pb-3 [-webkit-mask-image:-webkit-linear-gradient(top,rgba(0,0,0,0),black_30px)] [&:-webkit-scrollbar]:w-0 [&:-webkit-scrollbar]:bg-transparent',
        '[&_.simplebar-content]:p-0 [&_.simplebar-track.simplebar-vertical]:w-[10px] [&_.simplebar-track.simplebar-vertical]:mr-0.5 [&_.simplebar-track.simplebar-vertical_.simplebar-scrollbar]:before:bg-slate-400/30',
      ]">
        <ul class="scrollable py-5">
          <NavMenu :items="formattedMenu" :link-to="linkTo" :router="router"
            :set-formatted-menu="setFormattedMenu" :enter="enter" :leave="leave" />
        </ul>
      </div>
    </div>
    <TopBar />
  </div>
</template>
