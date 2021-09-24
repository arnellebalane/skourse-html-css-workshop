# Linking To Other Pages

Links are a very important part of the Web. It's what connects Web pages to each other, and we use them all the time as we browse the Internet.

## Creating a Link

We use the [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) to add a link that points to another page. This element accepts a [`href`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href) attribute that specifies where the link should go to when clicked.

```html
<a href="https://www.skourse.com/">Visit Skourse website</a>
```

Clicking on this link will redirect the current tab to the new page specified in the `href` attribute. If we want this page to open in a new tab, we add the `target="_blank"` attribute to our element.

```html
<a href="https://www.skourse.com/" target="_blank">Visit Skourse website in new tab</a>
```

## Adding Links to Our Page

Let's now edit `index.html` to turn any text we want into a link.

```html
<p>
  I am currently working as a Frontend Technical Lead at
  <a href="https://newlogic.com/" target="_blank">Newlogic</a>, focused on building fast and high-quality Web
  applications.
</p>
```

We can also update `index.css` to style our links differently.

```css
.section a {
  font-weight: bold;
  color: #7c3aed;
}
```

## Styling Links

By default, links will have an underline so that they stand out from other texts around them. We can use the [`text-decoration`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) property to remove this underline.

```css
a {
  text-decoration: none;
}
```
