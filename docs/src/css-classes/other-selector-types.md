# Other Selector Types

Aside from **class selectors**, HTML elements can also be styled using different types of selectors.

## Universal Selector

The [universal selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors) matches elements of any type.

```css
* {
  color: red;
}
```

## Type Selector

[Type selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors) matches elements by type, or element name. In CSS, the selector is simply just the name of the element.

```html
<h1>HTML and CSS Workshop</h1>
```

```css
h1 {
  color: red;
}
```

## Attribute Selector

[Attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) matches elements based on the presence or value of a given attribute.

```html
<img src="avatar.jpg" /> <input type="text" />
```

```css
[alt] {
  display: none;
}

[type='text'] {
  display: none;
}
```

The first CSS above matches all elements that have an `src` attribute, regardless of their value.

The second CSS rule matches all elements that have a `type` attribute, and the attribute value should be set to `text`.

## ID Selector

[ID selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors) matches an element based on the value of the element's [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-id) attribute.

```html
<h1 id="title">HTML and CSS Workshop</h1>
```

```css
#title {
  color: red;
}
```

## Combining Multiple Selectors

All selector types can be combined with each other to target specific elements if needed.

```html
<input type="text" id="first-name" class="form-field" />
```

```css
input[type='text']#first-name.form-field {
  display: none;
}
```

As long as there is no space between the different selectors, an element will have to match all of the selectors in order for the CSS rule to apply to it.

## Additional Links

- [CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
