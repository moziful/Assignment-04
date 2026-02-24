1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById: It return only a single element by its ID and It is the fastest way to select something.
getElementsByClassName: It selects multiple elements using their class name. It automatically updates when the DOM changes.
querySelector: It selects the first element matching CSS selector. It returns only one element. It supports CSS selectors.
querySelectorAll: It selects all element matching CSS selector. It returns multiple element. It supports CSS selectors. It also allow iteration.
2. How do you create and insert a new element into the DOM?
We can create an element using document.createElement. After creating, we can add content, class, id by using textContent, className, id. Then we can insert the elemnt at the last of the DOM by appendChild. If we want to add it at first, then we can use prepend. Moreover, we can insert it in a specific position like after something or before something.
3. What is Event Bubbling? And how does it work?
Event Bubbling is a JavaScript event mechanism where an event starts from a target element and then go upward through its parent elements. Suppose, a button inside a a paragraph, and the paragraph is inside a div. By event bubbling, clicking the button will trigger its action, then its parent, the paragraphs event listener. After that it trigger the divs action and so on. 
4. What is Event Delegation in JavaScript? Why is it useful?
A single event listener in parent that control all the child is event delegation. It reduce the number of event listeners, so it is fater and very useful. It works with all the element even created after page load. So, adding a new child automatically get controlled by its parent.
5. What is the difference between preventDefault() and stopPropagation() methods?
Both used to control event behavior but in different ways. The preventDefault stops what the browser does by default as an event occurs. But stopPropagation stops the DOM bubbling. 
