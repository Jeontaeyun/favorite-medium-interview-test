import { css } from "@emotion/react";
import ThemeConfig from "./theme-config";

const ResetStyle = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const GlobalStyleConfig = css`
  ${ResetStyle}
  * {
    font-family: "Noto Sans KR", sans-serif !important;
    -webkit-tap-highlight-color: transparent;
    &::selection {
      background-color: transparent;
    }
  }
  h1,
  h2,
  h3,
  h4,
  p,
  div,
  a {
    color: ${ThemeConfig.colors.gray90};
  }
  h1 {
    ${ThemeConfig.fonts.title1}
    font-weight:bold;
  }
  h2 {
    ${ThemeConfig.fonts.title2}
    font-weight:bold;
  }
  h3 {
    ${ThemeConfig.fonts.title3}
    font-weight:bold;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    &::selection {
      background-color: transparent;
    }
  }
`;

export default GlobalStyleConfig;
