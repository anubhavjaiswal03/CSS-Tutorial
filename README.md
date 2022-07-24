# Lesson 11

Understanding [Pseudo Classes & Pseudo Elements](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)

## Understanding Psuedo Classes

A [pseudo-class](https://www.w3schools.com/css/css_pseudo_classes.asp) is used <mark>to define a special state of an element</mark>.

For example, it can be used to:

- Style an element when a user mouses over it
- Style visited and unvisited links differently
- Style an element when it gets focus

### Syntax

The syntax of pseudo-classes:

```CSS
selector:pseudo-class {
  property: value;
}
```

### Example

Links can be displayed in different ways:

```CSS
/* unvisited link */
a:link {
  color: #FF0000;
}

/* visited link */
a:visited {
  color: #00FF00;
}

/* mouse over link */
a:hover {
  color: #FF00FF;
}

/* selected link */
a:active {
  color: #0000FF;
}
```

## Understanding Pseudo-elements

A CSS [pseudo-element](https://www.w3schools.com/css/css_pseudo_elements.asp) is used <mark>to style specified parts of an element</mark>.

For example, it can be used to:

- Style the first letter, or line, of an element
- Insert content before, or after, the content of an element

### Syntax

The syntax of pseudo-elements:

```CSS
selector::pseudo-element {
  property: value;
}
```

### Example 1

The <code>::first-letter</code> pseudo-element is used to add a special style to the first letter of a text.

The following example formats the first letter of the text in all <code>&lt;p&gt;</code> elements:

```CSS
p::first-letter {
  color: #ff0000;
  font-size: xx-large;
}
```

**Note**: The <code>::first-letter</code> pseudo-element can only be applied to block-level elements.

### Example 2

The <code>::after</code> pseudo-element can be used to insert some content after the content of an element.

The following example adds a (Link) after the content of each <code>&lt;a&gt;</code> element:

```CSS
.main-nav_item a::after {
	content: ' (Link)';
	color: #ff1b68;
}
```
