# Transitions

In the previous lesson we apply different styles to our links whenever the user hovers or focuses on them. The different styles are applied immediately and the effect feels instantaneous.

There will be times where we might want the change in styles to gradually happen over a period of time. We do that using CSS transitions.

```css
.site-logo {
  transition-property: color;
  transition-duration: 200ms;
}

.site-nav a {
  transition-property: color;
  transition-duration: 200ms;
}

.banner-attribution a {
  transition-property: color;
  transition-duration: 200ms;
}

.section a {
  transition-property: color;
  transition-duration: 200ms;
}

.contact-section .email-button {
  transition-property: background-color, color;
  transition-duration: 200ms, 200ms;
}

.social-links a {
  transition-property: background-color;
  transition-duration: 200ms;
}
```

## Additional Links

- [Complete code for CSS file](https://github.com/arnellebalane/skourse-html-css-workshop/blob/12-transitions/index.css)
- [Using CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
