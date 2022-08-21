import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      themeButton: string;
      button: string;
      buttonPressed: string;
      input: string;
      titleText: string;
      tableBackground: string;
      border: string;
      background: string;
      text: string;
    };
  }
}
