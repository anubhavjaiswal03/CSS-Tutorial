# Lesson 9

Adding a Header to the project, to style it into a navigation bar

[display](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) Property

The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.

## <code>display:</code> Property Values

| Value        | Description                                                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| inline       | Displays an element as an inline element (like <code>&lt;span&gt;</code>). <br/>Any height and width properties will have no effect                                 |
| block        | Displays an element as a block element (like <code>&lt;p&gt;</code>). <br/>It starts on a new line, and takes up the whole width                                    |
| inline-block | Displays an element as an inline-level block container. <br />The element itself is formatted as an inline element, <br />but you can apply height and width values |
| none         | The element is completely removed                                                                                                                                   |

... and many more for a full list please follow the mdn link above.

## <code>display: none</code> vs <code>visibility: hidden</code>

<p>We had a look at <code>display: none;</code>&nbsp; - this value removes the element to which you apply it from the document flow. This means that the element is&nbsp;not visible and it also doesn't "block its position". Other elements can&nbsp;(and will)&nbsp;take its place instead.</p>

<p>There is an alternative to that though.</p>

<p>If you only want to hide an element but you want to keep its place (i.e. other elements don't fill the empty spot), you can use <code>visibility: hidden;</code>&nbsp;</p>

<p>Here's a visual example:</p>

```CSS
.box-1 {
    display: none;
}
 
.box-2 {
    display: inline-block;
}
```
<p>Will render:</p>

<p><code>x</code>&nbsp;&nbsp;</p>

<p>where <code>x</code>&nbsp; has the class <code>box-2</code>&nbsp;. The first element just isn't displayed. <strong>It's still part of the DOM&nbsp;though</strong>, you can still access it via JavaScript for example.</p>

<p>Here's an example for <code>visibility: hidden</code>&nbsp;:</p>

```CSS
.box-1 {
    visibility: hidden;
}
 
.box-2 {
    display: inline-block;
}
```
<p>Will render:</p>

<p><code>_x</code>&nbsp;</p>

<p>where <code>_</code>&nbsp;&nbsp;simply is an empty spot and <code>x</code>&nbsp; has the class <code>box-2</code>&nbsp;.</p><p>The element is only invisible, <strong>it's not removed from the document flow and of course also not from the DOM.</strong></p>
