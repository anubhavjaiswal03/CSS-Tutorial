# Lesson 14

Using [`!important`](https://developer.mozilla.org/en-US/docs/Web/CSS/important) rule in CSS.

## The !important Rule

The `!important` rule in CSS is used to add more importance to a property/value than normal.

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

Read more about the [`!important`](https://developer.mozilla.org/en-US/docs/Web/CSS/important) flag in the MDN resource.
