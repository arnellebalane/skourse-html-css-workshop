# Applying CSS to HTML

There are three methods of applying CSS to an HTML page: with an **external stylesheet**, with an **internal stylesheet**, and with **inline styles**.

## External Stylesheets

An **external stylesheet** contains CSS in a separate file with a `.css` extension. This is the most common method of applying CSS to a document, and for the entirety of this workshop we will only be using this method.

With an external stylesheet, multiple HTML pages can use the same `.css` file and they will all receive the styles defined in that file.

```html
<link rel="stylesheet" href="index.css" />
```

We load an external stylesheet into an HTML page using the [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) element. It's `href` attribute tells it where the CSS file is located.

## Internal Stylesheets

An **internal stylesheet** resides within the HTML file where it's being used. These styles are not reusable across multiple multiple HTML pages, but they are also loaded together with the HTML page without waiting for a separate file to be loaded.

We define an internal stylesheet using the [`<style>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style) element. Inside it, we define our CSS rules the way we would do it in a separate CSS file.

```html
<style>
  h1 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
  }
</style>
```

## Inline Styles

With **inline styles**, the CSS declarations are defined directly on the HTML element itself, and only affects that element. Inline styles are contained within the `style` attribute of HTML elements.

```html
<h1 style="color: red;">I'm a red heading!</h1>
```

## Additional Links

- [How CSS is structured](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured)
