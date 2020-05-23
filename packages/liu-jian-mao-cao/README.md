# Fontsource Liu Jian Mao Cao

[![npm version](https://badge.fury.io/js/fontsource-liu-jian-mao-cao.svg)](https://github.com/DecliningLotus/fontsource) [![Generic badge](https://img.shields.io/badge/fontsource-passing-brightgreen)](https://github.com/DecliningLotus/fontsource) [![GitHub stars](https://img.shields.io/github/stars/DecliningLotus/fontsource.svg?style=social&label=Star&maxAge=2592000)](https://GitHub.com/DecliningLotus/fontsource/stargazers/)

The CSS and web font files to easily self-host the “Liu Jian Mao Cao” font. Please visit the main [Fontsource monorepo](https://github.com/DecliningLotus/fontsource) to view more details on this package.

## Installation

Fontsource assumes you are using a bundler, such as Webpack, to load in CSS. Tools like [CRA](https://create-react-app.dev/), [Gatsby](https://www.gatsbyjs.org/) and [Next.js](https://nextjs.org/) are prebuilt example solutions that are compatible.

```javascript
yarn add fontsource-liu-jian-mao-cao // npm install fontsource-liu-jian-mao-cao
```

Then within your app entry file or site component, import it in. For example in Gatsby, you could simply import it into your `layout.js` component or `gatsby-browser.js` for limited circumstances.

```javascript
import "fontsource-liu-jian-mao-cao" //require("fontsource-liu-jian-mao-cao")
```

Fontsource allows you to select font subsets, weights and even individual styles, allowing you to cut down on payload sizes to the last byte! The default selection above, however, sticks to the Latin subset including all weights and styles.

```javascript
import "fontsource-liu-jian-mao-cao/latin-ext.css" // All weights and styles included.
import "fontsource-liu-jian-mao-cao/cyrillic-ext-400.css" // All styles included.
import "fontsource-liu-jian-mao-cao/greek-700-normal.css" // Select either normal or italic.
```

Alternatively, the same solutions could be imported via SCSS!

```scss
@import "~fontsource-liu-jian-mao-cao/index";
@import "~fontsource-liu-jian-mao-cao/vietnamese-300-italic";
```

_These examples may not reflect actual compatibility. Please refer below._

Supported variables:

- Subsets: `[chinese-simplified,latin]`
- Weights: `[400]`
- Styles: `[normal]`

## Licensing

It is important to always read the license for every font that you use.
Most of the fonts in the collection use the SIL Open Font License, v1.1. Some fonts use the Apache 2 license. The Ubuntu fonts use the Ubuntu Font License v1.0.

[Google Fonts License Attributions](https://fonts.google.com/attribution)

## Other Notes

Feel free to star and contribute new ideas to this repository that aim to improve the performance of font loading, as well as expanding the existing library we already have. Any suggestions or ideas can be voiced via an [issue](https://github.com/DecliningLotus/fontsource/issues).