# Basic Styles

Now that we know what CSS is and what CSS code looks like, let's start adding some basic styles to our HTML page.

In our code editor, create a new file called `index.css`, and add the following code to it.

```css
body {
  font-family: sans-serif;
  font-size: 18px;
  line-height: 28px;
  color: #1f2937;
}

h1 {
  font-size: 48px;
  line-height: 58px;
  color: #4b5563;
}

h2 {
  font-size: 32px;
  line-height: 42px;
  color: #4b5563;
}

h3 {
  font-size: 18px;
  line-height: 28px;
}
```

These rules sets some typographic properties for the contents of our page.

- [`font-family`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family): Sets the font to use for our page. The `sans-serif` value will use the operating system's default sans serif font (could be Arial or Helvetica or something else).
- [`font-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size): Sets the size of the text.
- [`line-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height): Sets the height of each line of text, usually to change the distance between lines of text.
- [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color): Sets the foreground color of text on the page.

Setting these properties on the `<body>` elements provides default values throughout the page. These can be overriden by individual elements that want to sent different values (like what we're doing for the `<h1>` and `<h2>` elements).

## Load the Stylesheet

If we refresh our page now, we won't see the custom styles that we just wrote. That's because our HTML page doesn't know yet that we have a CSS file. We need to load it first into our HTML in order for it to be applied to the page.

In `index.html`, add this code inside the `<head>` element and after the `<title>` element.

```html
<link rel="stylesheet" href="index.css" />
```

Refresh the page again, and our custom styles should applied now.

![CSS basic styles](./images/css-basic-styles.png)

## Additional Links

- [Typography in CSS](https://cssreference.io/typography/)
