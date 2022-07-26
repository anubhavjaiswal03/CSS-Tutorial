# Chapter 17

Understanding what [positioning](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning) elements in CSS means.

## The [`position:`](https://www.w3schools.com/cssref/pr_class_position.asp) property

The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).

### Property Values

| Value      | Description                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `static`   | Default value. Elements render in order, as they appear in the document flow                                                                                                                                                                                                                                                                                                                                       |
| `absolute` | The element is positioned relative to its first positioned (not static) ancestor element                                                                                                                                                                                                                                                                                                                           |
| `fixed`    | The element is positioned relative to its normal position, so "left:20px" adds 20 pixels to the element's LEFT position                                                                                                                                                                                                                                                                                            |
| `sticky`   | The element is positioned based on the user's scroll position. <br>A sticky element toggles between `relative` and `fixed`, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed). <br>**Note:** Not supported in IE/Edge 15 or earlier. Supported in Safari from version 6.1 with a -webkit- prefix. |
| `initial`  | Sets this property to its default value.                                                                                                                                                                                                                                                                                                                                                                           |
| `inherit`  | Inherits this property from its parent element.                                                                                                                                                                                                                                                                                                                                                                    |

### Syntax

```CSS
position: static|absolute|fixed|relative|sticky|initial|inherit;
```

### Example

How to position an element relative to its normal position:

```CSS
h2.pos_left {
  position: relative;
  left: -20px;
}

h2.pos_right {
  position: relative;
  left: 20px;
}
```

<div>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<link rel="stylesheet" href="main.css" />
		<title>Position</title>
	</head>
	<body>
		<div class="parent">
			<div class="child-1">Navigation Bar</div>
			<div class="child-2">Background Image</div>
			<div class="child-3">Features</div>
		</div>
	</body>
</html>
</div>
