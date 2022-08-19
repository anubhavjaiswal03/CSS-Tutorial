# Lesson 30

## CSS Transitions & Animations

[CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) provide a way to control [animation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) speed when changing CSS properties.

## Using CSS transitons:

The [`transition`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) property is used as see in the previous video:
`transition: WHAT DURATION DELAY TIMING-FUNCTION; `

Example:
`transition: opacity 200ms 1s ease-out; `

Can be translated to: "Animate any changes in the `opacity` property (for the element to which the `transition` property is applied) over a duration of **200ms**. **Start fast and end slow**, also make sure to **wait 1s before you start**".
Instead of this shorthand, you can also specify the four individual properties:

1. [`transition-property `](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property) => `transition-property: opacity;`
2. [`transition-duration`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration) => `transition-duration: 200ms;`
3. [`transition-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) => `transition-timing-function: ease-out;`<br>
   Possible timing function values are: ease-out , ease-in , linear , cubic-bezier() and a couple of others. See the above link as well as the next lecture for more details.<br>
   :bulb: **Note** Check out an interactive list of most commonly used [easing functions](https://easings.net/).
4. [`transition-delay`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay) => `transition-delay: 1s;`<br>
   List of "transitionable" Properties: [link](https://www.w3.org/TR/css-transitions-1/#animatable-properties).

## Using CSS animations

The [`animation`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) property is used as see in the previous video:
`animation: NAME DURATION DELAY TIMING-FUNCTION ITERATION DIRECTION FILL-MODE PLAY-STATE; `

Example:
`animation: wiggle 200ms 1s ease-out 8 alternate forwards running; `

Can be translated to: "Play the wiggle keyframe set (animation) over a duration of **200ms**. Between two keyframes **start fast and end slow**, also make sure to **wait 1s before you start**. Play **8 animations** and **alternate** after each animation. Once you're done, **keep the final value** applied to the element. Oh, and you should be **playing the animation - not pausing**."
Instead of this shorthand, you can also specify the individual properties:

1. [`animation-name`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name) => `animation-name: wiggle; `
2. [`animation-duration`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration) => `animation-duration: 200ms; `
3. [`animation-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function) => `animation-timing-function: ease-out;`<br>
   Possible timing function values are: `ease-out` , `ease-in` , `linear` , `cubic-bezier()` and a couple of others. See the above link for more details.
4. [`animation-delay`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay) => `animation-delay: 1s;`
5. [`animation-iteration-count`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count) => `animation-iteration-count: 8;`
6. [`animation-direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction) => `animation-direction: alternate;`
7. [`animation-fill-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode) => `animation-fill-mode: forwards;`
8. [`animation-play-state`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state) => `animation-play-state: running;`

<p>CSS Animation Summary: <a href="css-animations-summary.pdf">Download PDF</a>.</p></embed>
