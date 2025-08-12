<script setup lang="ts">
import imgUrl from "#layers/base-ui/app/assets/images/users/user1-50x50.jpg";

const quickSearch = ref(false);
const setQuickSearch = (value: boolean) => {
    quickSearch.value = value;
};
const compactMenu = useCompactMenuStore();
const setCompactMenu = (val: boolean) => {
    compactMenu.setCompactMenu(val);
};

const compactMenuOnHover = ref(false);
const activeMobileMenu = ref(false);
const switchAccount = ref(false);
const switchRoom = ref(false);
const setSwitchAccount = (value: boolean) => {
    switchAccount.value = value;
};

const notificationsPanel = ref(false);
const setNotificationsPanel = (value: boolean) => {
    notificationsPanel.value = value;
};

const activitiesPanel = ref(false);
const setActivitiesPanel = (value: boolean) => {
    activitiesPanel.value = value;
};

const isTopbarActive = ref(false)

const activeMobileMenus = ref(false);
const router = useRouter();

const { topBarActive, setTopbarActive, setTopbarMobileMenu } = useTopbarActiveStore();

// const logout = async () => {
//   await $fetch('/api/auth/logout').then(() => {
//     navigateTo('/login', { replace: true })
//   })
// }
// const { logout, getUserData } = useAuthStore()
// const { getUserProfile } = storeToRefs(useAccountStore())
const toggleCompactMenu = (event: MouseEvent) => {
    event.preventDefault();
    setCompactMenu(!compactMenu.value);
};
const requestFullscreen = () => {
    const el = document.documentElement;
    if (el.requestFullscreen) {
        el.requestFullscreen();
    }
};

onMounted(() => {
    window.onscroll = () => {
        // Topbar
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            setTopbarActive(true);
            isTopbarActive.value = true
        } else {
            setTopbarActive(false);
            isTopbarActive.value = false
        }
    };
});

</script>

