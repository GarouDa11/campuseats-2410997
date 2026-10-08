# Week 1 reflection
1. What is the difference between building a UI imperatively (plain DOM code) and
declaratively (React)?
react create a library and make easy for programmers to edit, not start from scratch.
In plain DOM code, we have to manually creates,update and delete the elements. But in React ,the DOM code do automatically.  

2. Why must a component name start with a capital letter?
Standards naming jsx rules . The Uppercase at front means its a function or a class . For lowercase it is a standard for html tag

3. What does a fragment <>...</> do, and why not just use a <div>?
the <> ... </> will able to groups multiple sibling elements without rendering an extra DOM node in browser. but if we use <div> might break CSS layouts grid.

4. Name one benefit of splitting the UI into small components.
n term of UI UX , it allow user to easy allocate items while on programmers will easy to handle not disturbing other components.