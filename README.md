# Lesson 13

Using Multiple CSS Classes & Combined Selectors

The following code targets all anchor tags with the active tag:

```CSS
a.active {
	color: #521751;
}
```

CSS IDs are used to link in-page links to html blocks.
In the following example we use the `anchor`'s `href` links to link to the different sections on the page:

```html
<body>
	<nav>
		<a href="#intro" class="active">Intro</a>
		<a href="#outro">Outro</a>
	</nav>
	<section id="intro" class="main-section highlighted">
		<p>This is the intro section.</p>
	</section>
	<section id="outro" class="main-section">
		<p>This is the outro section.</p>
	</section>
</body>
```
