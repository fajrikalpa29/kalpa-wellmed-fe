<script setup lang="ts">
import imgUrl from "@base/assets/images/users/user1-50x50.jpg";

const quickSearch = ref(false);
const setQuickSearch = (value: boolean) => {
  quickSearch.value = value;
};

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
  <div
    class="fixed h-[65px] transition-[margin] duration-100 xl:ml-[275px] group-[.side-menu--collapsed]:xl:ml-[90px] mt-3.5 inset-x-0 top-0">
    <div :class="[
      'top-bar absolute left-0 xl:left-3.5 right-0 h-full mx-5 group',
      'before:content-[\'\'] before:absolute before:top-0 before:inset-x-0 before:-mt-[15px] before:h-[20px] before:backdrop-blur',
      { 'top-bar--active': isTopbarActive },
    ]">
      <div
        class="container-fluid px-10 flex items-center w-full h-full transition-[padding,background-color,border-color] ease-in-out duration-300 box bg-transparent border-transparent shadow-none group-[.top-bar--active]:box group-[.top-bar--active]:px-5 group-[.top-bar--active]:bg-transparent group-[.top-bar--active]:border-transparent group-[.top-bar--active]:bg-gradient-to-r group-[.top-bar--active]:from-theme-1 group-[.top-bar--active]:to-theme-2">
        <div class="flex items-center gap-1 xl:hidden">
          <a href="" @click="(event) => {
            event.preventDefault();
            activeMobileMenus = true;
            setTopbarMobileMenu(true);
          }
            " class="p-2 text-white rounded-full hover:bg-white/5">
            <Lucide icon="AlignJustify" class="w-[18px] h-[18px]" />
          </a>
          <!-- <a href="" class="p-2 text-white rounded-full hover:bg-white/5" @click="(event) => {
            event.preventDefault();
            quickSearch = true;
          }
            ">
            <Lucide icon="Search" class="w-[18px] h-[18px]" />
          </a> -->
        </div>
        <!-- BEGIN: Breadcrumb -->
        <Breadcrumbs light class="flex-1 text-black hidden xl:block">
          <BreadcrumbLink to="/">App</BreadcrumbLink>
          <BreadcrumbLink to="/" :active="true">Dashboards</BreadcrumbLink>
        </Breadcrumbs>
        <!-- END: Breadcrumb -->
        <!-- BEGIN: Search -->
        <div class="relative justify-center flex-1 hidden xl:flex" @click="() => {
          quickSearch = true;
        }
          ">
          <!-- <div
            class="bg-white/[0.12] border-transparent border w-[350px] flex items-center py-2 px-3.5 rounded-[0.5rem] text-white/60 cursor-pointer hover:bg-white/[0.15] transition-colors duration-300 hover:duration-100">
            <Lucide icon="Search" class="w-[18px] h-[18px]" />
            <div class="ml-2.5 mr-auto">Quick search...</div>
            <div>⌘K</div>
          </div> -->
        </div>
        <!-- <QuickSearch :quickSearch="quickSearch" :setQuickSearch="setQuickSearch" /> -->
        <!-- END: Search -->
        <!-- BEGIN: Notification & User Menus -->
        <div class="flex items-center flex-1">
          <div class="flex items-center gap-1 ml-auto">
            <!-- <a v-if="getUserProfile?.reference?.room" href="" class="p-2 text-white rounded-full hover:bg-white/5"
              @click="(e) => {
              e.preventDefault();
              switchRoom = true;
            }
              ">
              <Chip :label="getUserProfile?.reference?.room?.name" icon="pi pi-home" severity="primary" />
            </a> -->
            <!-- <a
                      href=""
                      class="p-2 text-white rounded-full hover:bg-white/5"
                    >
                      <Lucide icon="Moon" class="w-[18px] h-[18px]" />
                    </a> -->
            <!-- <a href="" class="p-2 text-white rounded-full hover:bg-white/5" @click="(e) => {
              e.preventDefault();
              requestFullscreen();
            }
              ">
              <Lucide icon="Expand" class="w-[18px] h-[18px]" />
            </a> -->
            <!-- <a href="" class="p-2 text-white rounded-full hover:bg-white/5" @click="(e) => {
              e.preventDefault();
              notificationsPanel = true;
            }
              ">
              <Lucide icon="Bell" class="w-[18px] h-[18px]" />
            </a> -->
          </div>
          <VMenu class="ml-5">
            <MenuButton class="flex items-center gap-2">
              <!-- <div class="overflow-hidden rounded-full w-[36px] h-[36px] border-[3px] border-white/[0.15] image-fit">
                <img alt="Tailwise - Admin Dashboard Template" :src="imgUrl" />
              </div> -->
              <Chip label="nama" class="bg-transparent"
                :image="imgUrl" />
            </MenuButton>
            <MenuItems class="w-56 mt-1">
              <MenuItem @click="() => {
                router.push({
                  name: 'account-profile',
                });
              }
                ">
              <Lucide icon="Users" class="w-4 h-4 mr-2" />
              Profile Info
              </MenuItem>
              <!-- <MenuItem @click="() => {
                switchAccount = true;
              }
                ">
              <Lucide icon="User" class="w-4 h-4 mr-2" />
              Role :
              <Chip :label="getUserProfile?.role?.name" severity="primary" />
              </MenuItem> -->
              <MenuDivider />
              <MenuItem>
              <Lucide icon="Power" class="w-4 h-4 mr-2" />
              Logout
              </MenuItem>
            </MenuItems>
          </VMenu>
        </div>
        <!-- <ActivitiesPanel :activitiesPanel="activitiesPanel" :setActivitiesPanel="setActivitiesPanel" /> -->
        <!-- <NotificationsPanel :notificationsPanel="notificationsPanel" :setNotificationsPanel="setNotificationsPanel" /> -->
        <!-- <SwitchAccount :switchAccount="switchAccount" :setSwitchAccount="setSwitchAccount" /> -->
        <!-- END: Notification & User Menus -->
        <!-- <DialogSwitchRoles v-model:visible="switchAccount" /> -->
        <!-- <DialogSwitchRoom v-model:visible="switchRoom" /> -->
      </div>
    </div>
  </div>
</template>
