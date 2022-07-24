# Lesson 11

Adding pseudo classes to some selectors.

## Understanding Psuedo Classes

A [pseudo-class](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements) is a selector that selects elements that are in a specific state, e.g. they are the first element of their type, or they are being hovered over by the mouse pointer. They tend to act as if you had applied a class to some part of your document, often helping you cut down on excess classes in your markup, and giving you more flexible, maintainable code.

A [pseudo-class](https://www.w3schools.com/css/css_pseudo_classes.asp) is used to define a special state of an element.

For example, it can be used to:

- Style an element when a user mouses over it
- Style visited and unvisited links differently
- Style an element when it gets focus

## Syntax

The syntax of pseudo-classes:

```
selector:pseudo-class {
  property: value;
}
```

## Anchor Pseudo-classes

Links can be displayed in different ways:

```

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
