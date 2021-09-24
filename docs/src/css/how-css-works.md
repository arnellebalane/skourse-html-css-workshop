# How CSS Works

Now that we've experienced writing some CSS, let's discuss about the most fundamental concepts of CSS that are useful in understanding how it works.

## Inheritance

In CSS, some properties that are set on a parent element are inherited by their child elements, and some aren't.

We've seen this at work in our previous lessons, like how we set the font, font size, and text color properties in the `<body>` element and somehow they get applied to the elements inside it.

```css
body {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 28px;
  color: #1f2937;
}
```

Or in how we centered the text on the intro section's `<div>` element, which in turn centered the text of the `<h1>` element inside it.

```css
div {
  text-align: center;
}
```

Generally, CSS properties that affect text and typography are inherited, and the rest such as those that modifies the elements' box model are not inherited.

## Cascade

The cascade behavior means the order of the CSS rules matter. When two rules use selectors with the same [**specificity**](#specificity), the one that's defined last is the one that will be used.

```css
h1 {
  font-size: 24px;
  color: red;
}

h1 {
  color: blue;
}
```

In this example, both rules use `h1` as their selector, so the final color of the element will be blue coming from the second rule. The `font-size` property from the first rule will still be applied because the second rule did not specify it.

## Specificity

And finally, there's specificity, which is basically a measure of how specific a CSS selector is. This is used in cases where multiple CSS rules are using different selectors but could still apply to the same element. The browser will determine which selector is more specific and apply the styles from that rule.

> Author's note: This workshop assumes no prior experience in coding HTML and CSS, and at this point in the workshop we haven't discussed about the different types of selectors yet, so we won't go into detail about CSS specificity for now.
> At the end of this workshop, you may refer to my [Omniquotient post](https://www.omniquotient.com/post/6104807307739136/css-concepts:-specificity-and-cascade) that dives into more detail about how specificity works.

## Additional Links

- [Cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
