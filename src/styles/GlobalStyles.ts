import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: NotoSans;
    font-weight: 400;
    src: url(${require("./fonts/NotoSans-Regular.woff2")}) format("woff2"),
      url(${require("./fonts/NotoSans-Regular.woff")}) format("woff"),
      url(${require("./fonts/NotoSans-Regular.otf")}) format("truetype");
  }
  @font-face {
    font-family: NotoSans;
    font-weight: 500;
    src: url(${require("./fonts/NotoSans-Medium.woff2")}) format("woff2"),
      url(${require("./fonts/NotoSans-Medium.woff")}) format("woff"),
      url(${require("./fonts/NotoSans-Medium.otf")}) format("truetype");
  }
  @font-face {
    font-family: NotoSans;
    font-weight: 700;
    src: url(${require("./fonts/NotoSans-Bold.woff2")}) format("woff2"),
      url(${require("./fonts/NotoSans-Bold.woff")}) format("woff"),
      url(${require("./fonts/NotoSans-Bold.otf")}) format("truetype");
  }
  @font-face {
    font-family: Roboto;
    font-weight: 400;
    src: url(${require("./fonts/Roboto-Regular-webfont.woff")}) format("woff"),
      url(${require("./fonts/Roboto-Regular-webfont.ttf")}) format("truetype");
  }
  @font-face {
    font-family: Roboto;
    font-weight: 500;
    src: url(${require("./fonts/Roboto-Medium-webfont.woff")}) format("woff"),
      url(${require("./fonts/Roboto-Medium-webfont.ttf")}) format("truetype");
  }
  @font-face {
    font-family: Roboto;
    font-weight: 700;
    src: url(${require("./fonts/Roboto-Bold-webfont.woff")}) format("woff"),
      url(${require("./fonts/Roboto-Bold-webfont.ttf")}) format("truetype");
  }


  ${reset};
  * {
      box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, sub, sup, tt, var,
  u, i, center, dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video , button, input,
  select, textarea {
    font-family: NotoSans, Roboto, sans-serif;
    word-break: break-all;
    color: #7878AB;
  }
  a {
      color: inherit;
      text-decoration: none;
  }
  input,
  button {
      border: 0px;
      opacity: 1;
      transition: opacity 0.3s;
      &:focus,
      &:active{ outline: none }
  }
`;

export default GlobalStyle;
