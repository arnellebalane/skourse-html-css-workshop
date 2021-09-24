# Introduction

So far, all the CSS selectors that we've written just directly match the name of the HTML element that they want to style. We call these selectors the **type selector**.

Type selectors select all elements of the given type within the HTML page. But what if we want to style one or a few of those elements in a different way? Earlier we saw that we can combine two or more type selectors, like `div h1`, to narrow down our selection of elements, but even that is still not very specific especially for HTML pages that contain a lot of elements.

We need a better way of selecting specific elements in order to style them properly. In addition to **type selectors**, there are other kinds of selectors available to CSS. For this workshop, we'll just focus on one of them - the **class selectors**.

## The `class` Attribute

All HTML elements support the [`class`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class) attribute. Classes allow us to mark specific elements with some sort of descriptive name. CSS can then select elements that use a certain class name and apply styles to them.

```html
<h1 class="workshop-title">HTML and CSS Workshop</h1>
```

The `class` attribute can contain multiple class names. Each class name just need to separated by a space.

```html
<h1 class="workshop-title event-title">HTML and CSS Workshop</h1>
```

Class names can be used multiple times in the same HTML page, by any HTML element

```html
<h1 class="red-background">HTML and CSS Workshop</h1>
<p class="red-background">Brought to you by Skourse Academy</p>
```

## Class Selectors

In our CSS code, instead of selecting elements by their type, we can now select them by the class names that they use:

```css
.workshop-title {
  font-size: 42px;
}

.red-background {
  background-color: red;
}
```

A **class selector** starts with a dot/period `.` immediately followed by the name of the class that we want to match.

Class selectors and type selectors can still be used together, like `.workshop-title span`.

## Additional Links

- [Class selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors)
