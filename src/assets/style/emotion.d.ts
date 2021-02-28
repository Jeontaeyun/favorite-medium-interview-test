import "@emotion/react";
import { ThemeConfigType } from "./theme-config";

declare module "@emotion/react" {
  // eslint-disable-next-line
  export interface Theme extends ThemeConfigType {}
}
