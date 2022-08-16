# Lesson 28-1

Learning about Autoflow.

- [`grid-auto-rows`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)
- [`grid-auto-columns`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)
- [`grid-auto-flows`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)<br>
  `grid-auto-flow:dense`
  "dense" packing algorithm attempts to fill in holes earlier in the grid, if smaller items come up later. This may cause items to appear out-of-order, when doing so would fill in holes left by larger items.
  If it is omitted, a "sparse" algorithm is used, where the placement algorithm only ever moves "forward" in the grid when placing items, never backtracking to fill holes. This ensures that all of the auto-placed items appear "in order", even if this leaves holes that could have been filled by later items.

Above is an example of **Implicit** Grid definition. This is how newly added content will look like.
Whereas, using the grid-template properties is an example of **Explicit** Grid definition.

## Understanding `auto-fill` & `auto-fit`

`auto-fill`: If the grid container has a definite or maximal size in the relevant axis, then the number of repetitions is the largest possible positive integer that does not cause the grid to overflow its grid container. Treating each track as its maximal track sizing function (each independent value used to define grid-template-rows or grid-template-columns), if that is definite. Otherwise, as its minimum track sizing function, and taking grid-gap into account. If any number of repetitions would overflow, then the repetition is 1. Otherwise, if the grid container has a definite minimal size in the relevant axis, the number of repetitions is the smallest possible positive integer that fulfills that minimum requirement. Otherwise, the specified track list repeats only once.

`auto-fit`: Behaves the same as auto-fill, except that after placing the grid items any empty repeated tracks are collapsed. An empty track is one with no in-flow grid items placed into or spanning across it. (This can result in all tracks being collapsed, if they're all empty.)

A collapsed track is treated as having a single fixed track sizing function of 0px, and the gutters on either side of it collapse.

For the purpose of finding the number of auto-repeated tracks, the user agent floors the track size to a user agent specified value (e.g., 1px), to avoid division by zero.

<p>CSS Grid Basics: <a href="css-grid.pdf">Download PDF</a>.</p></embed>
