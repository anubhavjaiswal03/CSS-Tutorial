# Lesson 12

Understanding CSS Grouping rules & adding a background image

## Understanding CSS Grouping rules

As our CSS styling keeps getting larger due to the use of pseudo classes & elements, it gets harder to track these changes in the CSS files. So we group some rules which have share the same code

### Example

For <code>.main-nav_item</code>'s anchor tag <code>&lt;a&gt;</code> had 2 pseudo-classes executing the same code block, hence we group these rules:

```CSS
.main-nav_item a:hover {
	color: white;
	border-bottom: 5px solid white;
}
.main-nav_item a:active {
	color: white;
	border-bottom: 5px solid white;
}
```

### becomes:

```CSS
.main-nav_item a:hover,
.main-nav_item a:active {
	color: white;
	border-bottom: 5px solid white;
}
```

## Understanding how to add a background image

In CSS there are a lot of ways this can be handled dependig on the context.
we can replace a background color property with an image as shown below:

```CSS
background: url("background.jpg");
```

To exclusively handle only image we can use <code>background-image</code> property.

```CSS
  background-image: url(background.jpg);
```