<template>
    <div :class="[
        'fixed top-0 inset-x-0 mt-2.5 z-10 mx-2.5 h-[65px] bg-gradient-to-r from-theme-1 to-theme-2 rounded-[0.6rem] shadow-lg flex',
        'before:content-[\'\'] before:absolute before:inset-x-0 before:-mt-2.5 before:h-2.5 before:backdrop-blur',
    ]">
        <div :class="[
            'flex-none flex items-center z-10 px-5 h-full xl:w-[275px] overflow-hidden xl:-ml-2.5 relative duration-300 group-[.side-menu--collapsed]:xl:w-[100px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:shadow-[6px_0_12px_-4px_#0000001f]',
            'before:content-[\'\'] before:hidden before:xl:block before:absolute before:right-0 before:border-r before:border-dotted before:border-white/[0.15] before:h-4/6 before:group-[.side-menu--collapsed.side-menu--on-hover]:xl:hidden',
            'after:content-[\'\'] after:hidden after:xl:block after:absolute after:w-full after:h-full after:bg-[length:100vw_65px] after:z-[-1] after:bg-gradient-to-r after:from-theme-1 after:to-theme-2',
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
            <a href=""
                class="hidden xl:flex items-center ml-2.5 transition-[margin] group-[.side-menu--collapsed]:xl:ml-6 group-[.side-menu--collapsed.side-menu--on-hover]:xl:ml-2.5">
                <div
                    class="transition-transform ease-in-out group-[.side-menu--collapsed.side-menu--on-hover]:xl:-rotate-180">
                    <div class="w-[18px] h-[18px] relative -rotate-45 [&_div]:bg-white">
                        <div class="absolute w-[21%] left-0 inset-y-0 my-auto rounded-full opacity-50 h-[75%]">
                        </div>
                        <div class="absolute w-[21%] inset-0 m-auto h-[120%] rounded-full"></div>
                        <div class="absolute w-[21%] right-0 inset-y-0 my-auto rounded-full opacity-50 h-[75%]">
                        </div>
                    </div>
                </div>
                <div
                    class="ml-3.5 group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:opacity-0 transition-opacity text-white font-medium">
                    HURRICANE
                </div>
            </a>
            <a href="" @click="toggleCompactMenu"
                class="hidden group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:rotate-180 group-[.side-menu--collapsed]:xl:opacity-0 transition-[opacity,transform] xl:flex items-center justify-center w-[20px] h-[20px] ml-auto border rounded-full border-white hover:bg-slate-600/5">
                <Lucide icon="ArrowLeft" class="w-3.5 h-3.5 stroke-[1.3] text-white" />
            </a>
            <div class="flex items-center gap-1 xl:hidden">
                <a href="" @click="
                    (event) => {
                        event.preventDefault();
                        activeMobileMenu = true;
                        setTopbarMobileMenu(true);
                    }
                " class="p-2 rounded-full hover:bg-white/5">
                    <Lucide icon="AlignJustify" class="w-[18px] h-[18px] text-white" />
                </a>
                <a href="" class="p-2 rounded-full hover:bg-white/5" @click="
                    (event) => {
                        event.preventDefault();
                        quickSearch = true;
                    }
                ">
                    <Lucide icon="Search" class="w-[18px] h-[18px] text-white" />
                </a>
            </div>
        </div>
        <div
            class="absolute transition-[padding] duration-100 pl-[84px] xl:pl-[275px] group-[.side-menu--collapsed]:xl:pl-[100px] xl:-ml-2.5 h-full inset-x-0">
            <div class="flex items-center w-full h-full px-5">
                <!-- BEGIN: Breadcrumb -->
                <Breadcrumbs light class="flex-1 hidden xl:block">
                    <BreadcrumbLink to="/">App</BreadcrumbLink>
                    <BreadcrumbLink to="/">Dashboards</BreadcrumbLink>
                    <BreadcrumbLink to="/" :active="true">
                        Analytics
                    </BreadcrumbLink>
                </Breadcrumbs>
                <!-- END: Breadcrumb -->
                <!-- BEGIN: Search -->
                <div class="relative justify-center flex-1 hidden xl:flex" @click="
                    () => {
                        quickSearch = true;
                    }
                ">
                    <div
                        class="bg-white/[0.12] w-[350px] flex items-center py-2 px-3.5 rounded-[0.5rem] text-white/60 cursor-pointer hover:bg-white/20 transition-colors">
                        <Lucide icon="Search" class="w-[18px] h-[18px]" />
                        <div class="ml-2.5 mr-auto">Quick search...</div>
                        <div>⌘K</div>
                    </div>
                </div>
                <!-- <QuickSearch :quickSearch="quickSearch" :setQuickSearch="setQuickSearch" /> -->
                <!-- END: Search -->
                <!-- BEGIN: Notification & User Menu -->
                <div class="flex items-center flex-1">
                    <div class="flex items-center gap-1 ml-auto">
                        <a href="" class="p-2 rounded-full hover:bg-white/5" @click="
                            (e) => {
                                e.preventDefault();
                                activitiesPanel = true;
                            }
                        ">
                            <Lucide icon="LayoutGrid" class="text-white w-[18px] h-[18px]" />
                        </a>
                        <!-- <a href="" class="p-2 rounded-full hover:bg-white/5">
                    <Lucide
                      icon="Moon"
                      class="text-white w-[18px] h-[18px]"
                    />
                  </a> -->
                        <a href="" class="p-2 rounded-full hover:bg-white/5" @click="
                            (e) => {
                                e.preventDefault();
                                requestFullscreen();
                            }
                        ">
                            <Lucide icon="Expand" class="w-[18px] h-[18px]" />
                        </a>
                        <a href="" class="p-2 rounded-full hover:bg-white/5" @click="
                            (e) => {
                                e.preventDefault();
                                notificationsPanel = true;
                            }
                        ">
                            <Lucide icon="Bell" class="w-[18px] h-[18px]" />
                        </a>
                    </div>
                    <VMenu class="ml-5">
                        <MenuButton
                            class="overflow-hidden rounded-full w-[36px] h-[36px] border-[3px] border-white/[0.15] image-fit">
                            <img alt="Tailwise - Admin Dashboard Template" :src="imgUrl" />
                        </MenuButton>
                        <MenuItems class="w-56 mt-1">
                            <MenuItem @click="
                                () => {
                                    switchAccount = true;
                                }
                            ">
                            <Lucide icon="ToggleLeft" class="w-4 h-4 mr-2" />
                            Switch Account
                            </MenuItem>
                            <MenuDivider />
                            <MenuItem @click="
                                () => {
                                    router.push({
                                        name: 'settings',
                                        query: { page: 'connected-services' },
                                    });
                                }
                            ">
                            <Lucide icon="Settings" class="w-4 h-4 mr-2" />
                            Connected Services
                            </MenuItem>
                            <MenuItem @click="
                                () => {
                                    router.push({
                                        name: 'settings',
                                        query: { page: 'email-settings' },
                                    });
                                }
                            ">
                            <Lucide icon="Inbox" class="w-4 h-4 mr-2" />
                            Email Settings
                            </MenuItem>
                            <MenuItem @click="
                                () => {
                                    router.push({
                                        name: 'settings',
                                        query: { page: 'security' },
                                    });
                                }
                            ">
                            <Lucide icon="Lock" class="w-4 h-4 mr-2" />
                            Reset Password
                            </MenuItem>
                            <MenuDivider />
                            <MenuItem @click="
                                () => {
                                    router.push({
                                        name: 'settings',
                                    });
                                }
                            ">
                            <Lucide icon="Users" class="w-4 h-4 mr-2" />
                            Profile Info
                            </MenuItem>
                            <MenuItem @click="
                                () => {
                                    router.push({
                                        name: 'settings',
                                        query: { page: 'security' },
                                    });
                                }
                            ">
                            <Lucide icon="Power" class="w-4 h-4 mr-2" />
                            Logout
                            </MenuItem>
                        </MenuItems>
                    </VMenu>
                </div>
                <!-- <ActivitiesPanel :activitiesPanel="activitiesPanel" :setActivitiesPanel="setActivitiesPanel" />
                <NotificationsPanel :notificationsPanel="notificationsPanel"
                    :setNotificationsPanel="setNotificationsPanel" />
                <SwitchAccount :switchAccount="switchAccount" :setSwitchAccount="setSwitchAccount" /> -->
                <!-- END: Notification & User Menu -->
            </div>
        </div>
    </div>
</template>
