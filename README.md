# Lesson 14

Uderstanding the [`!important`](https://developer.mozilla.org/en-US/docs/Web/CSS/important) & [`:not()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:not) pseudo-class.

## The !important Rule

The [`!important`](https://developer.mozilla.org/en-US/docs/Web/CSS/important) rule in CSS is used to add more importance to a property/value than normal.

In fact, if you use the !important rule, it will override ALL previous styling rules for that specific property on that element!

```CSS
.main-section {
	height: 800px;
	border: 1px solid #ccc !important;
	padding: 16px;
}

.highlighted {
	border: 2px solid orange;
	height: 400px;
}
```

## The :not() pseudo-class

The [`:not()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:not) CSS pseudo-class represents elements that do not match a list of selectors. Since it prevents specific items from being selected, it is known as the negation pseudo-class.

### Example

```CSS
/* Selects any element that is NOT a paragraph */
:not(p) {
  color: blue;
}
```

### Syntax

The `:not()` pseudo-class requires a comma-separated list of one or more selectors as its argument. The list must not contain another negation selector or a [pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements).

```CSS
:not( <complex-selector-list> )
```

**Browser Compatibility**
To check wether a certain porperty/class is supported on the various browswers:

1. [caniuse.com](https://caniuse.com/)
2. [MDN](https://developer.mozilla.org/en-US/) search for the property/class/feature and go to the bottom of the page.
