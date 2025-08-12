<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import SimpleBar from "simplebar";
import type { FormattedMenu, ProvideForceActiveMenu, Route } from "../types/utils";

const {
  nestedMenu,
  linkTo,
  forceActiveMenu,
} = useSideMenu();

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
// const { getMenus } = storeToRefs(useAuthStore());
const menu = computed(() => []);

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
    'xl:ml-0 shadow-xl transition-[margin] duration-300 xl:shadow-none fixed top-0 left-0 z-50 side-menu group',
    'after:content-[\'\'] after:fixed after:inset-0 after:bg-black/80 after:xl:hidden',
    { 'side-menu--collapsed': compactMenu.value },
    { 'side-menu--on-hover': compactMenuOnHover },
    { 'ml-0 after:block': activeMobileMenu },
    { '-ml-[275px] after:hidden': !activeMobileMenu },
  ]">
    <div :class="[
      'fixed ml-[275px] w-10 h-10 items-center justify-center xl:hidden z-50',
      { flex: activeMobileMenu },
      { hidden: !activeMobileMenu },
    ]">
      <a href="" @click="(event: any) => {
        event.preventDefault();
        activeMobileMenu = false;
        setTopbarMobileMenu(false);
      }
      " class="mt-5 ml-5">
        <Lucide icon="X" class="w-8 h-8 text-white" />
      </a>
    </div>
    <div :class="[
      'z-20 relative w-[275px] border-slate-200/80 duration-300 transition-[width] group-[.side-menu--collapsed]:xl:w-[91px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:shadow-[6px_0_12px_-4px_#0000000f] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px] h-screen flex flex-col',
      'before:content-[\'\'] before:absolute before:inset-0 before:xl:rounded-[0_0.75rem_0.75rem_0/0_1.1rem_1.1rem_0] before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 before:border-slate-200/80 before:group-[.side-menu--collapsed.side-menu--on-hover]:xl:shadow-[6px_0_12px_-4px_#0000000f]',
      'after:content-[\'\'] after:absolute after:inset-0 after:xl:-mr-4 after:bg-texture-white after:bg-contain after:bg-fixed after:bg-[center_-20rem] after:bg-no-repeat',
    ]" @mouseover="
      (event: any) => {
        event.preventDefault();
        compactMenuOnHover = true;
      }
    " @mouseleave="
        (event: any) => {
          event.preventDefault();
          compactMenuOnHover = false;
        }
      ">
      <div :class="[
        'flex-none hidden xl:flex items-center z-10 h-[65px] px-5 w-[275px] group-[.side-menu--collapsed]:xl:p-0 overflow-hidden relative duration-300 group-[.side-menu--collapsed]:xl:w-[91px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:px-5 group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px]',
      ]">

        <a href="" v-if="!compactMenu.value"
          class="flex items-center transition-[margin] duration-300 group-[.side-menu--collapsed]:xl:ml-2 group-[.side-menu--collapsed.side-menu--on-hover]:xl:ml-0">
          <img src="/logo-gir.png" class="max-w-[200px] p-3" alt="">
        </a>
        <a href="" v-else
          class="flex items-center transition-[margin] duration-300 group-[.side-menu--collapsed]:xl:p-0 group-[.side-menu--collapsed]:xl:ml-2 group-[.side-menu--collapsed.side-menu--on-hover]:xl:ml-0">
          <img src="/logo-only.png" class="w-full p-3 max-h-[60px]" alt="">
        </a>

        <a href="" @click="toggleCompactMenu"
          class="hidden group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:rotate-180 group-[.side-menu--collapsed]:xl:opacity-0 transition-[opacity,transform] xl:flex items-center justify-center w-[20px] h-[20px] ml-auto border rounded-full border-white hover:bg-slate-600/5">
          <Lucide icon="ArrowLeft" class="w-3.5 h-3.5 stroke-[1.3] text-white" />
        </a>
      </div>
      <div ref="scrollableRef" :class="[
        'w-full h-full z-20 px-5 overflow-y-auto mt-4 overflow-x-hidden pb-3 [-webkit-mask-image:-webkit-linear-gradient(top,rgba(0,0,0,0),black_30px)] [&:-webkit-scrollbar]:w-0 [&:-webkit-scrollbar]:bg-transparent',
        '[&_.simplebar-content]:p-0 [&_.simplebar-track.simplebar-vertical]:w-[10px] [&_.simplebar-track.simplebar-vertical]:mr-0.5 [&_.simplebar-track.simplebar-vertical_.simplebar-scrollbar]:before:bg-slate-400/30',
      ]">
        <ul class="scrollable">
          <template v-for="(menuItem, menuKey) in formattedMenu">
            <!-- Divider case -->
            <li v-if="typeof menuItem === 'string'" class="side-menu__divider" :key="'divider-' + menuKey">
              {{ menuItem }}
            </li>

            <!-- Menu item case -->
            <NavMenu v-else :key="menuKey" :menu="menuItem" @link-to="(menu) => {
              linkTo(menu, router);
              setFormattedMenu([...formattedMenu]);
            }" />
          </template>
        </ul>
      </div>
    </div>
    <TopBarHook />
  </div>
</template>
