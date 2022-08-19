# Lesson 31

Learning how to future-proof your code.

## Using CSS Variables

[**Custom properties**](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) (sometimes referred to as **CSS variables** or **cascading variables**) are entities defined by CSS authors that contain specific values to be reused throughout a document. They are set using custom property notation (e.g., `--main-color: black;`) and are accessed using the [`var()`](https://developer.mozilla.org/en-US/docs/Web/CSS/var) function (e.g., `color: var(--main-color);`).

### Example:

```CSS
:root {
  --main-bg-color: brown;
}

element {
  background-color: var(--main-bg-color);
}
```

A common best practice is to define custom properties on the [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) pseudo-class, so that it can be applied globally across your HTML document:

## Understanding Vendor Prefix & Browser Support

CSS [**vendor prefixes**](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix) are are a string of characters relating to specific browser engines that we place before a CSS property name.<br>
:bulb:**Note** To maximize Support for older browsers to include vendor prefixes, we can use [autprefixer](https://autoprefixer.github.io/).

### Example:

```CSS
element{
  	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
}
```

The [**`@support`**](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) CSS at-rule lets you specify declarations that depend on a browser's support for one or more specific CSS features. This is called a feature query. The rule may be placed at the top level of your code or nested inside any other conditional group at-rule.

[CSS Polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills)

### Example:

```CSS
@supports (display: grid) {
  div {
    display: grid;
  }
}
```

## Choosing Class Names Correctly

Best practices suggests the use of [**BEM**](http://getbem.com/introduction/) (**B**lock **E**lement **M**odifier) method.

<p>CSS Future Proof Document: <a href="css-future-css.pdf">Download PDF</a>.</p></embed>
