# Frontend Mentor - Results Summary Component Solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- [Solution URL](https://github.com/Ozzy-codes/frontendMentor-resultSummaryComponent)
- [Live Site URL](https://ozzy-codes.github.io/frontendMentor-resultSummaryComponent/)

## My process

### Built with

- Semantic HTML5 Markup
- Mobile-First Workflow
- Every Layout - The Stack Methodology
- CUBE CSS Methodology
- Flexbox
- > **UPDATE:** vanilla JS

### What I learned

In this project, I tried to explore CSS design principles that would allow for a product that is flexible, scalable, and modular. You may notice that within my CSS, I make use of pattern selectors with element context in mind such as the [lobotomized owl selector](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/) e.g.

```css
.marginTop > * + * {
  margin-top: 1.5rem;
}
```

This pattern surfaced in my reading of design methodologies and the discovery of [Every Layout - The Stack](https://every-layout.dev/layouts/stack/). It was this article that inspired the CSS for this project after making the switch to "style the context, not the individual element(s)". e.g.

```css
.total {
  align-items: center;
  padding: 1.5rem 3rem 2.25rem 3rem;
  border-radius: 0 0 2rem 2rem;
  background: linear-gradient(to top, hsl(241, 81%, 54%), hsl(252, 100%, 67%));
  color: hsl(241, 100%, 89%);
}

.total > *:nth-child(3) {
  color: white;
  font-size: 1.5em;
  margin-top: 1.25rem;
}

.total > *:last-child {
  font-size: 0.95em;
  text-align: center;
  opacity: 0.75;
  margin-top: 0.75rem;
}
```

Extending from _Every Layout_ I discovered a [CUBE CSS](https://andy-bell.co.uk/cube-css/) methodology blog. From this I extrapolated the idea of _Utility_ classes - similar to that of how tailwind functions e.g.

```css
.remove-margin {
  margin: 0;
}

.flexColumn {
  display: flex;
  flex-direction: column;
}
```

and also _Block_ classes for unique components that require more attention e.g.

```css
.total .score {
  width: 9em;
  height: 9em;
  border-radius: 50%;
  justify-content: end;
  align-items: center;
  background: linear-gradient(
    to top,
    hsla(241, 72%, 46%, 0),
    hsla(256, 72%, 46%, 1)
  );
}
```

### Continued development

I'm interested in exploring more examples of CSS methodologies that are designed with the global design in mind, and strengthening my understanding of the _CUBE_ and _Every Layout_ methods.
I'm also not done with this product yet! I'm planning on populating the data on the card via JS and preventing the default behavior of the _continue_ button. Please feel free to share suggestions.

> **UPDATE:**
> I've included JS to dynamically render the individual topic results from a JSON file, and dynamically calculate the average score under the total result card. I've set the calculating logic to round averages with a decimal less than .50 down. Thanks to a loop, you may insert additional documents within the JSON file and a bulk of the styling will be auto generated. Lastly, the continue button no longer redirects, allowing the user to easily see active and hover/focus states.
> Where do you recommend I start to refactor?

### Useful resources

- [Every Layout - The Stack](https://every-layout.dev/layouts/stack/) - This resource introduced me to the idea of styling elements in context, not just styling individual elements
- [CUBE CSS](https://andy-bell.co.uk/cube-css/) - This resource inspired a CSS approach of styling top down, global elements first, rather than bottom up, individual components first.

## Author

- GitHub - [Ozzy-codes](https://github.com/Ozzy-codes)
- Frontend Mentor - [@Ozzy-codes](https://www.frontendmentor.io/profile/Ozzy-codes)
