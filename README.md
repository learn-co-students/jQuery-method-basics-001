---
language: html, css, javascript
tags: jquery, js, selectors, methods, beginner
type: lab, challenge
resources: 2
---

# Code Challenge - Exploring jQuery Methods

In this challenge you will work in groups to select buttons to add click events triggering ta variety of jquery methods on corresponding paragraphs and elements in the page.

## Getting Started
In `js/methods.js` lookup each method labeled in a comment. For example, you can lookup the usage for `//hide` at `http://api.jquery.com/hide`. Select each button from the index.html page that is labeled with an id number, for example `#b1`, and use the click event method to write the code necessary to trigger the paragraph (in `index.html`) below the button to behave as the button is labeled. For example, `#b1` should `.hide()` paragraph 1 `#p1`. The first example is filled in. Repeat this for all remaining buttons and targeted elements. As a reference you can see a live code example [here](http://learn-co-curriculum.github.io/fe-jquery-exploring-methods/).

## What You Need to Do

1. Write a function that selects all `<h1>` elements.
2. Write a function that selects all `<li>` inside of `<ol>`.
3. Write a function that selects the `<a>` that is inside of the element that has both an id of box4 and a class of box5.
4. Write a function that selects the image of the cat that has the alt text equal to "cat sleeping".
5. Write a function that selects all the checkbox inputs and wraps them with a span that has the class of pinky using the wrap method.

ex.
```javascript
  // Select the element with the class of special and apply the class of pinky using addClass method.

  // But wrap it in a function!!!!
  $('.special').addClass('pinky');
```

##Before You Start
```shell
# Install jasmine:
gem sources -a http://flatiron:33west26@gems.flatironschool.com
gem install learn-co

# Run Jasmine test suite:
learn  # runs only in the terminal
learn -b # runs also in the browser
```

## Resources

 * [jQuery API](http://api.jquery.com/)
 * [Live Working Example](http://learn-co-curriculum.github.io/fe-jquery-exploring-methods/)