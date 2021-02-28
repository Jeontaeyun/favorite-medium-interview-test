import { css } from "@emotion/react";

const ThemeConfig = {
  colors: {
    gray00: "#F8F9FA",
    gray10: "#F1F3F5",
    gray20: "#E9ECEF",
    gray30: "#DEE2E6",
    gray40: "#CED4DA",
    gray50: "#ADB5BD",
    gray60: "#868E96",
    gray70: "#495057",
    gray80: "#343A40",
    gray90: "#212529",
    gray100: "#121314",

    white: "#ffffff",

    main01: "#e20078",

    error: "#f03e3e",
  },
  fonts: {
    display01: css`
      font-size: 32px;
      line-height: 46px;
    `,
    display02: css`
      font-size: 28px;
      line-height: 40px;
    `,
    title1: css`
      font-size: 24px;
      line-height: 36px;
    `,
    title2: css`
      font-size: 20px;
      line-height: 32px;
    `,
    title3: css`
      font-size: 18px;
      line-height: 28px;
    `,
    body01: css`
      font-size: 16px;
      line-height: 32px;
    `,
    body02: css`
      font-size: 14px;
      line-height: 20px;
    `,
    caption: css`
      font-size: 12px;
      line-height: 18px;
    `,
  },
};

export type ThemeConfigType = typeof ThemeConfig;

export default ThemeConfig;
