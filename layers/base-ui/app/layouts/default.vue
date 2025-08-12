<script setup lang="ts">
const compactMenu = useCompactMenuStore();
const isTopbarActive = ref(false)

const { getPageTitle } = useSystemStore()

onMounted(() => {
  window.onscroll = () => {
    // Topbar
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      isTopbarActive.value = true
    } else {
      isTopbarActive.value = false
    }
  };
});
</script>

<template>
  <div :class="[
    'hurricane',
    'before:content-[\'\'] before:z-[-1] before:w-screen before:bg-slate-50 before:top-0 before:h-screen before:fixed before:bg-texture-black before:bg-contain before:bg-fixed before:bg-[center_-20rem] before:bg-no-repeat',
  ]">
    <SideNavHurricane />
    <div :class="[
      'transition-[margin,width] duration-100 px-5 xl:mr-2.5 mt-[75px] pt-[31px] pb-16',
      { 'xl:ml-[275px]': !compactMenu.value },
      { 'xl:ml-[100px]': compactMenu.value },
    ]">
      <Transition name="fade" mode="out-in">
        <div class="px-5 mt-16">
          <div class="container-fluid mt-[55px] z-10 relative">
            <NuxtPage />
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
