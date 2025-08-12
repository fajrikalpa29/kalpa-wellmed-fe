import { defineStore } from "pinia";

export const useAccountStore = defineStore(
  "accountStore",
  () => {
    // State
    const userProfile = ref<User.Profile | undefined>(undefined);
    const clinicProfile = ref<Workspace.Data | undefined>(undefined);

    // Getters
    const getUserProfile = computed(() => userProfile.value);

    const getClinicProfile = computed(() => clinicProfile.value);

    // Actions
    const setUserProfile = (data: User.Profile) => {
      userProfile.value = data;
    };
    const setClinicProfile = (data: Workspace.Data) => {
      clinicProfile.value = data;
    };

    const clearUserProfile = () => {
      userProfile.value = undefined;
    };

    const clearClinicProfile = () => {
      clinicProfile.value = undefined;
    };

    return {
      userProfile,
      getUserProfile,
      setUserProfile,
      clearUserProfile,
      clinicProfile,
      getClinicProfile,
      setClinicProfile,
      clearClinicProfile,
    };
  },
  {
    persist: {
      storage: import.meta.client ? localStorage : undefined,
    },
  }
);
