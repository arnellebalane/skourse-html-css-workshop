# Group Related Elements

So far, all the headings and paragraphs in our HTML page are all directly inside the `<body>` element. This is fine, although if we're going to style them later, it will be helpful if we group related elements together.

Let's group the elements that contain related content inside the [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) element.

#### About me contents

```html
<div>
  <h2>About me</h2>

  <p>
    I am currently working as a Frontend Technical Lead at Newlogic, focused on building fast and high-quality Web
    applications.
  </p>
  <p>
    I'm a Google Developers Expert in Web Technologies, and an active volunteer and speaker for local tech communities,
    giving talks and conducting workshops about various technical topics.
  </p>
  <p>
    When not busy experimenting with new Web APIs, I like to spend my time taking photos, playing video games, or
    practicing my card tricks.
  </p>
</div>
```

#### Work experience contents

In addition to grouping the entire work experience section inside a `<div>`, let's also group each individual work experience content inside a `<div>`.

```html
<div>
  <h2>Work experience</h2>

  <div>
    <h3>Frontend Technical Lead, Newlogic</h3>
    <p>February 2019 - Present</p>
    <p>
      Lead frontend and backend developers in developing Web and mobile applications, including requirements gathering,
      proposing solutions, creating design documents and performing code reviews.
    </p>
  </div>

  <div>
    <h3>Web Developer, Channelfix</h3>
    <p>June 2015 - January 2019</p>
    <p>Implemented and structured the core reusable JavaScript modules for an online video tournament platform.</p>
  </div>

  <div>
    <h3>Lecturer, University of the Philippines Cebu</h3>
    <p>January 2017 - May 2017</p>
    <p>Taught lectures and handled laboratories for Web Engineering and Data Structures classes.</p>
  </div>
</div>
```

#### Get in touch contents

```html
<div>
  <h2>Get in touch</h2>

  <p>My inbox is always open for possible project collaborations or if you just want to say hi!</p>
  <p>Send me an email</p>
</div>
```

#### Remaining contents

Although they only contain one element, let's also place the intro text and the "made by" text inside their own `<div>`.

```html
<div>
  <h1>
    Hi, I am Arnelle Balane, a Web Developer based out of Cebu, focused on building fast and high-quality applications.
  </h1>
</div>
```

```html
<div>
  <p>Made with ❤️ by Arnelle Balane</p>
</div>
```

## Semantic Elements

The `<div>` element is a generic container for content. It has no effect on the content or layout until styled in some way, and does not inherently mean anything.

Just like with text where we can mark them as headings or paragraphs, we can also group elements in a more meaningful way using elements that have inherint meanings. We call these elements that give meaning to the content the represent [**semantic elements**](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html). The headings and paragraph elements that we learned previously are examples of such elements.

#### `<section>` element

One semantic element that we can use for grouping content is the [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article) element. They represent a standalone section of a document, and should have a heading inside it.

Let's place the **About me**, **Work experience**, and **Get in touch** sections inside a `<section>` element instead of a `<div>`.

```html
<section>
  <h2>About me</h2>

  <p>...</p>
  <p>...</p>
  <p>...</p>
</section>

<section>
  <h2>Work experience</h2>

  <div>...</div>
  <div>...</div>
  <div>...</div>
</section>

<section>
  <h2>Get in touch</h2>

  <p>...</p>
  <p>...</p>
</section>
```

#### `<article>` element

Another semantic element for grouping content is the [`<article>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article) element, which we will use to contain each individual work experience.

```html
<article>
  <h3>Frontend Technical Lead, Newlogic</h3>
  <p>...</p>
  <p>...</p>
</article>

<article>
  <h3>Web Developer, Channelfix</h3>
  <p>...</p>
  <p>...</p>
</article>

<article>
  <h3>Lecturer, University of the Philippines Cebu</h3>
  <p>...</p>
  <p>...</p>
</article>
```

#### `<footer>` element

One more semantic element for grouping content that we will use in our page is the [`<footer>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) element, which is typically used to contain information about the author, copyright data, or links to related pages.

Let's place the "made by" text inside a `<footer>` element.

```html
<footer>
  <p>Made with ❤️ by Arnelle Balane</p>
</footer>
```

## Additional links

- [Complete code for this lesson](https://github.com/arnellebalane/skourse-html-css-workshop/blob/02-grouping/index.html)
