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
let formattedMenu = ref<Array<FormattedMenu | string>>([
    {
        "title": "Dashboard",
        "icon": "pi pi-home",
        "pageName": "index"

    }
]);
const setFormattedMenu = (
    computedFormattedMenu: Array<FormattedMenu | string>
) => {
    formattedMenu.value = computedFormattedMenu;
};
const menuStore = useMenuStore();
// const { getMenus } = storeToRefs(useAuthStore());
const menu = computed(() => [
    {
        "title": "Dashboard",
        "icon": "pi pi-home",
        "pageName": "index"

    }
]);

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
        'fixed top-0 left-0 z-50 side-menu group',
        { 'side-menu--collapsed': compactMenu.value },
        { 'side-menu--on-hover': compactMenuOnHover },
    ]">
        <TopBarHurricane />
        <div :class="[
            'z-10 xl:ml-0 xl:z-0 fixed shadow-xl xl:shadow-none bg-[#e2e8f0] w-[275px] border-dotted border-slate-400/60 duration-300 transition-[width,margin] group-[.side-menu--collapsed]:xl:w-[100px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:border-slate-50 group-[.side-menu--collapsed.side-menu--on-hover]:xl:border-solid group-[.side-menu--collapsed.side-menu--on-hover]:xl:shadow-[6px_0_12px_-4px_#0000000f] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px] xl:pt-[65px] xl:pl-2.5 xl:relative overflow-hidden border-r h-screen flex flex-col',
            'before:content-[\'\'] before:transition-colors before:w-screen before:h-screen before:absolute before:bg-texture-black before:bg-contain before:bg-fixed before:bg-[center_-20rem] before:bg-no-repeat before:bg-slate-50 group-[.side-menu--collapsed.side-menu--on-hover]:xl:before:bg-white',
            'after:content-[\'\'] after:fixed after:inset-0 after:bg-black/80 after:z-[-1] after:xl:hidden',
            { 'ml-0 after:block': topBarMobileMenu },
            { '-ml-[275px] after:hidden': !topBarMobileMenu },
        ]" @mouseover="
            (event) => {
                event.preventDefault();
                compactMenuOnHover = true;
            }
        " @mouseleave="
            (event) => {
                event.preventDefault();
                compactMenuOnHover = false;
            }
        ">
            <div :class="[
                'fixed ml-[275px] w-10 h-10 items-center justify-center xl:hidden',
                { flex: topBarMobileMenu },
                { hidden: !topBarMobileMenu },
            ]">
                <a href="" @click="
                    (event) => {
                        event.preventDefault();
                        activeMobileMenu = false;
                        setTopbarMobileMenu(false);
                    }
                " class="mt-5 ml-5">
                    <Lucide icon="X" class="w-8 h-8 text-white" />
                </a>
            </div>
            <div ref="scrollableRef" :class="[
                'w-full h-full z-20 px-5 mt-5 overflow-y-auto overflow-x-hidden pb-3 [-webkit-mask-image:-webkit-linear-gradient(top,rgba(0,0,0,0),black_30px)] [&:-webkit-scrollbar]:w-0 [&:-webkit-scrollbar]:bg-transparent',
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
    </div>
</template>
