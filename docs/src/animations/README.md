# Animations

CSS animations makes it possible to from one set of CSS styles to another over a period of time and over a defined number of repetitions.

For a quick example, let's make our name in the intro section animate between two colors infinitely.

First, we define our animation that we will call `change-colors`.

```css
@keyframes change-colors {
  0% {
    color: #7c3aed;
  }

  50% {
    color: #f59e0b;
  }

  100% {
    color: #7c3aed;
  }
}
```

Then we declare in the CSS rule that styles our name that we want to use this animation:

```css
.intro-section .highlight-name {
  animation-name: change-colors;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
```

## Additional Links

- [Complete code for CSS file](https://github.com/arnellebalane/skourse-html-css-workshop/blob/13-animations/index.css)
- [Using CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
