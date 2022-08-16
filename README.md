# Lesson 28-2

## Applying CSS Grid Layout to the Hosting website Project.

- Modifying our project to use CSS Grid Layout. To place the footer and body in a CSS Grid Layout.

  - [`fit-content()`](https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content_function)

- Styling the Start Hosting Page to add a CSS Grid Layout to the sign-up form.

  ```CSS
  @media (min-width: 40rem) {
    .signup-form {
      margin: auto;
      width: 30rem;
      grid-template-columns: 10rem auto;
      gap: 1rem 0.5rem;
    }
    .signup-form__checkbox {
      grid-column: span 2;
    }
    .signup-form [id='title'] {
      grid-column: span 2;
    }
  }
  ```

<p>This browser does not support PDFs. Please download the PDF to view it: <a href="css-grid.pdf">Download PDF</a>.</p></embed>
