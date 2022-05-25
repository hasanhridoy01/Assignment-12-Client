import React from 'react';

const Blog = () => {
  return (
    <div className='mt-10 mb-10 grid sm:grid-cols-1 lg:grid-cols-1'>
      <div className="card mr-10 ml-10 shadow-xl p-5">
        <h3 className='text-xl text-secondary'>1 How will you improve the performance of a React Application?</h3>
        <p>If you’re benchmarking or experiencing performance problems in your React apps, make sure you’re testing with the minified production build.
        By default, React includes many helpful warnings. These warnings are very useful in development. However, they make React larger and slower so you should make sure to use the production version when you deploy the app.
        If you aren’t sure whether your build process is set up correctly, you can check it by installing React Developer Tools for Chrome. If you visit a site with React in production mode, the icon will have a dark background:</p>
      </div>
      <div className="card mr-10 ml-10 shadow-xl p-5">
        <h3 className='text-xl text-secondary'>2 What are the different ways to manage a state in a React application?</h3>
        <p>In modern React, we build our applications with functional components. Components are themselves JavaScript functions, independent and reusable bits of code.
        The purpose of building the application with components is to have a modular architecture, with a clear separation of concerns. This makes code easier to understand, easier to maintain, and easier to reuse when possible.
        The state is an object that holds information about a certain component. Plain JavaScript functions don't have the ability to store information. The code within them executes and "dissapears" once the execution is finished.
        But thanks to state, React functional components can store information even after execution. When we need a component to store or "remember" something, or to act in a different way depending on the environment, state is what we need to make it work this way.</p>
      </div>
      <div className="card mr-10 ml-10 shadow-xl p-5">
        <h3 className='text-xl text-secondary'>3 How does prototypical inheritance work?</h3>
        <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.
        Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).
        JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.
        Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.</p>
      </div>
      <div className="card mr-10 ml-10 shadow-xl p-5">
        <h3 className='text-xl text-secondary'>4 Why you do not set the state directly in React. For example, if you have `const [products, setProducts] = useState([])`. Why you do not set `products = [...]` instead, you use the `setProducts`</h3>
        <p>What does calling useState do? It declares a “state variable”. Our variable is called count but we could call it anything else, like banana. This is a way to “preserve” some values between the function calls — useState is a new way to use the exact same capabilities that this.state provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React.
        What do we pass to useState as an argument? The only argument to the useState() Hook is the initial state. Unlike with classes, the state doesn’t have to be an object. We can keep a number or a string if that’s all we need. In our example, we just want a number for how many times the user clicked, so pass 0 as initial state for our variable. (If we wanted to store two different values in state, we would call useState() twice.)
        What does useState return? It returns a pair of values: the current state and a function that updates it. This is why we write const [count, setCount] = useState(). This is similar to this.state.count and this.setState in a class, except you get them in a pair. If you’re not familiar with the syntax we used, we’ll come back to it at the bottom of this page.</p>
      </div>
      <div className="card mr-10 ml-10 shadow-xl p-5">
        <h3 className='text-xl text-secondary'>5 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
        <p>It’s official.
        Mobile commerce is on the rise (and not just browsing, but actual conversions)
        Google is getting more serious about their mobile algorithm, separating it from it’s desktop version to account for mobile consumer habits and preferences
        Webstores are officially storytelling complements to Amazon, where price and convenience reign.
        These 3 factors all mean one thing:

        Your product page is the most important page on your site.

        Build your product page effectively and both your traffic and conversions will skyrocket.

        Fail to do so, and almost all your marketing and advertising efforts will fall short of goal.

        This is risky business – and it’s the same business that digital marketers building landing pages have long been grappling with.

        Your product page is now a landing page – at least in function.

        This means it needs to (in order of importance):

        Use psychological triggers to convince browsers to add to cart
        Grab consumer attention immediately to the add to cart button
        Fully explain both the product and the company (after all, consumers are bypassing your homepage)
        Build trust in the product and company, often through social proof
        Upsell or resell to increase AOV
        There are a variety of ways to do each one of these, and we’ll focus on each section below and show you examples of how folks are turning their ecommerce product pages into landing pages.</p>
      </div>
      <div className="card mr-10 ml-10 shadow-xl p-5">
        <h3 className='text-xl text-secondary'>6 What is a unit test? Why should write unit tests?</h3>
        <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.

        Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.

        Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.</p>
      </div>
    </div>
  );
};

export default Blog;