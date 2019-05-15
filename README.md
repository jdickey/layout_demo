# Layout Demo

This experiment explores how CSS Grid and Flexbox support development of a responsive grid-like Web page (and, by extension, site or app) using pure modern CSS and a minimum of plain-vanilla modern JavaScript.

The goal was, without use of a CSS framework such as [Bootstrap](https://getbootstrap.com/), [Semantic UI](https://semantic-ui.com/), or [Bulma](https://bulma.io/), to create a page displaying

1. A header (with banner and hero image);
2. A "page-specific" menu (here, various "sorting critera" for an article list);
3. A non-page-specific authentication navbar with Sign Up and Sign In buttons *or* a user-action navbar with buttons for New Post, View Article, and Sign Out; both with a text greeting;
4. An "article summary" grid, where each cell in the grid displays
	1. An article title, author, timestamp, and "author-defined" tags;
	2. An "extract" of the article content; and
	3. An action menu, including items for Read Article, View Author Profile, and Share Article;
5. A footer section with a copyright notice and a site-navigation menu.

The resulting HTML markup and CSS styling (using [Sass SCSS](https://sass-lang.com/)) should be as maintainable, clean, and efficient as practicable; again, without use of any third-party library for component styling.

Why do it this way? Experience has taught us that starting with a framework, even a good, mature one, will surprisingly quickly produce markup and styling that is nearly inscrutable to would-be maintainers, leading to a situation where direct editing of the markup becomes quite difficult without either breaking the page or requiring an excessive amount of effort.

These frameworks and other tools were extremely useful, even a practical necessity, up until quite recently; they made it practical to develop complex UI that would render as intended across all major (or at least supported) browsers and platforms. Thankfully, standardisation has reached the point where such intermediation is no longer the necessity it was even five years ago.

## Use

This has been tested with several browsers, including [Firefox](https://www.mozilla.org/firefox/), [Opera](https://www.opera.com), [Brave Browser](https://brave.com/), and [Microsoft Edge](https://microsoftedge.microsoft.com/), all under macOS Mojave 10.14.5.

### Locally

#### Setting Up Tools

Layout Demo requires the [Dart Sass CLI tool](https://sass-lang.com/install) (if installing on macOS, we *strongly* recommend the documented Homebrew install). This is used to transform [Sass SCSS](https://sass-lang.com/) stylesheets and partials into a combined CSS file (`styles/index.processed.css`).

We use and also strongly recommend [Prettier](https://prettier.io/) for formatting and basic validation of HTML, (S)CSS, and JavaScript files. [Installation is easy](https://prettier.io/docs/en/install.html).

Once you have those set up, you should familiarise yourself with the actual files.

#### Using the Actual Files

This project consists of HTML, SCSS, and JavaScript files which, once organised into the proper hierarchy within an arbitrary common parent directory, can be browsed directly (using the `file://` "protocol") by any modern browser. Simply 

1. Move them into their proper place as described in the [_Files_](#files) section;
2. Compile the SCSS files into a combined CSS file, using the command `sass styles/index.scss styles/index.processed.css`; and
3. Open the `index.html` file in your browser of choice.

### On CodePen

This code may be run (and forked) from [this CodePen project](https://codepen.io/jdickey/project/editor/XbBEzz).

## Files

Filenames shown are relative to whatever your chosen base directory is. For example, if you clone this repository into `~/src/demo`, then `styles/index.scss` would be found at `~/src/demo/styles/index.scss`.

Note that generated files (e.g., `styles/index.processed.css`) are not listed here.

| Filename | Description |
| -------- | ----------- |
| `.prettierrc` | Configuration file for [Prettier](https://prettier.io), which simply relaxes the line-length limit (from 80 positions to 120). |
| `index.html` | The single, static HTML file whose markup defines the content of the page to be displayed in the browser. |
| `scripts/index.js` | Adds a user menu to the page; either one that would be presented to an Authenticated Member, or to an ordinary user (a Guest User). |
| `styles/_grid.scss` | Styling for browsers that support CSS Grid. |
| `styles/_themes.scss` | Top-level file, imported from `index.scss`, that in turn imports the theme definitions in `styles/themes/_*.scss`. |
| `styles/index.scss` | Primary style definition file, defining all styles used for `index.html` other than theming. |
| `styles/mixins/_horizontal-list.scss` | SCSS partial defining a mixin to use for horizontal menu lists and the items therein. Used multiple times in `index.html`. |
| `styles/themes/_dark.scss` | SCSS partial defining styles for a "dark" theme, which presents light-coloured conteent on a dark background. |
| `styles/themes/_default.scss` | SCSS partial defining styles for the "default" theme, which presents dark text and other content on a light-coloured background. Note that this is presently visually inferior to the 'dark' theme. |

## The Glorious Future&trade;

[Issue #1](https://github.com/jdickey/layout_demo/issues/1): The current structure of theme definitions is excessively verbose and fragile. Instead of identifying each element potentially requiring theming support and setting its colour to one of a handful of values, a real app would define its theme *as* a handful of colour values, with a set of specific values defining a theme. That would eliminate an unnecessary dependency on the current structure of the markup to define and maimtain a theme.

[Issue #2](https://github.com/jdickey/layout_demo/issues/2): This is a trivial app; as such, it's a near-ideal testbed for experimenting with automating deployment. We have previously encountered significant friction with [Ansible](https://www.ansible.com/); [Terraform](https://www.terraform.io/) promises solutions to several of the specific problems we'd previously had (e.g., involving DigitalOcean) and greater consistency (e.g, with immutable deployment state).

## Contributing

Issue reports (ideally with accompanying pull requests) are welcome. Discussion of proposed features in GitHub issues, rather than the implementing PRs, is preferred, as that makes it possible for alternative PRs to address the same issue while keeping the discussion coherent.

## Legal

Though this was developed to explore concerns relating to an ongoing proprietary project, it contains no proprietary technology as it presently stands, and no company-paid time was spent in its development to date.

The code, documents, and related artefacts contained within this GitHub repository are all Copyright &copy;2019 by Jeff Dickey, and are released to the public under the [MIT License](https://opensource.org/licenses/MIT).