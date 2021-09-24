# Migrating To Classes

Now that we know how to use the `class` attribute in HTML and class selectors in CSS, let's now modify our code to take advantage of CSS classes. We will again do it by section of our page.

In the changes below, what we're doing is adding classes to some HTML elements, and changing the selectors in our CSS rules. Some sections also add custom styles to their elements now that we can identify them easily using their classes.

### Intro section changes

```html
<div class="intro-section">
  <h1>
    Hi, I am <span class="highlight-name">Arnelle Balane,</span> a Web Developer based out of Cebu, focused on building
    fast and high-quality applications.
  </h1>
</div>
```

```css
/* Previously: div */
.intro-section {
  max-width: 1000px;
  padding: 0px 24px;
  margin: 150px auto;

  text-align: center;
}

/* Previously: h1 */
.intro-section h1 {
  font-size: 48px;
  line-height: 58px;
  color: #4b5563;
}

/* Previously: h1 span */
.intro-section .highlight-name {
  display: block;
  color: #7c3aed;
}
```

### Generic section styles

```css
/* Previously: section */
.section {
  max-width: 760px;
  padding: 0px 24px;
  margin: 150px auto;
}

/* Previously: h2 */
.section h2 {
  margin-bottom: 42px;

  font-size: 32px;
  line-height: 42px;
  text-align: center;
  color: #4b5563;
}
```

### About me section changes

```html
<section class="section about-section">
  <h2>About me</h2>

  <p>
    I am currently working as a Frontend Technical Lead at <strong>Newlogic</strong>, focused on building fast and
    high-quality Web applications.
  </p>
  <p>
    I'm a Google Developers Expert in Web Technologies, and an active volunteer and speaker for local tech communities,
    giving talks and conducting workshops about various technical topics.
  </p>
  <p>
    When not busy experimenting with new Web APIs, I like to spend my time taking photos, playing video games, or
    practicing my card tricks.
  </p>
</section>
```

Based on the **04 - Classes** page from our [design reference](/getting-started/personal-portfolio#design-reference), the "About me" heading of this section is not actually shown. This becomes easier to implement with CSS classes.

```css
.about-section h2 {
  display: none;
}
```

### Work experience section changes

```html
<section class="section work-section">
  <h2>Work experience</h2>

  <article class="work">
    <h3 class="work-title"><strong>Frontend Technical Lead,</strong> Newlogic</h3>
    <p class="work-dates">February 2019 - Present</p>
    <p class="work-description">
      Lead frontend and backend developers in developing Web and mobile applications, including requirements gathering,
      proposing solutions, creating design documents and performing code reviews.
    </p>
  </article>

  <article class="work">
    <h3 class="work-title"><strong>Web Developer,</strong> Channelfix</h3>
    <p class="work-dates">June 2015 - January 2019</p>
    <p class="work-description">
      Implemented and structured the core reusable JavaScript modules for an online video tournament platform.
    </p>
  </article>

  <article class="work">
    <h3 class="work-title"><strong>Lecturer,</strong> University of the Philippines Cebu</h3>
    <p class="work-dates">January 2017 - May 2017</p>
    <p class="work-description">
      Taught lectures and handled laboratories for Web Engineering and Data Structures classes.
    </p>
  </article>
</section>
```

Now that we can distinguish between the two paragraphs inside each work experience item, we can now style them differently.

```css
/* Previously: article */
.work {
  padding: 32px 42px;
  margin-bottom: 32px;
  border-radius: 5px;

  background-color: #f9fafb;
}

/* Previously: h3 */
.work-title {
  margin: 0px;

  font-size: 18px;
  font-weight: normal;
  line-height: 28px;
}

.work-dates {
  margin: 0px;

  font-size: 14px;
  line-height: 24px;
  color: #4b5563;
}

.work-description {
  margin-bottom: 0px;
}
```

### Get in touch section changes

```html
<section class="section contact-section">
  <h2>Get in touch</h2>

  <p>My inbox is always open for possible project collaborations or if you just want to say hi!</p>
  <p class="email-button">Send me an email</p>
</section>
```

We can now also style the **Get in touch** section differently, now that we can distinguish it from the other sections in the page.

```css
.contact-section {
  max-width: 712px;
  padding-top: 56px;
  padding-bottom: 56px;
  border-radius: 5px;

  text-align: center;
  color: #ffffff;
  background-image: linear-gradient(to bottom right, #8b5cf6, #5b21b6);
}

.contact-section h2 {
  margin-top: 0;
  margin-bottom: 24px;

  color: #ffffff;
}

.contact-section p {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.contact-section .email-button {
  display: inline-block;
  padding: 14px 42px;
  margin-top: 56px;
  margin-bottom: 0;
  border-radius: 5px;

  font-weight: bold;
  color: #7c3aed;
  background-color: #ffffff;
}
```

### Footer changes

```html
<footer class="site-footer">
  <p>Made with ❤️ by Arnelle Balane</p>
</footer>
```

```css
/* Previously: footer */
.site-footer {
  padding: 42px 24px;

  text-align: center;
  background-color: #f9fafb;
}

/* Previously: footer p */
.site-footer p {
  margin: 0;

  color: #4b5563;
}
```

## Additional Links

- [Complete code for HTML file](https://github.com/arnellebalane/skourse-html-css-workshop/blob/06-classes/index.html)
- [Complete code for CSS file](https://github.com/arnellebalane/skourse-html-css-workshop/blob/06-classes/index.css)
