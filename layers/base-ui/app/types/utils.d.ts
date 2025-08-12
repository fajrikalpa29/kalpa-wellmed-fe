import { type Router, type RouteLocationNormalizedLoaded } from "vue-router";
import * as lucideIcons from "lucide-vue-next";
import {type SVGAttributes } from "vue";


export type Icon = keyof typeof lucideIcons;

interface LucideProps extends /* @vue-ignore */ SVGAttributes {
  icon: Icon;
  title?: string;
}
export interface Menu {
  icon: string;
  title: string;
  badge?: number;
  pageName?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface MenuState {
  value: Array<Menu | string>;
}
export interface Route extends RouteLocationNormalizedLoaded {
  forceActiveMenu?: string;
}

export interface FormattedMenu extends Menu {
  active?: boolean;
  activeDropdown?: boolean;
  subMenu?: FormattedMenu[];
}

export type ProvideForceActiveMenu = (pageName: string) => void;

export interface NotificationElement extends HTMLDivElement {
  toastify: ReturnType<typeof Toastify>;
  showToast: () => void;
  hideToast: () => void;
}

export interface NotificationProps extends /* @vue-ignore */ HTMLAttributes {
  options?: Options;
  refKey?: string;
}

export type ProvideNotification = (el: NotificationElement) => void;
