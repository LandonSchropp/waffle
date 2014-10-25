# Griddle

Griddle is a beautiful, simple, responsive, powerful grid system built using flexbox. It allows a developer to create dynamic, pages quickly and easily. Griddle works in every modern browser, including IE10+.

## Using Griddle with Vanilla CSS

* Either download the Griddle file or include using the CDN by adding `<script src="..."></script>` to your project.
* Use the build in classes.

## Using Griddle with Sass

* Download Griddle and include it in your project.
* Add Autoprefixer to your project.
* Set the Sass variables
* Use the mixins or classes included in Griddle.

## Gotchas

There are a few minor caveats to be aware of when using Griddle:

* Due to the way flexbox works, the gutter cannot be applied directly to a column or row element.
Instead, it's applied to each of the child elements of the `row` and `column`. Therefore, in order for the gutter to show up on a column, it must have a child element.
* The gutter is always on the left and right sides of a `row` or `column`.
* When columns or rows are different size, adding a border can throw off their sizes. To fix this, use an inset `box-shadow` instead.

## Credits

Griddle was created by [Landon Schropp](http://twitter.com/LandonSchropp).

I have to give a special thanks to [Quve](http://www.quve.com/), my benevolent employer. All of the development for Griddle was done while working at Quve, and they were kind enough to let me open source and share this project. If you're a developer in the Seattle area and you're interested working for an awesome company and building great products, [drop me a line](mailto:landon@quve.com).

## Todo

There's still a lot of work to be done on Griddle. Here's the short list:

- [x] Add a build script for generating the CSS files.
- [x] Add the license.
- [ ] Add the library to cdnjs.
- [x] Configure the build script to use the version specified in `package.json`.
- [ ] Write the documentation for using Griddle with CSS.
- [ ] Write the documentation for using Griddle with Sass.
- [ ] Create a few basic examples of Griddle in use.
- [ ] Add the demos to the project page.
- [ ] Make a Bower package for Griddle.
- [ ] Write a detailed blog post on how to use Griddle.
- [ ] Add the library to cdnjs.
- [ ] Create a nice landing website for Griddle.
- [ ] Reconsider the class names.