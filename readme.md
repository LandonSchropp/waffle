# Griddle

Griddle is a simple, responsive, powerful grid system built using flexbox. It allows a developer to create dynamic, pages quickly and easily. Griddle works in every modern browser, including IE10+.

## Using Griddle with CSS

### Setup

To get started with Griddle, download [griddle.css](TODO: Add griddle.css to cdnjs) from cdnjs and include it in your project, or include the script like this:

``` html
<script src="TODO: Add griddle.css URL"></script>
```

### Standard Columns

Griddle is build around the idea of *flexibility*. It doesn't make any assumptions about how many columns you have or how you'd like to arrange them.

The best way to start is with an simple example.

``` html
<section class="column-container">
  <div class="column">Column 1</div>
  <div class="column">Column 2</div>
  <div class="column">Column 3</div>
</section>
```

Just like that, you have a three-column layout. Here, we've created a <section> that contains three columns. If you'd like four columns, simply add another column `<div>`.

``` html
<section class="column-container">
  <div class="column">Column 1</div>
  <div class="column">Column 2</div>
  <div class="column">Column 3</div>
  <div class="column">Column 4</div>
</section>
```

Griddle is built around the idea of *proportions*. If you'd like a column to take up more space than another column, you can add a number in front of it.

``` html
<section class="column-container">
  <div class="two-columns">Column 1</div>
  <div class="column">Column 2</div>
  <div class="column">Column 3</div>
</section>
```

Here, the first column takes up 50% of the screen. The second and third columns take up 25%. `column` is a shorthand for `one-column`.

Using this flexibility, Griddle can do any layout of a twelve-column grid system. However, it's much more flexible then that, allowing you to do unique layouts such as five columns, thirteen columns or anything else you can imagine!

### Auto-Columns

The most powerful feature of Griddle is auto-columns. An auto-column is a column that sizes itself to its content. As the container resizes, the column will stay the same size. This means you can create flexible layouts like this:

``` html
<section class="column-container">
  <figure class="auto-column">
    <img src="http://placehold.it/100x100" class="profile-picture">
  </figure>
  <div class="column">
    <p>
      Here's a little bit more about me...
    </p>
  </div>
</section>
```

In this example, as the `column-container` resizes, the profile image will stay the same size and the paragraph will resize itself accordingly.

### Rows

Griddle also works horizontally!

``` html
<section class="row-container">
  <div class="row">Row 1</div>
  <div class="row">Row 2</div>
  <div class="row">Row 3</div>
</section>
```

Rows should have a `row` class, and be placed in a `row-container`. You can use any of the extensions to `row` that you could use for columns, such as `three-row` and `auto-row`.

### Nesting

Griddle is nestable! Go nuts nesting columns and rows as deeply as you'd like.

### Gutter

Griddle includes gutters. To apply a gutter to a column or row, simply add a `gutter` class to it.

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

### Responsive Design

Griddle includes a responsive element. Add a `collapsible` class to a `row-container` or `column-container` and it will automatically collapse in mobile. This is entrely optional, allowing you to choose which container

### Scrollable

In order to build powerful, responsive layouts, it's useful to make a row scrollable. You can do that by adding a `scrollable` class to the row.

### Reverse Ordering

You can reverse the order of the columns and rows by including the `reverse` class.

## Using Griddle with Sass

Griddle is fully capable of being used purely with Sass. If you'd like clean markup, want to add additional methodology or cut down on your CSS's size, you can use Griddle's Sass mixins.

### Setup

Download the Griddle Sass file and include it in your project. By default, none of the properties are prefixed, so be sure you're also using [Autoprefixer](https://github.com/postcss/autoprefixer).

If you'd like to configure Griddle, set these variables before importing it:

* `$griddle-gutter-size`: The size of the gutter. By default, this is `1rem`.
* `$griddle-collapsible-media-query`: The media query used to determine when the grid is applied in a collapsible container. For example, if you'd like the grid to be applied when the viewport is 480 pixels or larger, set this value to `"(min-width: 480px)"`. By default, this value is `"(min-width: 640px)"`.

### Mixins

All of the classes in the CSS can be achieved by using Griddle's class mixins. Here's the full list of supported functions:

* `column-container($reverse: false)`: Creates a container for columns. This mixin takes one parameter, `$reverse`, which determines if the `column-container`'s columns are reversed or not.
* `row-container($reverse: false)`: The same thing as `column-container`, but for rows.
* `column($size: 1)`: Turns an element into a column. The `$size` parameter determines the size of the column. It can be set to an integer, such as `5`, a unit size, like `300px` or `auto`.
* `row`: The same thing as `column`, but for `row-container`s.
* `gutter($size: $griddle-gutter-size)`: Applies a gutter to a `column` or `row`.
* `scrollable`: Makes a `column` or `row` scrollable.

## Gotchas

There are a few minor caveats to be aware of when using Griddle:

* Due to the way flexbox works, the gutter cannot be applied directly to a column or row element.
Instead, it's applied to each of the child elements of the `row` and `column`. Therefore, in order for the gutter to show up on a column, it must have a child element.
* The gutter is always on the left and right sides of a `row` or `column`.
* When columns or rows are different size, adding a border can throw off their sizes. To fix this, use an inset `box-shadow` instead.
* Margins inside of grid columns and rows don't collapse.
* It's possible some of the Griddle classes can collide with class names in your CSS. In order to prevent this, the modifier classes such as `gutter`, `collapsible`, `scrollable` and `reverse` have been scoped so they only apply to Griddle classes. The only classes you need to watch out for are the container, row and column classes.

## Credits

Griddle was created by [Landon Schropp](http://twitter.com/LandonSchropp).

I have to give a special thanks to [Quve](http://www.quve.com/), my employer. All of the development for Griddle was done while working at Quve, and they were kind enough to let me open source this project and share it with you. If you're a developer in the Seattle area and you're interested working for an awesome company and building great products, [drop me a line](mailto:landon@quve.com).

## Todo

There's still a lot of work to be done on Griddle. Here's the short list:

- [x] Add a build script for generating the CSS files.
- [x] Add the license.
- [x] Configure the build script to use the version specified in `package.json`.
- [ ] Write the documentation for using Griddle with CSS.
- [ ] Write the documentation for using Griddle with Sass.
- [x] Fix the way collapsible rows work.
- [x] Add scrollable.
- [x] Pluralize the rows and columns.
- [x] Reorder the column and row styles so they're consistant.
- [x] Scope the modifier classes so they only apply to the grid classes.
- [ ] Make Griddle use the variables defined by the importer if they've already been set.
- [ ] Create a few basic examples of Griddle in use.
- [ ] Add the demos to the project page.
- [ ] Make a Bower package for Griddle.
- [ ] Write a detailed blog post on how to use Griddle.
- [ ] Add the library to cdnjs.
- [ ] Create a nice landing website for Griddle.
- [ ] Reconsider the class names.