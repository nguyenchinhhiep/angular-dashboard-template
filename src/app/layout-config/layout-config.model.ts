export interface LayoutConfigModel {
  colorTheme: string;
  layout: {
    header: {
      hidden: boolean;
    },
    navbar: {
      hidden: boolean;
      folded: boolean;
      variant: string;
    },
    footer: {
      hidden: boolean;
    }
  }
}