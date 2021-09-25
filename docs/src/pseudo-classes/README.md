# Pseudo-Classes

Pseudo-classes lets us apply a style to an element based on the user's interaction with it, it's location in the HTML page, and other dynamic conditions.

## Styling Link States

We can use pseudo-classes to apply a different style when the user hovers or focuses on a link on our page. Add these rules to `index.css`:

```css
.site-logo:hover,
.site-logo:focus {
  color: #f59e0b;
}

.site-nav a:hover,
.site-nav a:focus {
  color: #f59e0b;
}

.section a:hover,
.section a:focus {
  color: #f59e0b;
}

.banner-attribution a:hover,
.banner-attribution a:focus {
  color: #f59e0b;
}

.contact-section .email-button:hover,
.contact-section .email-button:focus {
  color: #ffffff;
  background-color: #f59e0b;
}

.social-links a:hover,
.social-links a:focus {
  background-color: rgba(255, 255, 255, 0.1);
}
```

## Removing Extra Margins

In our page we have some lists of similar items, where the last item's bottom margin is not necessary (e.g. work experience items, social links). We can remove those margins using pseudo-classes:

```css
.about-section p:first-of-type {
  margin-top: 0;
}

.about-section p:last-of-type {
  margin-bottom: 0;
}

.work:last-child {
  margin-bottom: 0;
}

.social-links a:last-child {
  margin-bottom: 0;
}
```

## Additional Links

- [Complete code for CSS file](https://github.com/arnellebalane/skourse-html-css-workshop/blob/11-pseudo-classes/index.css)
- [Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
