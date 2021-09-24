# Embedding Images

Our Web page now doesn't look too bad, but it's still currently text-only. Images can make Web pages more interesting and provide more context on the content of the page.

In order to put an image into a Web page, we use the [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) element.

It accepts a [`src`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-src) attribute that specifies the URL of the image to load, as well as an [`alt`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-alt) that specifies an alternate text to display in case the image fails to load.

It also accepts the `width` and `height` attributes to specify the dimensions of the image when rendered on the page.

```html
<img src="images/avatar.jpg" alt="A photo of myself" width="100" height="100" />
```

## Adding Images to Our Page

In the **05 - Images** page of our [design reference](/getting-started/personal-portfolio#design-reference), we display our image right above the intro section text. Let's update `index.html` to load that image:

```html
<img
  src="https://res.cloudinary.com/arnellebalane/image/upload/v1632525393/html-css-workshop/avatar_sxu43r.jpg"
  alt="A photo of Arnelle"
  width="130"
  height="130"
/>
```

The image in the design appears rounded and has a border around it, so let's add those styles in `index.css`:

```css
.intro-section img {
  width: 130px;
  height: 130px;
  border: 8px solid #ede9fe;
  border-radius: 50%;
}
```

![HTML image](./images/html-image.png)
