---
language: html, css, javascript
tags: jquery, js, selectors, methods, beginner
type: lab, challenge
resources: 2
---

# Code Challenge - Exploring jQuery Methods

In this challenge you will work in groups to select buttons to add click events triggering ta variety of jquery methods on corresponding paragraphs and elements in the page.

## Getting Started
In `js/methods.js` look up each method labeled in a comment. For example, you can lookup the usage for `//hide` at `http://api.jquery.com/hide`. Select each button from the `index.html` page that is labeled with an id number, for example `#b1`, and use the click event method to write the code necessary to trigger the paragraph (in `index.html`) below the button to behave as the button is labeled. For example, `#b1` should `.hide()` paragraph 1 `#p1`. The first example is filled in for you. Repeat this for all remaining buttons and targeted elements. As a reference you can see a live code example [here](http://learn-co-curriculum.github.io/fe-jquery-exploring-methods/).

## Tips
1. For some methods, like `fadeIn`, you will need to specify an amount of time for the click event to take place. Because of the way the tests are set up, please choose something __less than__ 1000ms.

2. There is no test for the final click event labeled "animate" in the comment. Have fun with this one and program the coolest animation you can come up with for the box.

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