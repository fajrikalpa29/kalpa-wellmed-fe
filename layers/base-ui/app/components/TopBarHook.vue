<script setup lang="ts">
import imgUrl from "#layers/base-ui/app/assets/images/users/user1-50x50.jpg";

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
  <div :class="[
    'fixed h-[65px] transition-[margin] duration-100 xl:ml-[275px] group-[.side-menu--collapsed]:xl:ml-[90px] mt-3.5 inset-x-0 top-0',
    'before:content-[\'\'] before:mx-5 before:absolute before:top-0 before:inset-x-0 before:-mt-[15px] before:h-[20px] before:backdrop-blur',
  ]">
    <div
      class="absolute inset-x-0 h-full mx-5 box rounded-xl before:content-[''] before:z-[-1] before:inset-x-4 before:shadow-sm before:h-full before:bg-slate-50 before:border before:border-slate-200 before:absolute before:rounded-lg before:mx-auto before:top-0 before:mt-3 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
      <div class="flex items-center w-full h-full px-5">
        <div class="flex items-center gap-1 xl:hidden">
          <a href="" @click="
            (event:any) => {
              event.preventDefault();
              activeMobileMenus = true;
            }
          " class="p-2 rounded-full hover:bg-slate-100">
            <Lucide icon="AlignJustify" class="w-[18px] h-[18px]" />
          </a>
          <a href="" class="p-2 rounded-full hover:bg-slate-100" @click="
            (event:any) => {
              event.preventDefault();
              quickSearch = true;
            }
          ">
            <Lucide icon="Search" class="w-[18px] h-[18px]" />
          </a>
        </div>
        <!-- BEGIN: Breadcrumb -->
        <Breadcrumbs light class="flex-1 !text-black hidden xl:block">
          <BreadcrumbLink to="/">App</BreadcrumbLink>
          <BreadcrumbLink to="/" :active="true">Dashboards</BreadcrumbLink>
        </Breadcrumbs>
        <!-- END: Breadcrumb -->
        <!-- BEGIN: Search -->
        <!-- <div class="relative justify-center flex-1 hidden xl:flex" @click="
          () => {
            quickSearch = true;
          }
        ">
          <div
            class="bg-slate-50 border w-[350px] flex items-center py-2 px-3.5 rounded-[0.5rem] text-slate-400 cursor-pointer hover:bg-slate-100 transition-colors">
            <Lucide icon="Search" class="w-[18px] h-[18px]" />
            <div class="ml-2.5 mr-auto">Quick search...</div>
            <div>⌘K</div>
          </div>
        </div> -->
        <!-- <QuickSearch :quickSearch="quickSearch" :setQuickSearch="setQuickSearch" /> -->
        <!-- END: Search -->
        <!-- BEGIN: Notification & User Menu -->
        <div class="flex items-center flex-1">
          <div class="flex items-center gap-1 ml-auto">
            <a href="" class="p-2 rounded-full hover:bg-slate-100" @click="
              (e:any) => {
                e.preventDefault();
                activitiesPanel = true;
              }
            ">
              <Lucide icon="LayoutGrid" class="w-[18px] h-[18px]" />
            </a>
            <!-- <a href="" class="p-2 rounded-full hover:bg-slate-100">
                    <Lucide icon="Moon" class="w-[18px] h-[18px]" />
                  </a> -->
            <a href="" class="p-2 rounded-full hover:bg-slate-100" @click="
              (e:any) => {
                e.preventDefault();
                requestFullscreen();
              }
            ">
              <Lucide icon="Expand" class="w-[18px] h-[18px]" />
            </a>
            <a href="" class="p-2 rounded-full hover:bg-slate-100" @click="
              (e:any) => {
                e.preventDefault();
                notificationsPanel = true;
              }
            ">
              <Lucide icon="Bell" class="w-[18px] h-[18px]" />
            </a>
          </div>
          <VMenu class="ml-5">
            <MenuButton
              class="overflow-hidden rounded-full w-[36px] h-[36px] border-[3px] border-slate-200/70 image-fit">
              <img alt="Tailwise - Admin Dashboard Template" :src="imgUrl" />
            </MenuButton>
            <MenuItems class="w-56 mt-1">
              <MenuItem @click="
                () => {
                  router.push({
                    name: 'account-profile',
                  });
                }
              ">
              <Lucide icon="Users" class="w-4 h-4 mr-2" />
              Profile Info
              </MenuItem>
              <MenuItem >
              <Lucide icon="Power" class="w-4 h-4 mr-2" />
              Logout
              </MenuItem>
            </MenuItems>
          </VMenu>
        </div>
        <!-- <ActivitiesPanel :activitiesPanel="activitiesPanel" :setActivitiesPanel="setActivitiesPanel" />
      <NotificationsPanel :notificationsPanel="notificationsPanel" :setNotificationsPanel="setNotificationsPanel" />
      <SwitchAccount :switchAccount="switchAccount" :setSwitchAccount="setSwitchAccount" /> -->
        <!-- END: Notification & User Menu -->
      </div>
    </div>
  </div>
</template>
