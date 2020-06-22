import { LayoutConfigModel } from './layout-config.model';

export const layoutConfig: LayoutConfigModel = {
  colorTheme: "theme-default",
  layout: {
    header: {
      hidden: false
    },
    navbar: {
      hidden: false,
      folded: false,
      variant: "vertical-style"
    },
    footer: {
      hidden: false
    }
  }
}