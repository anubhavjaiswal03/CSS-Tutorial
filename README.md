# Lesson 26

Learning how to use fonts with CSS.

## Working with Text and Fonts

Instead of adding fonts to each individual html files in our project, we can simply add such fonts to a shared css file and have it be linked to multiple html files.

- Working with [Google Fonts](https://fonts.google.com/)
  ```CSS
  @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
  ```
- Importing and using a Custom Font
  ```CSS
  @font-face {
    font-family: "Custom-Font";
    src: url("custom-Font-Regular.ttf");
  }
   @font-face {
    font-family: "Custom-Font";
    src: url("custom-Font-Bold.ttf");
    font-weight: 700;
  }
  ```
- Font formats: [TrueType](https://en.wikipedia.org/wiki/TrueType)(.ttf) vs [Web Open Font Format](https://developer.mozilla.org/en-US/docs/Web/Guide/WOFF)(.woff)
- Understanding Font Properties
  - [`font-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
  - [`font-variant`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant)
  - [`font-stretch`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch)
  - [`letter-spacing`](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing) & [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
  - [`line-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
  - [`text-decoration`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) & [`text-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
  - [`font-display`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display)

<p>This browser does not support PDFs. Please download the PDF to view it: <a href="css-fonts-slides.pdf">Download PDF</a>.</p></embed>
