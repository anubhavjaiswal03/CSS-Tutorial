# Chapter 17

Understanding what [positioning](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning) elements in CSS means.

## The [`position:`](https://developer.mozilla.org/en-US/docs/Web/CSS/position#syntax) property

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

Play around with different positioning styles and `top:`, `right:`, `bottom:`, `left:` properties, to derive your intuition on how to position elements in CSS.
