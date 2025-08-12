import { defineStore } from "pinia";

interface State {
    pageTitle: string
    acl : Acl.Permission | null
    aclPage: Acl.Permission | null
}


export const useSystemStore = defineStore("system", {
    state: () => ({
        pageTitle: 'Halaman',
        acl: null,
        aclPage: null
    }) as State,
    getters: {
        getPageTitle: (state) => state.pageTitle,
        getAcl: (state) => state.acl,
        getAclPage: (state) => state.aclPage
    },
    actions: {
        setPageTitle(pageTitle: string) {
            this.pageTitle = pageTitle
        },
        setAcl(acl: Acl.Permission) {
            this.acl = acl
        },
        setAclPage(aclPage: Acl.Permission) {
            this.aclPage = aclPage
        }
    }
});