import {createGlobalStyle} from "styled-components";

const CssReset = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    direction: rtl;
    //font-family: ({ theme }) => theme?.fonts.primary};
    font-family: iranyekan, Tahoma, sans-serif;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    height: 100%;
    background-color: white;
    overflow-y: hidden;
  }

  html {
    font-size: 14px;
  }

  html, body {
    height: 100%;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    //content: '';
    content: none;
  }

  img {
    object-fit: cover;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  #__next {
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 100%;
    overflow-y: hidden;
  }

  a {
    text-decoration: none;
    color: currentColor;

    &:hover {
      text-decoration: none;
    }

    &:focus {
      text-decoration: none;
    }
  }

  ul {
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 500;
    line-height: 1.1;
  }

  /* TOP MARGINS */
  .mt-4 {
    margin-top: 4px;
  }

  .mt-8 {
    margin-top: 8px;
  }

  .mt-12 {
    margin-top: 12px;
  }

  .mt-16 {
    margin-top: 16px !important;
  }

  .mt-20 {
    margin-top: 20px;
  }

  .mt-24 {
    margin-top: 24px;
  }

  .mt-28 {
    margin-top: 28px;
  }

  .mt-32 {
    margin-top: 32px;
  }

  .mt-36 {
    margin-top: 36px;
  }

  .mt-40 {
    margin-top: 40px;
  }

  .mt-64 {
    margin-top: 64px;
  }

  .mt-80 {
    margin-top: 80px;
  }

  /* RIGHT MARGINS */
  .mr-4 {
    margin-right: 4px;
  }

  .mr-8 {
    margin-right: 8px;
  }

  .mr-12 {
    margin-right: 12px;
  }

  .mr-16 {
    margin-right: 16px;
  }

  .mr-20 {
    margin-right: 20px;
  }

  .mr-24 {
    margin-right: 24px;
  }

  .mr-28 {
    margin-right: 28px;
  }

  .mr-32 {
    margin-right: 32px;
  }

  .mr-36 {
    margin-right: 36px;
  }

  .mr-40 {
    margin-right: 40px;
  }

  .mr-64 {
    margin-right: 64px;
  }

  .mr-80 {
    margin-right: 80px;
  }

  /* BOTTOM MARGINS */
  .mb-4 {
    margin-bottom: 4px;
  }

  .mb-8 {
    margin-bottom: 8px;
  }

  .mb-12 {
    margin-bottom: 12px;
  }

  .mb-16 {
    margin-bottom: 16px;
  }

  .mb-20 {
    margin-bottom: 20px;
  }

  .mb-24 {
    margin-bottom: 24px;
  }

  .mb-28 {
    margin-bottom: 28px;
  }

  .mb-32 {
    margin-bottom: 32px;
  }

  .mb-36 {
    margin-bottom: 36px;
  }

  .mb-40 {
    margin-bottom: 40px;
  }

  .mb-64 {
    margin-bottom: 64px;
  }

  .mb-80 {
    margin-bottom: 80px;
  }

  /* LEFT MARGINS */
  .ml-4 {
    margin-left: 4px;
  }

  .ml-8 {
    margin-left: 8px;
  }

  .ml-12 {
    margin-left: 12px;
  }

  .ml-16 {
    margin-left: 16px;
  }

  .ml-20 {
    margin-left: 20px;
  }

  .ml-24 {
    margin-left: 24px;
  }

  .ml-28 {
    margin-left: 28px;
  }

  .ml-32 {
    margin-left: 32px;
  }

  .ml-36 {
    margin-left: 36px;
  }

  .ml-40 {
    margin-left: 40px;
  }

  .ml-64 {
    margin-left: 64px;
  }

  .ml-80 {
    margin-left: 80px;
  }

  /* Auto Margins */
  .mt-auto {
    margin-top: auto;
  }

  .mr-auto {
    margin-right: auto;
  }

  .mb-auto {
    margin-bottom: auto;
  }

  .ml-auto {
    margin-left: auto;
  }
`;


export default CssReset;
