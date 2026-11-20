# Stacked Nav

Squarespace 7.1: the header's navigation links stack vertically on the left or right of the header, editorial style. Desktop only; phones keep the normal burger menu.

## Install
Paste into **Settings → Developer tools → Code injection → Footer**. Change the settings on the script tag.

```html
<!-- Stacked Nav: header links stacked on one side -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sq-assets/stacked-nav@v1.1.0/effect.css">
<script src="https://cdn.jsdelivr.net/gh/sq-assets/stacked-nav@v1.1.0/effect.js"
  data-side="right"
  data-align="right"
  data-gap="4"
  data-size=""
  data-weight=""
  data-uppercase=""
  data-letter-spacing=""
  data-color=""
  data-hover-color=""
  data-active-color=""
  data-top="0"
  data-overlap="off"
  data-sticky="off"
  data-sticky-top=""
  data-sticky-blend="off"
  data-pages=""></script>
```

## Settings
| Setting | What it does |
|---|---|
| `data-side` | `right` (default) or `left`: which side of the header the stack sits on |
| `data-align` | Line the links up `left`, `right` or `center` (defaults to the same as the side) |
| `data-gap` | Space between links in px (4) |
| `data-size`, `data-weight`, `data-uppercase` (`on`/`off`), `data-letter-spacing` | Link text. Leave blank to keep your site styles |
| `data-color`, `data-hover-color`, `data-active-color` | Link colours (active = the page you're on) |
| `data-top` | Nudge the stack down from the top of the header, in px |
| `data-overlap` | `off` (default) = the header grows to fit the stack; `on` = the header stays slim and the links hang down over the page |
| `data-space` | Room kept between the stack and the logo/buttons if they'd touch (40px) |
| `data-sticky` | `on` = the stack scrolls up with the header, then stays pinned in its corner as you scroll; `off` (default) = scrolls away with the header |
| `data-sticky-top` | How far from the top of the screen it pins, in px (blank = where it starts) |
| `data-sticky-blend` | `on` = pinned links invert against whatever's behind them (stays readable over photos) |
| `data-pages` | Only on these pages, comma separated, e.g. `/,/about`. Blank = every page |

Folders open to the side of the stack instead of covering the links below.
