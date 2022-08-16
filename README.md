# Lesson 28

Learning how to use CSS [Grid](https://css-tricks.com/snippets/css/complete-guide-grid/).

# Understanding CSS [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

CSS Grid Layout excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer, between parts of a control built from HTML primitives.

Like tables, grid layout enables an author to align elements into columns and rows. However, many more layouts are either possible or easier with CSS grid than they were with tables. For example, a grid container's child elements could position themselves so they actually overlap and layer, similar to CSS positioned elements.

### Defining a Grid Layout on a Container:

- [`grid-template-columns`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)
- [`grid-template-rows`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)
- [`grid-template-areas`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)
- [`repeat()`](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat) & [`minmax()`](https://developer.mozilla.org/en-US/docs/Web/CSS/minmax)

### Assigning/Placing elements in a Grid Layout.

- [`grid-column-start`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start) & [`grid-column-end`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end)
- [`grid-row-start`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start) & [`grid-row-end`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end)
- [`grid-area`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)

### We can also create a [CSS Grid Layout using named grid lines](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines).

### Adding gutters/gaps to the Grid Layout:

- [`row-gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap)
- [`column-gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)
- [`gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/gap) shorhand.

### Positioning Grid Elements wihtin their assigned Grid Layout:

- [`justify-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items)
- [`align-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)

### Positioning the entire Grid Content:

Sometimes the grid layout might have extra space left in it because of how the grid template was created in such scenarios we might need want to place our entire grid centrally. The following properties help to achieve that behaviour.

- [`justify-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) To align the entire Grid in the x-axis.
- [`align-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) to align the entire Grid in the y-axis.

### Positiioning elements individualy in a Grid Layout:

- [`justify-self`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self)
- [`align-self`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)

# Understanding Responsive Grids.

For a desktop view the container Grid Layout Style works perfectly but it shrinks and squezes in grids in a mobile layout/smaller screens so we move Element-1 to a new row below Element - 2.

```CSS
.container {
	background: lightgoldenrodyellow;
	margin: 20px;
	display: grid;

	grid-template-columns: [hd-start] repeat(4, [col-start] 20% [col-end]) [hd-end];
	grid-template-rows:
		[row-1-start hd-start] 5rem [hd-end row-1-end row-2-start] minmax(
			10px,
			20rem
		)
		[row-2-end row-3-start] 100px
		[row-3-end];

	gap: 1rem 1rem;
	grid-template-areas:
		'header header header header'
		'. side main main'
		'footer footer footer footer';
	justify-items: stretch;
	align-items: stretch;

}
@media (max-width: 40rem) {
	.container {
		grid-template-columns: [hd-start] repeat(4, [col-start] 20% [col-end]) [hd-end];
		grid-template-rows:
			[row-1-start hd-start] 5rem [hd-end row-1-end row-2-start] minmax(
				10px,
				20rem
			)
			[row-2-end row-3-start] 150px
			[row-3-end row-4-start] 100px [row-4-end];

		grid-template-areas:
			'header header header header'
			'main main main main'
			'side side side side'
			'footer footer footer footer';
	}
}
```

<p>CSS Grid Basics: <a href="css-grid.pdf">Download PDF</a>.</p></embed>
