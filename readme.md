# Waffle

Waffle is a simple, powerful, responsive grid system built using flexbox. It allows developers to create dynamic pages quickly and easily. Waffle works in every modern browser, including IE10+.

If you'd like to see Waffle in action, check out the [Waffle Demos Collection](http://codepen.io/collection/ucvqb/) on CodePen.

## Using Waffle with CSS

### Setup

To get started, download [waffle.css](https://raw.githubusercontent.com/LandonSchropp/waffle/master/build/waffle.css) and include it in your project, or add a link to the library on the jsDelivr CDN.

``` html
<link href="//cdn.jsdelivr.net/waffle/0.3.1/waffle.min.css" rel="stylesheet" type="text/css">
```

If you're using Bower, install Waffle by running `bower install waffle` or add it to your `bower.json` file.

### Standard Columns

The best way to explain Waffle is with an example.

``` html
<section class="column-container">
  <div class="one-column">Column 1</div>
  <div class="one-column">Column 2</div>
  <div class="one-column">Column 3</div>
</section>
```

In the above example, there are three `one-column` divs. Since each column takes up one unit, then all of the columns take up `1 ÷ (1 + 1 + 1)`, or ⅓ of the total space.

If you'd like four equal-sized columns, simply add another `<div class="one-column">`.

``` html
<section class="column-container">
  <div class="one-column">Column 1</div>
  <div class="one-column">Column 2</div>
  <div class="one-column">Column 3</div>
  <div class="one-column">Column 4</div>
</section>
```

Waffle is designed around the idea of *proportions*. It doesn't make any assumptions about how you'd like to arrange your grid. If you'd like a column to take up more space than another column, you can prepend it with a different number.

``` html
<section class="column-container">
  <div class="two-columns">Column 1</div>
  <div class="one-column">Column 2</div>
  <div class="one-column">Column 3</div>
</section>
```

Here, the columns add up to four units. The first column takes up `2 ÷ (2 + 1 + 1)`, or ½ of the space. The last two columns take up `1 ÷ (2 + 1 + 1)`, or ¼ each.

Waffle can do any layout a standard twelve-column grid system can do. However, it's much more flexible then that; it allows you to do unique layouts such as five columns, thirteen columns, seventeen columns or any other proportion you can think of.

### Column Shorthand

You can use `column` as a shorthand for `one-column`. The following examples are equivalent.

``` html
<section class="column-container">
  <div class="one-column">Column 1</div>
  <div class="one-column">Column 2</div>
  <div class="one-column">Column 3</div>
</section>
```

``` html
<section class="column-container">
  <div class="column">Column 1</div>
  <div class="column">Column 2</div>
  <div class="column">Column 3</div>
</section>
```

### Auto-Columns

The most powerful feature of Waffle is auto-columns. An auto-column is a column that sizes itself to its content. As the container resizes, an auto-column will stay the same size. This means you can create flexible layouts like this:

``` html
<section class="column-container">
  <figure class="auto-column">
    <img src="http://placehold.it/100x100" class="profile-picture">
  </figure>
  <div class="column">
    <p>Here's a little bit more about me…</p>
  </div>
</section>
```

In this example, when `column-container` resizes, the profile image will stay the same width and the paragraph will fill the rest of the space.

### Rows

Waffle also works vertically!

``` html
<section class="row-container">
  <div class="row">Row 1</div>
  <div class="row">Row 2</div>
  <div class="row">Row 3</div>
</section>
```

Rows should have a `row` class, and be placed in a `row-container`. You can use any of the extensions to `row` that you could use for columns, such as `three-row` and `auto-row`.

### Gutter

Waffle includes gutters. To apply a gutter to a column or row, simply add a `gutter` class to it. The gutter is always on the left and right sides of a `row` or `column`.

``` html
<section class="row-container">
  <div class="row gutter">
    <p>Row 1</p>
  </div>
  <div class="row gutter">
    <p>Row 2</p>
  </div>
  <div class="row gutter">
    <p>Row 3</p>
  </div>
</section>
```

### Nesting

Waffle is nestable! Go nuts nesting columns and rows as deeply as you'd like.

``` html
<main class="row-container">
  <header class="auto-row column-container">
    <h1 class="column gutter">Page Title</h1>
    <a class="auto-column gutter">Home</a>
    <a class="auto-column gutter">Blog</a>
    <a class="auto-column gutter">About</a>
  </header>
  <section class="row">
    <div class="column gutter">
      <h2>Sidebar</h2>
    </div>
    <div class="three-column gutter">
      <h2>Main content</h2>
    </div>
  </section>
  <footer class="auto-row">
    <p>Footer</p>
  </footer>
</main>
```

### Responsive Design

Add a `collapsible` class to a `row-container` or `column-container`, and it will automatically collapse in mobile.

``` html
<section class="column-container collapsible">
  <div class="column">Column 1</div>
  <div class="column">Column 2</div>
  <div class="column">Column 3</div>
</section>
```

### Scrollable

In order to build powerful, responsive layouts, it's useful to make a row scrollable. You can do that by adding a `scrollable` class to the row.

``` html
<section class="row-container">
  <div class="auto-row">Row 1</div>
  <div class="row scrollable">Row 2…</div>
  <div class="auto-row">Row 3</div>
</section>
```

### Reverse Ordering

You can reverse the order of columns and rows by including the `reverse` class.

``` html
<section class="column-container reverse">
  <div class="column">Column 1</div>
  <div class="column">Column 2</div>
  <div class="column">Column 3</div>
</section>
```

## Using Waffle with Sass

If you'd like clean markup, want to add additional methodology or cut down on your CSS's size, you can use Waffle's Sass mixins instead of

### Setup

Download [waffle.sass](https://raw.githubusercontent.com/LandonSchropp/waffle/master/build/waffle.sass) and include it in your project. By default, none of the properties are prefixed, so be sure you're also using [Autoprefixer](https://github.com/postcss/autoprefixer).

If you'd like to configure Waffle, set these variables before importing it:

* `$waffle-gutter-size`: The size of the gutter. By default, this is `1rem`.
* `$waffle-collapsible-media-query`: The media query used to determine when the grid is applied in a collapsible container. For example, if you'd like the grid to be applied when the viewport is 480 pixels or larger, set this value to `"(min-width: 480px)"`. By default, this value is `"(min-width: 640px)"`.

### Mixins

All of the classes in waffle.css can be achieved by using Waffle's class mixins. Here's the full list.

* `column-container($reverse: false)`: Creates a container for columns. This mixin takes one parameter, `$reverse`, which determines if the `column-container`'s columns are reversed or not.
* `row-container($reverse: false)`: The same thing as `column-container`, but for rows.
* `column($size: 1)`: Turns an element into a column. The `$size` parameter determines the size of the column. It can be set to an integer, such as `5`, a unit size, like `300px` or `auto`.
* `row`: The same thing as `column`, but for `row-container`s.
* `gutter($size: $waffle-gutter-size)`: Applies a gutter to a `column` or `row`.
* `scrollable`: Makes a `column` or `row` scrollable.

## Gotchas

There are a few minor caveats to be aware of when using Waffle.

* A gutter cannot be applied directly to a column or row element. Instead, it's applied to each of the child elements of the row and column. Therefore, in order for the gutter to show up, the row or column must have a child element.
* When columns or rows are different size, adding a border can throw off their proportional sizes. To fix this, use an inset `box-shadow` instead.
* Margins inside of grid columns and rows don't collapse.
* It's possible some of the Waffle classes can collide with class names in your CSS. In order to prevent this, the modifier classes such as `gutter`, `collapsible`, `scrollable` and `reverse` have been scoped so they only apply to Waffle classes. The only classes you need to watch out for are the `column-container`, `row-container`, `column` and `row` classes.

## Credits

Waffle was created by [Landon Schropp](http://twitter.com/LandonSchropp).

I'd like to give a special thanks to [Quve](http://www.quve.com/), my employer. A decent chunk of the development for Waffle was done while working at Quve, and they were kind enough to let me open source this project and share it with you. If you're a developer in the Seattle area and you're interested working for an awesome company, [drop me a line](mailto:landon@quve.com).

## Todo

There's still a lot of work to be done on Waffle. Here's the short list:

- [x] Add a build script for generating the CSS files.
- [x] Add the license.
- [x] Configure the build script to use the version specified in `package.json`.
- [x] Write the documentation for using Waffle with CSS.
- [x] Write the documentation for using Waffle with Sass.
- [x] Fix the way collapsible rows work.
- [x] Add scrollable.
- [x] Pluralize the rows and columns.
- [x] Reorder the column and row styles so they're consistant.
- [x] Scope the modifier classes so they only apply to the grid classes.
- [x] Make Waffle use the variables defined by the importer if they've already been set.
- [x] Create a few basic examples of Waffle in use.
- [x] Add the demos to the project page.
- [x] Add the library to a CDN.
- [ ] Add a Ruby gem and configure it to deploy.
- [x] Make a Bower package for Waffle.
- [ ] Write a detailed blog post on how to use Waffle.
- [ ] Create a nice landing website for Waffle.