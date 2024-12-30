(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-us-container\">\n    <div class=\"about-us-header\">\n        <h2>About Us</h2>\n        <p>Learn more about our mission and how we help developers grow and succeed with Angular.</p>\n    </div>\n\n    <div class=\"about-us-content\">\n        <!-- Image -->\n        <img src=\"https://via.placeholder.com/400x250\" alt=\"About Us Image\">\n\n        <!-- Text Content -->\n        <div>\n            <h3>Our Mission</h3>\n            <p>We are dedicated to providing comprehensive Angular tutorials and interview preparation material for aspiring developers. Whether you're just starting or aiming to master Angular, we have resources to help you every step of the way.</p>\n\n            <h3>Our Vision</h3>\n            <p>Our vision is to become the leading platform for Angular developers to learn, build real-world projects, and ace technical interviews. We believe in the power of community and collaboration, and we are committed to empowering developers globally with top-notch education and resources.</p>\n\n            <h3>What We Offer</h3>\n            <ul>\n                <li>In-depth Angular tutorials</li>\n                <li>Real-world projects to improve your skills</li>\n                <li>Expert-curated interview questions and answers</li>\n                <li>Guides on best practices and Angular performance optimization</li>\n                <li>Community support and resources</li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }} Angular Tutorial\n  </h1> <hr>\n</div>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-container\">\n    <div class=\"contact-header\">\n        <h2>Contact Us</h2>\n        <p>Have questions? We would love to hear from you!</p>\n    </div>\n\n    <!-- Contact Information -->\n    <div class=\"contact-info\">\n        <h4>Our Contact Information</h4>\n        <p><strong>Email:</strong> <a href=\"mailto:khalatev@gmail.com\">khalatev@gmail.com</a></p>\n        <p><strong>Phone:</strong> </p>\n        <p><strong>Address:</strong> </p>\n    </div>\n\n    <!-- Contact Form -->\n    <h4>Send Us a Message</h4>\n    <form action=\"#\" method=\"post\">\n        <div class=\"form-group\">\n            <label for=\"name\">Full Name:</label>\n            <input type=\"text\" id=\"name\" class=\"form-control\" name=\"name\" required placeholder=\"Enter your full name\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"email\">Email Address:</label>\n            <input type=\"email\" id=\"email\" class=\"form-control\" name=\"email\" required placeholder=\"Enter your email address\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"message\">Message:</label>\n            <textarea id=\"message\" class=\"form-control\" name=\"message\" rows=\"5\" required placeholder=\"Write your message here...\"></textarea>\n        </div>\n        <button type=\"submit\" class=\"btn-submit\">Send Message</button>\n    </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer class=\"bg-dark text-white text-center text-lg-start\">\n    <div class=\"container p-4\">\n        <!-- Row -->\n        <div class=\"row\">\n            <!-- Column 1 -->\n            <div class=\"col-lg-4 col-md-6 mb-4 mb-md-0\">\n                <h5 class=\"text-uppercase\">About Us</h5>\n                <p>\n                    Learn Angular with comprehensive tutorials, real-world projects, and expertly curated content. Build your skills and ace interviews with ease.\n                </p>\n            </div>\n            <!-- Column 2 -->\n            <div class=\"col-lg-4 col-md-6 mb-4 mb-md-0\">\n                <h5 class=\"text-uppercase\">Quick Links</h5>\n                <ul class=\"list-unstyled mb-0\">\n                    <li><a routerLink=\"/tutorial\" class=\"text-white text-decoration-none\">Tutorials</a></li>\n                    <li><a routerLink=\"project-idea\" class=\"text-white text-decoration-none\">Projects</a></li>\n                    <li><a routerLink=\"contact-us\" class=\"text-white text-decoration-none\">Contact Us</a></li>\n                    <li><a routerLink=\"about-us\" class=\"text-white text-decoration-none\">About Us</a></li>\n                </ul>\n            </div>\n            <!-- Column 3 -->\n            <div class=\"col-lg-4 col-md-12 mb-4 mb-md-0\">\n                <h5 class=\"text-uppercase\">Contact Us</h5>\n                <ul class=\"list-unstyled mb-0\">\n                    <li>Email: <a href=\"mailto:khalatev@gmail.com\" class=\"text-white text-decoration-none\">khalatev@gmail.com</a></li>\n                    <li>Phone: </li>\n                    <li>Address: </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <!-- Footer Bottom -->\n    <div class=\"text-center p-3\" style=\"background-color: rgba(0, 0, 0, 0.2);\">\n        © 2024 Angular Website | All Rights Reserved\n    </div>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"welcome-section\">\n    <h3>Welcome to Angular Tutorial</h3>\n    <h4>Master Angular: Ace Interviews & Build Amazing Websites</h4>\n    <h5>Comprehensive tutorials, real-world projects, and expert-curated interview questions to fast-track your Angular development journey.</h5>\n    <p>This tutorial website will teach Angular interview questions and basic skills to help Angular developers learn and build websites.</p>\n</div>\n<p>Angular is a platform and framework for building client-side applications using HTML, CSS, and TypeScript/JavaScript. Developed and maintained by Google, Angular provides a powerful set of tools to create dynamic, single-page applications (SPAs) and is widely used for developing enterprise-scale web applications.</p>\n\n    <h2>Key Features of Angular</h2>\n\n    <h3>1. Component-Based Architecture</h3>\n    <p>Angular applications are built using components, which encapsulate the logic and UI.</p>\n    <p>Components are reusable, making it easier to manage and maintain the codebase.</p>\n    <p>A component is made up of a template (HTML), a class (TypeScript), and styles (CSS).</p>\n\n    <h3>2. TypeScript</h3>\n    <p>Angular is built using TypeScript, which is a superset of JavaScript that includes static typing, classes, and interfaces, helping catch errors early and enabling better code quality and maintainability.</p>\n\n    <h3>3. Two-Way Data Binding</h3>\n    <p>Data binding allows synchronization of data between the model (data) and the view (UI).</p>\n    <p>Two-way binding means that changes in the view reflect in the model, and changes in the model reflect in the view.</p>\n\n    <h3>4. Directives</h3>\n    <p>Directives are special markers in the DOM that tell Angular to attach specific behavior to an element or modify the DOM structure.</p>\n    <p>Examples include structural directives like <code>*ngIf</code> and <code>*ngFor</code>, which control element rendering.</p>\n\n    <h3>5. Dependency Injection (DI)</h3>\n    <p>Angular uses dependency injection to provide services or other dependencies to components and other parts of the application, improving modularity and testability.</p>\n    <p>This allows Angular to manage the lifecycle of services and objects, reducing boilerplate code.</p>\n\n    <h3>6. Routing</h3>\n    <p>Angular’s router enables navigation between views or pages in the application, allowing users to navigate seamlessly without page reloads (SPA behavior).</p>\n    <p>It supports lazy loading, which can load parts of the app on demand, improving performance.</p>\n\n    <h3>7. RxJS (Reactive Extensions for JavaScript)</h3>\n    <p>RxJS is used for managing asynchronous operations in Angular. It enables reactive programming, making it easier to handle events, data streams, and asynchronous logic using Observables.</p>\n\n    <h3>8. Forms</h3>\n    <p>Angular supports both template-driven and reactive forms, allowing developers to handle user input and validation effectively.</p>\n    <p>Reactive forms provide a more robust way to manage complex form logic and validation.</p>\n\n    <h3>9. Testing</h3>\n    <p>Angular includes testing frameworks such as Jasmine and Karma to help developers write unit and end-to-end tests.</p>\n    <p>It also supports mock services and DI for testing various parts of an application.</p>\n\n    <h3>10. CLI (Command-Line Interface)</h3>\n    <p>Angular CLI is a powerful tool that allows developers to create, build, test, and deploy Angular applications.</p>\n    <p>It automates tasks like project setup, code generation, and testing, improving productivity.</p>\n\n    <h3>11. Internationalization (i18n)</h3>\n    <p>Angular provides built-in support for internationalization, allowing applications to support multiple languages and regional formats.</p>\n\n    <h2>Benefits of Using Angular</h2>\n\n    <ul>\n        <li><strong>Rich Ecosystem:</strong> Angular offers a vast ecosystem of tools, libraries, and plugins that enhance productivity and extend functionality.</li>\n        <li><strong>Cross-Platform Development:</strong> Angular supports building applications that work across different platforms, including web, mobile, and desktop using tools like Angular Universal and Ionic.</li>\n        <li><strong>Scalability:</strong> Angular is well-suited for building large-scale, enterprise-level applications due to its modularity and maintainability.</li>\n        <li><strong>Community and Support:</strong> Angular has a large community, with extensive documentation, tutorials, and a wealth of third-party tools.</li>\n    </ul>\n\n    <h2>Angular Website</h2>\n    <p>For more detailed documentation and resources, you can visit the official Angular website: <a href=\"https://angular.io\" target=\"_blank\">https://angular.io</a>. It offers comprehensive guides, tutorials, and API references for learning and mastering Angular.</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/http-request/http-request.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/http-request/http-request.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\t{{myValProp}}</p>\n\n<pre>{{this.propChanges | json}}</pre>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/lifecycle-hook/lifecycle-hook.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lifecycle-hook/lifecycle-hook.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Angular Lifecycle Hooks</h2>\n<p>\n  Angular lifecycle hooks are special methods that Angular calls during the different stages of a component's lifecycle.\n  These hooks allow developers to execute custom logic during initialization, rendering, updates, and destruction of components.\n</p>\n\n<h3>Common Lifecycle Hooks</h3>\n<p>The order of execution:</p>\n<ol>\n  <li>ngOnChanges</li>\n  <li>ngOnInit</li>\n  <li>ngDoCheck</li>\n  <li>ngAfterContentInit</li>\n  <li>ngAfterContentChecked</li>\n  <li>ngAfterViewInit</li>\n  <li>ngAfterViewChecked</li>\n  <li>ngOnDestroy</li>\n</ol>\n<table>\n  <thead>\n    <tr>\n      <th>Hook</th>\n      <th>When It Runs</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>ngOnChanges</td>\n      <td>On input property changes.</td>\n    </tr>\n    <tr>\n      <td>ngOnInit</td>\n      <td>Once after component initialization.</td>\n    </tr>\n    <tr>\n      <td>ngDoCheck</td>\n      <td>On every change detection cycle.</td>\n    </tr>\n    <tr>\n      <td>ngAfterContentInit</td>\n      <td>After content projection initialization.</td>\n    </tr>\n    <tr>\n      <td>ngAfterContentChecked</td>\n      <td>After projected content is checked.</td>\n    </tr>\n    <tr>\n      <td>ngAfterViewInit</td>\n      <td>After component's view is initialized.</td>\n    </tr>\n    <tr>\n      <td>ngAfterViewChecked</td>\n      <td>After component's view is checked.</td>\n    </tr>\n    <tr>\n      <td>ngOnDestroy</td>\n      <td>Before the component is destroyed.</td>\n    </tr>\n  </tbody>\n</table>\n<div>\n    <p><strong>1. ngOnChanges</strong></p>\n    <p><strong>Called:</strong> When an input property (<code>@Input</code>) of the component changes.</p>\n    <p><strong>When it runs:</strong> Before <code>ngOnInit</code>, and any time a bound input property changes.</p>\n    <p><strong>Use case:</strong> Handle changes to input properties.</p>\n    <pre>\n      <code>\n        ngOnChanges(changes: SimpleChanges): void \n          console.log('ngOnChanges called', changes);\n        \n      </code>\n    </pre>\n  </div>\n\n  <div>\n    <p><strong>2. ngOnInit</strong></p>\n    <p><strong>Called:</strong> Once, after the component’s input properties are set.</p>\n    <p><strong>When it runs:</strong> After Angular has initialized the component.</p>\n    <p><strong>Use case:</strong> Initialize data, perform API calls, or set up component logic.</p>\n    <pre>\n      <code>\n        ngOnInit(): void \n          console.log('ngOnInit called');\n        \n      </code>\n    </pre>\n  </div>\n\n  <div>\n    <p><strong>3. ngDoCheck</strong></p>\n    <p><strong>Called:</strong> During every change detection cycle.</p>\n    <p><strong>When it runs:</strong> After <code>ngOnChanges</code> and <code>ngOnInit</code>, and whenever Angular runs change detection.</p>\n    <p><strong>Use case:</strong> Implement custom change detection logic.</p>\n    <pre>\n      <code>\n        ngDoCheck(): void \n          console.log('ngDoCheck called');\n        \n      </code>\n    </pre>\n  </div>\n\n  <div>\n    <p><strong>4. ngAfterContentInit</strong></p>\n    <p><strong>Called:</strong> Once, after the content (i.e., the projected content via <code>&lt;ng-content&gt;</code>) has been initialized.</p>\n    <p><strong>When it runs:</strong> After Angular projects external content into the component.</p>\n    <p><strong>Use case:</strong> Handle initialization logic that depends on projected content.</p>\n    <pre>\n      <code>\n        ngAfterContentInit(): void \n          console.log('ngAfterContentInit called');\n       \n      </code>\n    </pre>\n  </div>\n\n  <div>\n    <p><strong>5. ngAfterContentChecked</strong></p>\n    <p><strong>Called:</strong> After every change detection cycle for the content projected into the component.</p>\n    <p><strong>When it runs:</strong> After <code>ngAfterContentInit</code> and every time Angular checks the content.</p>\n    <p><strong>Use case:</strong> Perform checks or updates on the projected content.</p>\n    <pre>\n      <code>\n        ngAfterContentChecked(): void \n          console.log('ngAfterContentChecked called');\n        \n      </code>\n    </pre>\n  </div>\n\n  <div>\n    <p><strong>6. ngAfterViewInit</strong></p>\n    <p><strong>Called:</strong> Once, after the component’s view (i.e., the HTML template) has been initialized.</p>\n    <p><strong>When it runs:</strong> After Angular initializes the component’s view and child views.</p>\n    <p><strong>Use case:</strong> Access child components or DOM elements for initialization.</p>\n    <pre>\n      <code>\n        ngAfterViewInit(): void \n          console.log('ngAfterViewInit called');\n       \n      </code>\n    </pre>\n  </div>\n\n  <div>\n    <p><strong>7. ngAfterViewChecked</strong></p>\n    <p><strong>Called:</strong> After every change detection cycle for the component’s view and child views.</p>\n    <p><strong>When it runs:</strong> After <code>ngAfterViewInit</code> and every time Angular checks the component’s view.</p>\n    <p><strong>Use case:</strong> Perform actions after the view has been updated.</p>\n    <pre>\n      <code>\n        ngAfterViewChecked(): void \n          console.log('ngAfterViewChecked called');\n        \n      </code>\n    </pre>\n  </div>\n\n  <div>\n    <p><strong>8. ngOnDestroy</strong></p>\n    <p><strong>Called:</strong> Just before the component is destroyed.</p>\n    <p><strong>When it runs:</strong> Right before Angular removes the component from the DOM.</p>\n    <p><strong>Use case:</strong> Clean up resources like subscriptions, event listeners, or timers.</p>\n    <pre>\n      <code>\n        ngOnDestroy(): void \n          console.log('ngOnDestroy called');\n       \n      </code>\n    </pre>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-danger\">\n        <a class=\"navbar-brand text-white\" routerLink=\"/home\" routerLinkActive=\"active\"><img src=\"/assets/logo.png\" alt=\"Logo\" style=\"margin-left: 10px;width: 83px;\"></a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                    <a class=\"nav-link text-white\" routerLink=\"/home\">Home</a>\n                </li>\n                <li class=\"nav-item\" routerLinkActive=\"active\">\n                    <a class=\"nav-link text-white\" routerLink=\"/tutorial\">Tutorials</a>\n                </li>\n                <li class=\"nav-item\" routerLinkActive=\"active\">\n                    <a class=\"nav-link text-white\" routerLink=\"/question\">Interview Questions</a>\n                </li>\n                <li class=\"nav-item\" routerLinkActive=\"active\">\n                    <a class=\"nav-link text-white\" routerLink=\"/project-idea\">Projects</a>\n                </li>\n                <li class=\"nav-item\" routerLinkActive=\"active\">\n                    <a class=\"nav-link text-white disabled\" routerLink=\"/about-us\">About Us</a>\n                </li>\n                <li class=\"nav-item\" routerLinkActive=\"active\">\n                    <a class=\"nav-link text-white disabled\" routerLink=\"/contact\">Contact</a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/projects.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project-ideas\">\n    <div class=\"section-title\">Angular Project Ideas</div>\n    <ul class=\"project-list\">\n        <li class=\"project-item\">\n            <h4>1. Todo List Application</h4>\n            <p>Create a simple application to manage daily tasks, featuring CRUD operations and a user-friendly interface.</p>\n        </li>\n        <li class=\"project-item\">\n            <h4>2. Weather App</h4>\n            <p>Build an app that fetches real-time weather data using an API and displays it in a clean, responsive design.</p>\n        </li>\n        <li class=\"project-item\">\n            <h4>3. E-commerce Website</h4>\n            <p>Develop a fully functional e-commerce platform with product listings, shopping cart functionality, and payment integration.</p>\n        </li>\n        <li class=\"project-item\">\n            <h4>4. Blog Platform</h4>\n            <p>Create a platform for users to write, publish, and manage blog posts with features like commenting and user authentication.</p>\n        </li>\n        <li class=\"project-item\">\n            <h4>5. Chat Application</h4>\n            <p>Develop a real-time chat application using Angular and a backend like Firebase or Node.js.</p>\n        </li>\n        <li class=\"project-item\">\n            <h4>6. Portfolio Website</h4>\n            <p>Build a personal portfolio site showcasing your skills, projects, and contact information with Angular animations.</p>\n        </li>\n        <li class=\"project-item\">\n            <h4>7. Task Management System</h4>\n            <p>Create a task management tool for teams, including task assignments, progress tracking, and notifications.</p>\n        </li>\n        <li class=\"project-item\">\n            <h4>8. Movie Recommendation App</h4>\n            <p>Develop an app that suggests movies based on user preferences and reviews, using a third-party API.</p>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/question/question.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/question/question.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"qa-section\">\n    <div class=\"section-title\">Angular Interview Questions and Answers</div>\n\n    <div class=\"qa-item\">\n        <div class=\"question\">1. What is Angular? Explain its main features.</div>\n        <div class=\"answer\">\n            Angular is a TypeScript-based front-end web application framework developed by Google. It allows developers to build single-page applications (SPAs) with a clean structure and reusable components.  \n            <br><strong>Main Features:</strong>  \n            - Component-based architecture  \n            - Dependency injection  \n            - Two-way data binding  \n            - Directives for DOM manipulation  \n            - RxJS for reactive programming  \n            - TypeScript support  \n        </div>\n    </div>\n\n    <div class=\"qa-item\">\n        <div class=\"question\">2. Explain the difference between AngularJS and Angular.</div>\n        <div class=\"answer\">\n            <strong>AngularJS:</strong>  \n            - Based on JavaScript  \n            - Uses MVC architecture  \n            - Supports two-way data binding but with a digest cycle  \n            - Released in 2010  \n            <br><strong>Angular (2+):</strong>  \n            - Based on TypeScript  \n            - Component-based architecture  \n            - Enhanced performance with Ahead-of-Time (AOT) compilation  \n            - Supports hierarchical dependency injection  \n            - Released from 2016 onwards  \n        </div>\n    </div>\n\n    <div class=\"qa-item\">\n        <div class=\"question\">3. How does Angular handle dependency injection?</div>\n        <div class=\"answer\">\n            Angular provides a built-in dependency injection (DI) framework that allows developers to define and manage dependencies for components, services, and other classes.  \n            <br><strong>How it works:</strong>  \n            - Dependencies are declared in the constructor of a class.  \n            - Angular injects instances of these dependencies at runtime, ensuring loose coupling between components and services.  \n            - The hierarchical injector system allows scoped services for modules and components.  \n        </div>\n    </div>\n\n    <div class=\"qa-item\">\n        <div class=\"question\">4. What are lifecycle hooks in Angular?</div>\n        <div class=\"answer\">\n            Lifecycle hooks are methods that Angular calls at specific points in a component or directive's lifecycle.  \n            <br><strong>Common Lifecycle Hooks:</strong>  \n            - <code>ngOnInit()</code>: Called once the component is initialized.  \n            - <code>ngOnChanges()</code>: Called whenever input properties change.  \n            - <code>ngOnDestroy()</code>: Called before the component is destroyed.  \n            - <code>ngAfterViewInit()</code>: Called after the component's view is initialized.  \n            These hooks allow developers to execute logic at different phases of the component lifecycle.\n            <a routerLink=\"/lifecycle-hook\" aria-label=\"Learn more about lifecycle hooks\">For more details, click here</a> \n        </div>\n    </div>\n\n    <div class=\"qa-item\">\n        <div class=\"question\">5. Explain Change Detection in Angular.</div>\n        <div class=\"answer\">\n            Change detection in Angular is the process of tracking changes in the state of an application and updating the DOM accordingly.  \n            <br><strong>How it works:</strong>  \n            - Angular uses a tree of components to detect changes.  \n            - Each component has its own change detector, which checks bindings and updates the DOM.  \n            - The <code>Zone.js</code> library is used to detect asynchronous changes like HTTP requests or user input.  \n            - Developers can optimize change detection using <code>OnPush</code> change detection strategy or manually triggering detection using <code>ChangeDetectorRef</code>.  \n        </div>\n    </div>\n\n    <div class=\"qa-item\">\n        <div class=\"question\">6. How do you optimize an Angular application?</div>\n        <div class=\"answer\">\n            Optimizing an Angular application involves various strategies:  \n            - Use <strong>Ahead-of-Time (AOT)</strong> compilation to reduce the size of the application bundle.  \n            - Implement lazy loading to load modules only when needed.  \n            - Use <strong>OnPush</strong> change detection for components with immutable data.  \n            - Minimize the use of watchers and unnecessary bindings.  \n            - Compress assets like images and CSS files.  \n            - Use <strong>Angular Universal</strong> for server-side rendering (SSR).  \n            - Leverage performance tools like Lighthouse to identify bottlenecks.  \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tutorial/tutorial.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tutorial/tutorial.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <h1>Angular Tutorial</h1>\n    <p>Your guide to mastering Angular development</p>\n</header>\n\n<div class=\"content\">    \n    <div class=\"section\" *ngFor=\"let section of sections; let i = index\">\n        <div class=\"section-title\" (click)=\"toggleContent(i)\">\n            <span class=\"arrow\" [ngClass]=\"{ 'rotate': section.isVisible }\">▶</span>\n            {{ section.title }}\n        </div>\n        <div *ngIf=\"section.isVisible\" class=\"section-content\">\n            <div [innerHTML]=\"section.content\"></div>\n        </div>\n    </div>\n</div>\n\n    "

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: Arial, sans-serif;\r\n    line-height: 1.6;\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: #f4f4f4;\r\n}\r\n.about-us-container {\r\n    background-color: #fff;\r\n    margin: 20px auto;\r\n    max-width: 900px;\r\n    padding: 30px;\r\n    border-radius: 8px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n.about-us-header {\r\n    text-align: center;\r\n    color: #333;\r\n    margin-bottom: 20px;\r\n}\r\n.about-us-header h2 {\r\n    font-size: 2em;\r\n    margin-bottom: 10px;\r\n}\r\n.about-us-header p {\r\n    font-size: 1.2em;\r\n    color: #666;\r\n}\r\n.about-us-content {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n}\r\n.about-us-content img {\r\n    max-width: 45%;\r\n    border-radius: 8px;\r\n    margin-right: 20px;\r\n}\r\n.about-us-content div {\r\n    max-width: 50%;\r\n}\r\n.about-us-content h3 {\r\n    color: #333;\r\n    margin-bottom: 15px;\r\n}\r\n.about-us-content p {\r\n    color: #666;\r\n    font-size: 1.1em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG59XHJcbi5hYm91dC11cy1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4uYWJvdXQtdXMtaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uYWJvdXQtdXMtaGVhZGVyIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uYWJvdXQtdXMtaGVhZGVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG59XHJcbi5hYm91dC11cy1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmFib3V0LXVzLWNvbnRlbnQgaW1nIHtcclxuICAgIG1heC13aWR0aDogNDUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5hYm91dC11cy1jb250ZW50IGRpdiB7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxufVxyXG4uYWJvdXQtdXMtY29udGVudCBoMyB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLmFib3V0LXVzLWNvbnRlbnQgcCB7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _lifecycle_hook_lifecycle_hook_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lifecycle-hook/lifecycle-hook.component */ "./src/app/lifecycle-hook/lifecycle-hook.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _http_request_http_request_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http-request/http-request.component */ "./src/app/http-request/http-request.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./question/question.component */ "./src/app/question/question.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tutorial/tutorial.component */ "./src/app/tutorial/tutorial.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");











const routes = [
    { path: "lifecycle-hook", component: _lifecycle_hook_lifecycle_hook_component__WEBPACK_IMPORTED_MODULE_3__["LifecycleHookComponent"] },
    { path: "http-request", component: _http_request_http_request_component__WEBPACK_IMPORTED_MODULE_5__["HttpRequestComponent"] },
    { path: 'about-us', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: "question", component: _question_question_component__WEBPACK_IMPORTED_MODULE_7__["QuestionComponent"] },
    { path: "project-idea", component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"] },
    { path: "tutorial", component: _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_9__["TutorialComponent"] },
    { path: "contact-us", component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__["ContactUsComponent"] },
    { path: "", redirectTo: "home", pathMatch: "full" },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Vishal Khalate';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_request_http_request_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http-request/http-request.component */ "./src/app/http-request/http-request.component.ts");
/* harmony import */ var _lifecycle_hook_lifecycle_hook_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lifecycle-hook/lifecycle-hook.component */ "./src/app/lifecycle-hook/lifecycle-hook.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./question/question.component */ "./src/app/question/question.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tutorial/tutorial.component */ "./src/app/tutorial/tutorial.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _http_request_http_request_component__WEBPACK_IMPORTED_MODULE_5__["HttpRequestComponent"],
            _lifecycle_hook_lifecycle_hook_component__WEBPACK_IMPORTED_MODULE_6__["LifecycleHookComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _question_question_component__WEBPACK_IMPORTED_MODULE_11__["QuestionComponent"],
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_12__["ProjectsComponent"],
            _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_13__["TutorialComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
            _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_15__["ContactUsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: Arial, sans-serif;\r\n    background-color: #f4f4f4;\r\n    padding: 20px;\r\n}\r\n.contact-container {\r\n    background-color: #fff;\r\n    padding: 30px;\r\n    border-radius: 8px;\r\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n}\r\n.contact-header {\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n}\r\n.contact-header h2 {\r\n    font-size: 2em;\r\n    color: #333;\r\n}\r\n.contact-header p {\r\n    font-size: 1.2em;\r\n    color: #666;\r\n}\r\n.contact-info {\r\n    margin-bottom: 30px;\r\n}\r\n.contact-info h4 {\r\n    margin-bottom: 10px;\r\n    font-size: 1.5em;\r\n    color: #333;\r\n}\r\n.contact-info p {\r\n    font-size: 1.1em;\r\n    color: #666;\r\n}\r\n.form-group {\r\n    margin-bottom: 20px;\r\n}\r\n.form-control {\r\n    border-radius: 5px;\r\n    border: 1px solid #ccc;\r\n    padding: 10px;\r\n}\r\n.btn-submit {\r\n    background-color: #1976d2;\r\n    color: white;\r\n    border-radius: 5px;\r\n    padding: 10px 20px;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n.btn-submit:hover {\r\n    background-color: #1565c0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6QyxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5jb250YWN0LWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5jb250YWN0LWhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5jb250YWN0LWhlYWRlciBoMiB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcbi5jb250YWN0LWhlYWRlciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBjb2xvcjogIzY2NjtcclxufVxyXG4uY29udGFjdC1pbmZvIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLmNvbnRhY3QtaW5mbyBoNCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcbi5jb250YWN0LWluZm8gcCB7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbn1cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5idG4tc3VibWl0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJ0bi1zdWJtaXQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1NjVjMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactUsComponent = class ContactUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: __webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.component.html"),
        styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")]
    })
], ContactUsComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: Arial, sans-serif;\r\n    line-height: 1.6;\r\n    margin: 20px;\r\n    color: #333;\r\n}\r\n.welcome-section {\r\n    text-align: center;\r\n    margin: 50px 0;\r\n}\r\n.welcome-section h3 {\r\n    font-size: 2em;\r\n    color: #d32f2f;\r\n}\r\n.welcome-section h4 {\r\n    font-size: 1.5em;\r\n    color: #555;\r\n}\r\n.welcome-section h5 {\r\n    font-size: 1.2em;\r\n    color: #666;\r\n}\r\n.welcome-section p {\r\n    font-size: 1em;\r\n    margin-top: 20px;\r\n    color: #444;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcbi53ZWxjb21lLXNlY3Rpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1MHB4IDA7XHJcbn1cclxuLndlbGNvbWUtc2VjdGlvbiBoMyB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiAjZDMyZjJmO1xyXG59XHJcbi53ZWxjb21lLXNlY3Rpb24gaDQge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG59XHJcbi53ZWxjb21lLXNlY3Rpb24gaDUge1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG59XHJcbi53ZWxjb21lLXNlY3Rpb24gcCB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/http-request/http-request.component.css":
/*!*********************************************************!*\
  !*** ./src/app/http-request/http-request.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: Arial, sans-serif;\r\n    line-height: 1.6;\r\n    margin: 20px;\r\n}\r\n.question-category {\r\n    margin-bottom: 20px;\r\n}\r\n.category-title {\r\n    font-size: 1.5em;\r\n    color: #d32f2f;\r\n    border-bottom: 2px solid #d32f2f;\r\n    padding-bottom: 5px;\r\n    margin-bottom: 10px;\r\n}\r\n.question-list {\r\n    margin-left: 20px;\r\n}\r\n.question-item {\r\n    margin-bottom: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHR0cC1yZXF1ZXN0L2h0dHAtcmVxdWVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaHR0cC1yZXF1ZXN0L2h0dHAtcmVxdWVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcbi5xdWVzdGlvbi1jYXRlZ29yeSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5jYXRlZ29yeS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgY29sb3I6ICNkMzJmMmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2QzMmYyZjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5xdWVzdGlvbi1saXN0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi5xdWVzdGlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/http-request/http-request.component.ts":
/*!********************************************************!*\
  !*** ./src/app/http-request/http-request.component.ts ***!
  \********************************************************/
/*! exports provided: HttpRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestComponent", function() { return HttpRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HttpRequestComponent = class HttpRequestComponent {
    constructor() { }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        console.log("ngOnChanges Called");
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HttpRequestComponent.prototype, "myValProp", void 0);
HttpRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-http-request',
        template: __webpack_require__(/*! raw-loader!./http-request.component.html */ "./node_modules/raw-loader/index.js!./src/app/http-request/http-request.component.html"),
        styles: [__webpack_require__(/*! ./http-request.component.css */ "./src/app/http-request/http-request.component.css")]
    })
], HttpRequestComponent);



/***/ }),

/***/ "./src/app/lifecycle-hook/lifecycle-hook.component.css":
/*!*************************************************************!*\
  !*** ./src/app/lifecycle-hook/lifecycle-hook.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: Arial, sans-serif;\r\n    line-height: 1.6;\r\n  }\r\n  h2, h3 {\r\n    color: #2c3e50;\r\n  }\r\n  pre {\r\n    background-color: #f4f4f4;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    overflow-x: auto;\r\n  }\r\n  code {\r\n    color: #d35400;\r\n  }\r\n  table {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n    margin-top: 20px;\r\n  }\r\n  table, th, td {\r\n    border: 1px solid #ddd;\r\n  }\r\n  th, td {\r\n    padding: 10px;\r\n    text-align: left;\r\n  }\r\n  th {\r\n    background-color: #f4f4f4;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlmZWN5Y2xlLWhvb2svbGlmZWN5Y2xlLWhvb2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvbGlmZWN5Y2xlLWhvb2svbGlmZWN5Y2xlLWhvb2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICB9XHJcbiAgaDIsIGgzIHtcclxuICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gIH1cclxuICBwcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIH1cclxuICBjb2RlIHtcclxuICAgIGNvbG9yOiAjZDM1NDAwO1xyXG4gIH1cclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICB0YWJsZSwgdGgsIHRkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG4gIHRoLCB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgdGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/lifecycle-hook/lifecycle-hook.component.ts":
/*!************************************************************!*\
  !*** ./src/app/lifecycle-hook/lifecycle-hook.component.ts ***!
  \************************************************************/
/*! exports provided: LifecycleHookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifecycleHookComponent", function() { return LifecycleHookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LifecycleHookComponent = class LifecycleHookComponent {
    constructor() {
        console.log("Constructor Called");
    }
    ngOnInit() {
        console.log("ngOnInit Called");
    }
    ngDoCheck() {
        console.log("ngDoCheck Called");
    }
    ngAfterContentInit() {
        console.log("ngAfterContentInit Called");
    }
    ngAfterContentChecked() {
        console.log("ngAfterContentChecked Called");
    }
    ngAfterViewInit() {
        console.log("ngAfterViewInit Called");
    }
    ngAfterViewChecked() {
        console.log("ngAfterViewChecked Called");
    }
    ngOnDestroy() {
        console.log("ngOnDestroy Called");
    }
};
LifecycleHookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lifecycle-hook',
        template: __webpack_require__(/*! raw-loader!./lifecycle-hook.component.html */ "./node_modules/raw-loader/index.js!./src/app/lifecycle-hook/lifecycle-hook.component.html"),
        styles: [__webpack_require__(/*! ./lifecycle-hook.component.css */ "./src/app/lifecycle-hook/lifecycle-hook.component.css")]
    })
], LifecycleHookComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " /* Navbar color and active link styling */\r\n .navbar-light .navbar-nav .nav-link {\r\n    color: #ffffff; /* White text color */\r\n}\r\n /* Hover effect for nav links */\r\n .navbar-light .navbar-nav .nav-link:hover {\r\n    color: #ffcc00; /* Yellow color on hover */\r\n    background-color: rgba(255, 255, 255, 0.1); /* Slight background change on hover */\r\n    border-radius: 5px;\r\n}\r\n /* Active link highlighting */\r\n .navbar-light .navbar-nav .nav-item.active .nav-link {\r\n    color: #ffd700; /* Gold color for active link */\r\n    font-weight: bold;\r\n}\r\n /* Disabled links styling */\r\n .navbar-light .navbar-nav .nav-link.disabled {\r\n    color: rgba(255, 255, 255, 0.5); /* Lightened color for disabled links */\r\n}\r\n /* Customize the navbar brand's color */\r\n .navbar-light .navbar-brand {\r\n    color: #ffffff;\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n}\r\n /* Navbar responsiveness for small screens */\r\n @media (max-width: 992px) {\r\n    .navbar-light .navbar-nav .nav-link {\r\n        font-size: 1.1rem; /* Slightly larger font on small screens */\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDLHlDQUF5QztDQUN6QztJQUNHLGNBQWMsRUFBRSxxQkFBcUI7QUFDekM7Q0FFQSwrQkFBK0I7Q0FDL0I7SUFDSSxjQUFjLEVBQUUsMEJBQTBCO0lBQzFDLDBDQUEwQyxFQUFFLHNDQUFzQztJQUNsRixrQkFBa0I7QUFDdEI7Q0FFQSw2QkFBNkI7Q0FDN0I7SUFDSSxjQUFjLEVBQUUsK0JBQStCO0lBQy9DLGlCQUFpQjtBQUNyQjtDQUVBLDJCQUEyQjtDQUMzQjtJQUNJLCtCQUErQixFQUFFLHVDQUF1QztBQUM1RTtDQUVBLHVDQUF1QztDQUN2QztJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0NBRUEsNENBQTRDO0NBQzVDO0lBQ0k7UUFDSSxpQkFBaUIsRUFBRSwwQ0FBMEM7SUFDakU7QUFDSiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAvKiBOYXZiYXIgY29sb3IgYW5kIGFjdGl2ZSBsaW5rIHN0eWxpbmcgKi9cclxuIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmOyAvKiBXaGl0ZSB0ZXh0IGNvbG9yICovXHJcbn1cclxuXHJcbi8qIEhvdmVyIGVmZmVjdCBmb3IgbmF2IGxpbmtzICovXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZjYzAwOyAvKiBZZWxsb3cgY29sb3Igb24gaG92ZXIgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTsgLyogU2xpZ2h0IGJhY2tncm91bmQgY2hhbmdlIG9uIGhvdmVyICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi8qIEFjdGl2ZSBsaW5rIGhpZ2hsaWdodGluZyAqL1xyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtaXRlbS5hY3RpdmUgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAjZmZkNzAwOyAvKiBHb2xkIGNvbG9yIGZvciBhY3RpdmUgbGluayAqL1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi8qIERpc2FibGVkIGxpbmtzIHN0eWxpbmcgKi9cclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsuZGlzYWJsZWQge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgLyogTGlnaHRlbmVkIGNvbG9yIGZvciBkaXNhYmxlZCBsaW5rcyAqL1xyXG59XHJcblxyXG4vKiBDdXN0b21pemUgdGhlIG5hdmJhciBicmFuZCdzIGNvbG9yICovXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1icmFuZCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi8qIE5hdmJhciByZXNwb25zaXZlbmVzcyBmb3Igc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTsgLyogU2xpZ2h0bHkgbGFyZ2VyIGZvbnQgb24gc21hbGwgc2NyZWVucyAqL1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: Arial, sans-serif;\r\n    line-height: 1.6;\r\n    margin: 20px;\r\n    color: #333;\r\n}\r\n.project-ideas {\r\n    /*max-width: 800px;*/\r\n    margin: auto;\r\n}\r\n.section-title {\r\n    font-size: 2em;\r\n    text-align: center;\r\n    color: #d32f2f;\r\n    margin-bottom: 20px;\r\n}\r\n.project-list {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n}\r\n.project-item {\r\n    margin-bottom: 15px;\r\n    padding: 15px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 8px;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n.project-item h4 {\r\n    margin: 0 0 10px;\r\n    font-size: 1.2em;\r\n    color: #555;\r\n}\r\n.project-item p {\r\n    margin: 0;\r\n    color: #666;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcbi5wcm9qZWN0LWlkZWFzIHtcclxuICAgIC8qbWF4LXdpZHRoOiA4MDBweDsqL1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNkMzJmMmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5wcm9qZWN0LWxpc3Qge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG4ucHJvamVjdC1pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuLnByb2plY3QtaXRlbSBoNCB7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG59XHJcbi5wcm9qZWN0LWl0ZW0gcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzY2NjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectsComponent = class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html"),
        styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/app/question/question.component.css":
/*!*************************************************!*\
  !*** ./src/app/question/question.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: Arial, sans-serif;\r\n    line-height: 1.6;\r\n    margin: 20px;\r\n    color: #333;\r\n}\r\n.qa-section {\r\n    /*max-width: 800px;*/\r\n    margin: auto;\r\n}\r\n.section-title {\r\n    font-size: 2em;\r\n    text-align: center;\r\n    color: #d32f2f;\r\n    margin-bottom: 20px;\r\n}\r\n.qa-item {\r\n    margin-bottom: 20px;\r\n    padding: 15px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 8px;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n.question {\r\n    font-weight: bold;\r\n    color: #555;\r\n    margin-bottom: 10px;\r\n}\r\n.answer {\r\n    color: #666;\r\n    margin-left: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbi9xdWVzdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuLnFhLXNlY3Rpb24ge1xyXG4gICAgLyptYXgtd2lkdGg6IDgwMHB4OyovXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2QzMmYyZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnFhLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4ucXVlc3Rpb24ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmFuc3dlciB7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/question/question.component.ts":
/*!************************************************!*\
  !*** ./src/app/question/question.component.ts ***!
  \************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuestionComponent = class QuestionComponent {
    constructor() { }
    ngOnInit() {
    }
};
QuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question',
        template: __webpack_require__(/*! raw-loader!./question.component.html */ "./node_modules/raw-loader/index.js!./src/app/question/question.component.html"),
        styles: [__webpack_require__(/*! ./question.component.css */ "./src/app/question/question.component.css")]
    })
], QuestionComponent);



/***/ }),

/***/ "./src/app/tutorial/tutorial.component.css":
/*!*************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: Arial, sans-serif;\r\n    line-height: 1.6;\r\n    margin: 20px;\r\n    color: #333;\r\n}\r\nheader {\r\n    text-align: center;\r\n    padding: 20px;\r\n    background-color: #f44336;\r\n    color: white;\r\n}\r\nheader h1 {\r\n    margin: 0;\r\n}\r\n.content {\r\n    /*max-width: 800px;*/\r\n    margin: auto;\r\n}\r\n.section-title {\r\n    font-size: 1.8em;\r\n    color: #d32f2f;\r\n    margin-bottom: 10px;\r\n    border-bottom: 2px solid #d32f2f;\r\n    padding-bottom: 5px;\r\n}\r\n.section-content {\r\n    margin-bottom: 20px;\r\n}\r\n.section-content h4 {\r\n    margin-top: 15px;\r\n    color: #555;\r\n}\r\n.code-block {\r\n    background-color: #f5f5f5;\r\n    border: 1px solid #ddd;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    font-family: monospace;\r\n    overflow-x: auto;\r\n}\r\n.section {\r\n    margin: 10px 0;\r\n}\r\n.section-title {\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n    transition: color 0.3s ease;\r\n}\r\n.section-title:hover {\r\n    color: #0056b3;\r\n}\r\n.arrow {\r\n    transition: -webkit-transform 0.3s ease;\r\n    transition: transform 0.3s ease;\r\n    transition: transform 0.3s ease, -webkit-transform 0.3s ease;\r\n}\r\n.rotate {\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg); /* Rotate the arrow when the content is visible */\r\n}\r\n.section-content {\r\n    padding-left: 20px;\r\n    margin-top: 10px;\r\n    font-size: 16px;\r\n    background-color: #f9f9f9;\r\n    border-left: 3px solid #007bff;\r\n    transition: max-height 0.3s ease-out;\r\n}\r\na {\r\n    color: #007bff;\r\n    text-decoration: none;\r\n}\r\na:hover {\r\n    text-decoration: underline;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHV0b3JpYWwvdHV0b3JpYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSx1Q0FBK0I7SUFBL0IsK0JBQStCO0lBQS9CLDREQUErQjtBQUNuQztBQUVBO0lBQ0ksZ0NBQXdCO1lBQXhCLHdCQUF3QixFQUFFLGlEQUFpRDtBQUMvRTtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixvQ0FBb0M7QUFDeEM7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL3R1dG9yaWFsL3R1dG9yaWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuaGVhZGVyIGgxIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4uY29udGVudCB7XHJcbiAgICAvKm1heC13aWR0aDogODAwcHg7Ki9cclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4uc2VjdGlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuOGVtO1xyXG4gICAgY29sb3I6ICNkMzJmMmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkMzJmMmY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5zZWN0aW9uLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uc2VjdGlvbi1jb250ZW50IGg0IHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBjb2xvcjogIzU1NTtcclxufVxyXG4uY29kZS1ibG9jayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG4uc2VjdGlvbiB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwNTZiMztcclxufVxyXG5cclxuLmFycm93IHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5yb3RhdGUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyAvKiBSb3RhdGUgdGhlIGFycm93IHdoZW4gdGhlIGNvbnRlbnQgaXMgdmlzaWJsZSAqL1xyXG59XHJcblxyXG4uc2VjdGlvbi1jb250ZW50IHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMDA3YmZmO1xyXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzIGVhc2Utb3V0O1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/tutorial/tutorial.component.ts":
/*!************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.ts ***!
  \************************************************/
/*! exports provided: TutorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialComponent", function() { return TutorialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TutorialComponent = class TutorialComponent {
    constructor() {
        this.sections = [
            {
                title: 'Introduction to Angular',
                description: `Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Developed and maintained by Google, it provides a powerful set of tools for creating dynamic and efficient web applications. In this section, we'll explore what Angular is, its features, and why it's widely used by developers to build modern web apps.`,
                content: `
        <h3>What is Angular?</h3>
        <p>Angular is a platform that helps you build web applications with dynamic features, all by using TypeScript and declarative HTML. Unlike traditional web development, Angular supports advanced techniques like data binding, component-based architecture, and routing, making it easier to develop complex applications.</p>
        
        <h3>Key Features of Angular</h3>
        <ul>
          <li><strong>Component-based Architecture:</strong> Angular encourages breaking the application into reusable components. This leads to better structure, maintainability, and testability of your app.</li>
          <li><strong>Data Binding:</strong> Angular provides powerful data binding mechanisms, allowing synchronization between the component's model (data) and the view (UI).</li>
          <li><strong>Directives:</strong> Directives are custom HTML tags or attributes that enhance the functionality of HTML elements.</li>
          <li><strong>Dependency Injection (DI):</strong> DI is a design pattern used by Angular to manage services and their dependencies, improving code modularity and reusability.</li>
          <li><strong>Routing:</strong> Angular supports routing, which allows users to navigate between different views or pages without reloading the page, enhancing user experience in single-page applications (SPA).</li>
          <li><strong>CLI (Command Line Interface):</strong> The Angular CLI is a powerful tool that automates tasks like project setup, testing, and deployment, making the development process more efficient.</li>
          <li><strong>RxJS:</strong> Angular uses Reactive Extensions for JavaScript (RxJS), allowing you to work with asynchronous data streams and implement reactive programming patterns.</li>
        </ul>
  
        <h3>Why Use Angular?</h3>
        <p>Angular is widely adopted by developers due to its rich feature set, which facilitates the creation of scalable, maintainable, and high-performance web applications. Some of the key reasons for using Angular include:</p>
        <ul>
          <li><strong>Fast Development:</strong> With the Angular CLI, you can quickly generate components, services, and other Angular constructs, reducing the amount of boilerplate code you need to write.</li>
          <li><strong>Strong Ecosystem:</strong> Angular has a large ecosystem with well-supported libraries and tools for every aspect of web development, from state management to form handling and HTTP requests.</li>
          <li><strong>TypeScript:</strong> Angular is built on TypeScript, which provides static typing, better tooling, and early error detection, making it easier to maintain large codebases.</li>
          <li><strong>Cross-Platform:</strong> Angular allows you to build applications that run on various platforms, including the web, mobile (using Ionic), and desktop (using Electron).</li>
          <li><strong>Community Support:</strong> Angular has a large and active community that contributes to its ecosystem and provides help via forums, blogs, and GitHub repositories.</li>
        </ul>
  
        <h3>Angular vs. Other Frontend Frameworks</h3>
        <p>Angular is often compared to other frontend frameworks like React and Vue.js. Here’s how Angular stands out:</p>
        <ul>
          <li><strong>Complete Framework:</strong> Angular is a full-fledged MVC framework that provides more out-of-the-box functionality compared to React, which focuses primarily on the view layer.</li>
          <li><strong>Opinionated Structure:</strong> Angular follows a more rigid, opinionated structure, which is beneficial for large-scale applications where consistency and maintainability are important. In contrast, React offers more flexibility but requires more setup and configuration.</li>
          <li><strong>Two-Way Data Binding:</strong> Angular offers built-in two-way data binding, while React and Vue provide one-way data binding by default. Angular’s two-way binding can be particularly useful for form-based applications.</li>
        </ul>
  
        <h3>Setting Up an Angular Application</h3>
        <p>Before you can start developing with Angular, you need to set up your development environment. Here are the basic steps to get started:</p>
        <ul>
          <li><strong>Install Node.js:</strong> Angular requires Node.js. Download and install it from <a href="https://nodejs.org" target="_blank">Node.js website</a>.</li>
          <li><strong>Install Angular CLI:</strong> After installing Node.js, you can install the Angular CLI globally by running the following command:
            <pre><code>npm install -g @angular/cli</code></pre>
          </li>
          <li><strong>Create a New Angular Project:</strong> To create a new project, run:
            <pre><code>ng new my-angular-app</code></pre>
            This will set up a new Angular project with the default configuration.
          </li>
          <li><strong>Run the Development Server:</strong> To start the application locally, navigate to the project directory and run:
            <pre><code>cd my-angular-app</code></pre>
            <pre><code>ng serve</code></pre>
            Then open your browser and go to <a href="http://localhost:4200" target="_blank">http://localhost:4200</a> to see your Angular app in action.
          </li>
        </ul>
  
        <h3>Conclusion</h3>
        <p>Angular is a comprehensive framework that provides everything you need to build large-scale, high-performance web applications. Its rich feature set, strong ecosystem, and the support of TypeScript make it a great choice for developers looking to create modern web apps. If you’re building a complex application or require a robust toolset, Angular is an excellent option to consider.</p>
      `,
                isVisible: false
            },
            {
                title: 'Understand the Project Structure',
                description: `The Angular project structure is organized in a modular way to separate concerns and improve maintainability. When you generate a new Angular project using the Angular CLI, the default directory structure is designed to be scalable and to allow you to organize your application logically. In this section, we will walk through the typical structure of an Angular project and explain the purpose of each folder and file.`,
                content: `
        <h3>Typical Angular Project Structure</h3>
        <p>When you create an Angular project, the default project structure generated by the Angular CLI looks something like this:</p>
        <pre><code>
        my-angular-app/
        ├── e2e/
        ├── node_modules/
        ├── src/
        │   ├── app/
        │   ├── assets/
        │   ├── environments/
        │   ├── index.html
        │   ├── main.ts
        │   ├── polyfills.ts
        │   └── styles.css
        ├── angular.json
        ├── package.json
        ├── tsconfig.json
        ├── tsconfig.app.json
        ├── tslint.json
        └── karma.conf.js
        </code></pre>
        
        <h3>Key Directories and Files</h3>
        
        <h4>1. e2e/</h4>
        <p>The <code>e2e</code> folder contains end-to-end testing files. These tests simulate user interactions with your app to ensure that it behaves as expected. Angular uses Protractor for E2E testing by default, but you can also configure it to use other tools if needed.</p>
        
        <h4>2. node_modules/</h4>
        <p>The <code>node_modules</code> directory contains all the dependencies and packages installed via npm (Node Package Manager). This folder is automatically created when you run the <code>npm install</code> command.</p>
        
        <h4>3. src/</h4>
        <p>The <code>src</code> folder contains the source code of your application. This is where you will spend most of your time developing the app. The key subdirectories in the <code>src</code> folder include:</p>
        
        <h5>3.1 app/</h5>
        <p>The <code>app</code> directory is where the components, services, and other Angular constructs reside. It typically contains:</p>
        <ul>
          <li><strong>app.component.ts</strong>: The root component of your application.</li>
          <li><strong>app.module.ts</strong>: The root module that imports the necessary Angular modules and declares the components and services used in the application.</li>
          <li><strong>app-routing.module.ts</strong>: The routing module that manages the navigation between views in the application.</li>
          <li>Other components, services, directives, and pipes that you generate using Angular CLI.</li>
        </ul>
        
        <h5>3.2 assets/</h5>
        <p>The <code>assets</code> directory is used for static resources like images, stylesheets, and other assets that do not require processing during the build. These files are included in the final bundle as-is.</p>
        
        <h5>3.3 environments/</h5>
        <p>The <code>environments</code> folder contains configuration files for different environments (e.g., development, production). Angular allows you to define different configurations for different build environments, which can be used for API endpoints, logging levels, etc.</p>
        
        <h5>3.4 index.html</h5>
        <p>The <code>index.html</code> file is the main HTML file of the application. It is the entry point for the Angular application and contains the <code>&lt;app-root&gt;</code> tag where the root component is bootstrapped.</p>
        
        <h5>3.5 main.ts</h5>
        <p>The <code>main.ts</code> file is the entry point for the Angular application. It bootstraps the root module (<code>AppModule</code>) and initializes the application.</p>
        
        <h5>3.6 polyfills.ts</h5>
        <p>The <code>polyfills.ts</code> file contains code to ensure compatibility with different browsers, such as adding support for features that are not natively supported (e.g., older versions of Internet Explorer).</p>
        
        <h5>3.7 styles.css</h5>
        <p>The <code>styles.css</code> file contains global styles for the application. These styles are applied to the entire app, but you can also have component-specific styles.</p>
        
        <h4>4. angular.json</h4>
        <p>The <code>angular.json</code> file contains the configuration for your Angular application, including settings for building, testing, and serving the app. It specifies details about the project's structure, the assets to include, and which Angular CLI builders to use.</p>
        
        <h4>5. package.json</h4>
        <p>The <code>package.json</code> file lists the dependencies and scripts for your Angular project. It is where npm packages are defined, and it also contains the metadata about your project such as its name, version, and description.</p>
        
        <h4>6. tsconfig.json</h4>
        <p>The <code>tsconfig.json</code> file contains the TypeScript compiler options and settings. This file defines how TypeScript code is compiled into JavaScript.</p>
        
        <h4>7. tslint.json</h4>
        <p>The <code>tslint.json</code> file contains the configuration for TSLint, which is a tool used to enforce coding standards and conventions in TypeScript code. It can help ensure consistency and maintainability of your codebase.</p>
        
        <h4>8. karma.conf.js</h4>
        <p>The <code>karma.conf.js</code> file contains the configuration for Karma, which is a test runner used by Angular. It defines how tests are executed, which browsers are used for testing, and the framework (such as Jasmine) to use for writing unit tests.</p>
        
        <h3>Conclusion</h3>
        <p>Understanding the structure of an Angular project is crucial to navigating and organizing your application. By keeping related files grouped together, Angular ensures that your app remains modular, scalable, and easy to maintain. The project structure provided by Angular CLI is designed to facilitate best practices, making it easy for developers to get started with minimal configuration.</p>
      `,
                isVisible: false
            },
            {
                title: 'Generate a New Component',
                content: `
        <p><strong>Generate a new component:</strong></p>
        <pre><code>ng generate component hello-world</code></pre>
        <p>This creates files for the new component in <code>src/app/hello-world</code>.</p>
        <h3>Use the Component</h3>
        <p>Add <code>&lt;app-hello-world&gt;&lt;/app-hello-world&gt;</code> to the <code>src/app/app.component.html</code> file.</p>
      `,
                isVisible: false
            },
            {
                title: 'Angular Data Binding',
                description: `Angular Data Binding is a mechanism for coordinating the interaction between the component's model (data) and its view (UI). Angular provides multiple ways to bind data, including one-way binding and two-way binding.`,
                content: `
        <p>Here’s a breakdown of the different types of data binding in Angular:</p>
  
        <h4>1. Interpolation (One-Way Data Binding)</h4>
        <p>Interpolation binds a component's data to the view by embedding the data within the HTML. It is used for inserting dynamic content into the template.</p>
        <pre><code>&lt;h1&gt;{{ title }}&lt;/h1&gt;</code></pre>
        <p><strong>Explanation:</strong> The title property in the component class will be displayed within the &lt;h1&gt; tag. If title changes in the component, the view will update automatically.</p>
        <pre><code>export class AppComponent {
    title = 'Welcome to Angular!';
  }</code></pre>
  
        <h4>2. Property Binding (One-Way Data Binding)</h4>
        <p>Property binding allows you to bind an HTML element property to a value in the component.</p>
        <pre><code>&lt;img [src]="imageUrl" alt="Angular Logo"&gt;</code></pre>
        <p><strong>Explanation:</strong> The src property of the &lt;img&gt; tag will be bound to the imageUrl property in the component. If the imageUrl changes, the src will update automatically.</p>
        <pre><code>export class AppComponent {
    imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  }</code></pre>
  
        <h4>3. Event Binding (One-Way Data Binding)</h4>
        <p>Event binding allows you to listen to events (e.g., click, mouseover) and respond to them by calling methods in your component.</p>
        <pre><code>&lt;button (click)="onClick()"&gt;Click Me&lt;/button&gt;</code></pre>
        <p><strong>Explanation:</strong> When the button is clicked, the onClick() method is executed.</p>
        <pre><code>export class AppComponent {
    onClick() {
      alert('Button clicked!');
    }
  }</code></pre>
  
        <h4>4. Two-Way Data Binding</h4>
        <p>Two-way data binding combines property binding and event binding. It allows you to bind a property in the component to an input field and vice versa. Changes to the input field will update the component property, and changes to the component property will update the input field.</p>
        <pre><code>&lt;input [(ngModel)]="name" placeholder="Enter your name"&gt;</code></pre>
        <p><strong>Explanation:</strong> The name property in the component is bound to the input field. If you type in the input field, the value of name will automatically update. Similarly, if name changes in the component, the input field will reflect the new value.</p>
        <pre><code>import { Component } from '@angular/core';
  
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    name: string = '';
  }</code></pre>
        <p><strong>Note:</strong> You need to import the FormsModule to use ngModel for two-way binding.</p>
        <pre><code>import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { FormsModule } from '@angular/forms'; // Import FormsModule
  
  import { AppComponent } from './app.component';
  
  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule], // Include FormsModule here
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule {}</code></pre>
  
        <h4>5. Class Binding (One-Way Data Binding)</h4>
        <p>Class binding allows you to set the CSS class of an element dynamically, based on the component's data.</p>
        <pre><code>&lt;div [class.active]="isActive"&gt;This div is active&lt;/div&gt;</code></pre>
        <p><strong>Explanation:</strong> If isActive is true, the active class will be added to the div. If isActive is false, the active class will be removed.</p>
        <pre><code>export class AppComponent {
    isActive = true;  // Set this value to true or false
  }</code></pre>
  
        <h4>6. Style Binding (One-Way Data Binding)</h4>
        <p>Style binding allows you to bind inline styles dynamically based on the component’s data.</p>
        <pre><code>&lt;div [style.background-color]="isRed ? 'red' : 'green'"&gt;This div has dynamic background color&lt;/div&gt;</code></pre>
        <p><strong>Explanation:</strong> If isRed is true, the background color will be red. If isRed is false, the background color will be green.</p>
        <pre><code>export class AppComponent {
    isRed = true;
  }</code></pre>
  
        <h4>Summary of Data Binding Types:</h4>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Binding Type</th>
              <th>Syntax</th>
              <th>Direction</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Interpolation</td>
              <td>{{ expression }}</td>
              <td>One-way</td>
              <td>Inserts data into the HTML template.</td>
            </tr>
            <tr>
              <td>Property Binding</td>
              <td>[property]="expression"</td>
              <td>One-way</td>
              <td>Binds an element’s property to a component property.</td>
            </tr>
            <tr>
              <td>Event Binding</td>
              <td>(event)="method()"</td>
              <td>One-way</td>
              <td>Listens for events and calls a method in the component.</td>
            </tr>
            <tr>
              <td>Two-Way Binding</td>
              <td>[(ngModel)]="property"</td>
              <td>Both-way</td>
              <td>Binds a property in the component to an input field.</td>
            </tr>
            <tr>
              <td>Class Binding</td>
              <td>[class.className]="condition"</td>
              <td>One-way</td>
              <td>Dynamically adds/removes CSS classes.</td>
            </tr>
            <tr>
              <td>Style Binding</td>
              <td>[style.property]="expression"</td>
              <td>One-way</td>
              <td>Dynamically sets inline styles.</td>
            </tr>
          </tbody>
        </table>
  
        <h4>When to Use Which Binding:</h4>
        <ul>
          <li><strong>Use interpolation</strong> when you need to display data.</li>
          <li><strong>Use property binding</strong> for binding values to element properties like src, href, disabled, etc.</li>
          <li><strong>Use event binding</strong> when you need to respond to user actions like clicks, mouse events, or keyboard events.</li>
          <li><strong>Use two-way binding</strong> for forms or input fields where the component data needs to be updated when the user inputs data and vice versa.</li>
          <li><strong>Use class and style bindings</strong> when you need to dynamically add/remove CSS classes or styles based on component properties.</li>
        </ul>
  
        <h4>Conclusion:</h4>
        <p>Data binding in Angular provides a powerful way to ensure that your view and model are synchronized, reducing the need for manual DOM manipulation.</p>
      `,
                isVisible: false
            },
            {
                title: 'Understand Services in Angular',
                description: `In Angular, services are classes that handle data logic, business logic, or external communications. Services are used to encapsulate data manipulation, HTTP requests, and other functionality that can be shared across multiple components. Services are typically injected into components, other services, or directives to provide a consistent way of interacting with data.`,
                content: `
        <h3>What is a Service?</h3>
        <p>A service is a class that is responsible for providing functionality and data that can be used across multiple components. Services are ideal for tasks like handling HTTP requests, data management, or performing operations that are shared by multiple parts of the application.</p>
        
        <h3>Creating a Service</h3>
        <p>In Angular, you can create a service using the Angular CLI. For example, to create a service called <code>DataService</code>, you would run the following command:</p>
        <pre><code>ng generate service data</code></pre>
        <p>This will create a new service file called <code>data.service.ts</code> in the <code>src/app</code> directory. The service will look like this:</p>
        
        <h4>Example: DataService</h4>
        <pre><code>
  import { Injectable } from '@angular/core';
  
  @Injectable({
    providedIn: 'root', // Service is available throughout the app
  })
  export class DataService {
    constructor() { }
  
    getData() {
      return ['Item 1', 'Item 2', 'Item 3'];
    }
  }
        </code></pre>
        <p>The <code>@Injectable</code> decorator marks the class as a service that can be injected into other components or services. The <code>providedIn: 'root'</code> part tells Angular to create a single instance of the service that can be shared throughout the entire application.</p>
        
        <h3>Injecting a Service into a Component</h3>
        <p>Once the service is created, you can inject it into a component by adding it to the component's constructor. Here's how you inject the <code>DataService</code> into a component:</p>
        
        <h4>Example: Injecting DataService in a Component</h4>
        <pre><code>
  import { Component, OnInit } from '@angular/core';
  import { DataService } from './data.service'; // Import the service
  
  @Component({
    selector: 'app-hello-world',
    templateUrl: './hello-world.component.html',
    styleUrls: ['./hello-world.component.css']
  })
  export class HelloWorldComponent implements OnInit {
    items: string[] = [];
  
    // Inject the service into the constructor
    constructor(private dataService: DataService) { }
  
    ngOnInit() {
      this.items = this.dataService.getData(); // Call the service method
    }
  }
        </code></pre>
        <p>The service is injected using the constructor, and once injected, its methods can be accessed within the component's logic. In this case, the <code>getData()</code> method is called to populate the <code>items</code> array.</p>
        
        <h3>Using Services for HTTP Requests</h3>
        <p>Services are commonly used to handle HTTP requests in Angular. You can use the Angular <code>HttpClient</code> module to make HTTP requests to external APIs and services.</p>
        
        <h4>Example: Making an HTTP Request</h4>
        <p>First, import the <code>HttpClient</code> module in your service:</p>
        <pre><code>
  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http'; // Import HttpClient
  
  @Injectable({
    providedIn: 'root',
  })
  export class DataService {
    constructor(private http: HttpClient) { }
  
    getItems() {
      return this.http.get('https://api.example.com/items'); // Make an HTTP GET request
    }
  }
        </code></pre>
        <p>In this example, the service makes an HTTP GET request to the URL <code>https://api.example.com/items</code> and returns the data to the component that calls it.</p>
        
        <h3>Providing Services</h3>
        <p>Services can be provided in various ways. The most common way is to provide a service at the root level, which makes it available throughout the application. You can also provide services in specific modules or components to limit their scope.</p>
        
        <h4>Providing a Service at the Root Level</h4>
        <p>When you use the <code>providedIn: 'root'</code> option, Angular provides the service at the root level, making it a singleton that can be injected throughout the app:</p>
        <pre><code>
  @Injectable({
    providedIn: 'root',
  })
  export class DataService { ... }
        </code></pre>
        
        <h4>Providing a Service in a Module</h4>
        <p>You can also provide services at the module level by adding them to the <code>providers</code> array in a module's metadata:</p>
        <pre><code>
  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: [DataService], // Provide the service at the module level
    bootstrap: [AppComponent]
  })
  export class AppModule { }
        </code></pre>
        
        <h3>Conclusion</h3>
        <p>Angular services are a powerful tool for handling business logic and data management in your application. By creating services and injecting them into your components, you can separate concerns and improve maintainability. Services can also be used to make HTTP requests, store application state, or share data between multiple components.</p>
      `,
                isVisible: false
            },
            {
                title: 'Understand Angular Routing',
                description: `Angular routing is a powerful feature that allows navigation between different views or components in a single-page application (SPA). Routing in Angular helps to define the URL paths and link them to the specific components that should be displayed when the user navigates to those paths.`,
                content: `
        <h3>What is Angular Routing?</h3>
        <p>Angular Routing enables navigation from one view to another view, allowing the application to be dynamic and interactive. Routing is used to change views based on the URL. When a user clicks on a link or enters a URL, Angular updates the view without reloading the entire page.</p>
  
        <h3>Setting up Angular Routing</h3>
        <p>To enable routing in Angular, follow these steps:</p>
        <ol>
          <li>First, create a routing module (if it's not already available).</li>
          <li>Define routes in the routing module using the <code>Routes</code> array.</li>
          <li>Configure your <code>app-routing.module.ts</code> to handle routing in the application.</li>
          <li>Use <code>router-outlet</code> in your component to load the routed views.</li>
        </ol>
  
        <h3>Step 1: Create the Routing Module</h3>
        <p>Angular provides an easy way to create a routing module using the CLI:</p>
        <pre><code>ng generate module app-routing --flat --module=app</code></pre>
        <p>This will create an <code>app-routing.module.ts</code> file that contains the routing logic for the application. You need to import the <code>RouterModule</code> and <code>Routes</code> from <code>@angular/router</code>.</p>
        
        <h4>Example: app-routing.module.ts</h4>
        <pre><code>
  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { HomeComponent } from './home/home.component';
  import { AboutComponent } from './about/about.component';
  
  const routes: Routes = [
    { path: '', component: HomeComponent },  // Default route
    { path: 'about', component: AboutComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
        </code></pre>
        <p>Here, we've defined two routes:
          <ul>
            <li><code>''</code>: Default route that loads the <code>HomeComponent</code>.</li>
            <li><code>'about'</code>: A route that loads the <code>AboutComponent</code>.</li>
          </ul>
        </p>
  
        <h3>Step 2: Use Router Outlet in app.component.html</h3>
        <p>Next, you need to add the <code>router-outlet</code> directive in the template of your main component (usually <code>app.component.html</code>). This will be the placeholder where the routed components will be displayed:</p>
        <pre><code>&lt;router-outlet&gt;&lt;/router-outlet&gt;</code></pre>
  
        <h3>Step 3: Navigating to Routes</h3>
        <p>Once the routes are defined and the outlet is set, you can use Angular's <code>routerLink</code> directive to navigate between routes. You can apply <code>routerLink</code> to any element, like a <code>div</code>, <code>button</code>, or <code>a</code> tag, to link to the route:</p>
  
        <h4>Example: Using routerLink</h4>
        <pre><code>
  &lt;a routerLink="/about"&gt;Go to About Page&lt;/a&gt;
        </code></pre>
        <p>When this link is clicked, it will navigate to the <code>AboutComponent</code> that we defined in our routes.</p>
  
        <h3>Step 4: Programmatic Navigation</h3>
        <p>You can also navigate programmatically using Angular's <code>Router</code> service. This is useful for navigation triggered by logic or events, like after a form submission.</p>
        
        <h4>Example: Programmatic Navigation</h4>
        <pre><code>
  import { Component } from '@angular/core';
  import { Router } from '@angular/router';
  
  @Component({
    selector: 'app-home',
    template: '&lt;button (click)="goToAbout()"&gt;Go to About&lt;/button&gt;'
  })
  export class HomeComponent {
  
    constructor(private router: Router) { }
  
    goToAbout() {
      this.router.navigate(['/about']);
    }
  }
        </code></pre>
        <p>In this example, clicking the button will programmatically navigate to the <code>AboutComponent</code> using the <code>router.navigate()</code> method.</p>
  
        <h3>Step 5: Route Parameters</h3>
        <p>Routes can also accept parameters. These parameters can be accessed by the component associated with the route. The syntax for defining routes with parameters is as follows:</p>
        
        <h4>Example: Route with Parameters</h4>
        <pre><code>
  const routes: Routes = [
    { path: 'user/:id', component: UserComponent }
  ];
        </code></pre>
        <p>The <code>:id</code> is a route parameter. You can access this parameter in the component using Angular's <code>ActivatedRoute</code> service:</p>
  
        <h4>Example: Accessing Route Parameters</h4>
        <pre><code>
  import { ActivatedRoute } from '@angular/router';
  
  @Component({
    selector: 'app-user',
    template: '&lt;p&gt;User ID: {{ userId }}&lt;/p&gt;'
  })
  export class UserComponent implements OnInit {
    userId: string;
  
    constructor(private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.userId = this.route.snapshot.paramMap.get('id');
    }
  }
        </code></pre>
        <p>Here, the component retrieves the <code>id</code> parameter from the URL using the <code>ActivatedRoute</code> service's <code>snapshot.paramMap.get('id')</code>.</p>
  
        <h3>Conclusion</h3>
        <p>Angular Routing is a vital feature for building single-page applications with navigation capabilities. By setting up routing, defining routes, using the <code>router-outlet</code>, and navigating programmatically or via <code>routerLink</code>, you can easily manage the flow of your Angular application. Understanding and mastering Angular routing helps in building dynamic, user-friendly SPAs.</p>
      `,
                isVisible: false
            },
            {
                title: 'Angular Directives',
                description: `Directives are a powerful feature in Angular that allows you to extend the functionality of HTML elements. They can modify the behavior or appearance of elements in the DOM (Document Object Model). Angular provides built-in directives, such as structural directives (e.g., *ngIf, *ngFor) and attribute directives (e.g., ngClass, ngStyle), and you can also create custom directives to suit your needs.`,
                content: `
        <h3>What Are Directives?</h3>
        <p>In Angular, directives are classes that add or modify the behavior of HTML elements. They are markers on the DOM that tell Angular to do something special with that element.</p>
  
        <h3>Types of Directives in Angular</h3>
        <p>There are three types of directives in Angular:</p>
        <ul>
          <li><strong>Component Directives</strong>: These are directives that create and control a component. Every component in Angular is a directive with a template.</li>
          <li><strong>Structural Directives</strong>: These modify the DOM layout by adding or removing elements based on conditions. Examples: <code>*ngIf</code>, <code>*ngFor</code>.</li>
          <li><strong>Attribute Directives</strong>: These modify the appearance or behavior of an element, component, or another directive. Examples: <code>ngClass</code>, <code>ngStyle</code>.</li>
        </ul>
  
        <h3>1. Structural Directives</h3>
        <p>Structural directives alter the DOM layout by adding or removing elements. They are prefixed with an asterisk (<code>*</code>) when used in the template.</p>
  
        <h4>Example: *ngIf</h4>
        <p>The <code>*ngIf</code> directive conditionally includes or removes an element from the DOM based on a boolean expression.</p>
        <pre><code>
  <div *ngIf="isVisible">This content is visible when isVisible is true.</div>
        </code></pre>
        <p>Here, the <code>div</code> element will only be rendered if the <code>isVisible</code> expression evaluates to <code>true</code>.</p>
  
        <h4>Example: *ngFor</h4>
        <p>The <code>*ngFor</code> directive is used to repeat a block of HTML for each item in a list.</p>
        <pre><code>
  <ul>
    <li *ngFor="let item of items">{{ item }}</li>
  </ul>
        </code></pre>
        <p>In this example, <code>*ngFor</code> iterates over the <code>items</code> array and renders each item as a list item (<code>li</code>) in the unordered list.</p>
  
        <h3>2. Attribute Directives</h3>
        <p>Attribute directives modify the behavior or appearance of an element. These directives can be applied to an element, component, or another directive.</p>
  
        <h4>Example: ngClass</h4>
        <p>The <code>ngClass</code> directive is used to dynamically add or remove CSS classes from an element based on an expression.</p>
        <pre><code>
  <div [ngClass]="{'active': isActive}">This div will have 'active' class when isActive is true.</div>
        </code></pre>
        <p>If the value of <code>isActive</code> is <code>true</code>, the <code>active</code> class will be applied to the <code>div</code> element.</p>
  
        <h4>Example: ngStyle</h4>
        <p>The <code>ngStyle</code> directive allows you to dynamically set the inline styles of an element based on an expression.</p>
        <pre><code>
  <div [ngStyle]="{'background-color': isRed ? 'red' : 'green'}">
    This div will have a dynamic background color.
  </div>
        </code></pre>
        <p>In this example, if <code>isRed</code> is <code>true</code>, the background color will be red, otherwise, it will be green.</p>
  
        <h3>3. Custom Directives</h3>
        <p>Angular also allows you to create your own custom directives. You can create attribute or structural directives based on your requirements.</p>
  
        <h4>Example: Custom Attribute Directive</h4>
        <p>Here’s an example of how to create a custom attribute directive that changes the background color of an element when the mouse hovers over it.</p>
        <pre><code>
  import { Directive, ElementRef, HostListener } from '@angular/core';
  
  @Directive({
    selector: '[appHover]'
  })
  export class HoverDirective {
  
    constructor(private el: ElementRef) {}
  
    @HostListener('mouseenter') onMouseEnter() {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    }
  
    @HostListener('mouseleave') onMouseLeave() {
      this.el.nativeElement.style.backgroundColor = '';
    }
  }
        </code></pre>
        <p>This directive listens for the <code>mouseenter</code> and <code>mouseleave</code> events on the element, and when these events occur, it changes the background color of the element.</p>
  
        <h3>4. Using Directives in Templates</h3>
        <p>To use a directive in a template, simply apply it to an element or component as an attribute. Structural directives, like <code>*ngIf</code> and <code>*ngFor</code>, are prefixed with an asterisk (<code>*</code>) when used in the template. For attribute directives like <code>ngClass</code> and <code>ngStyle</code>, you use the square brackets (<code>[]</code>) for property binding.</p>
  
        <h4>Summary of Common Directives</h4>
        <table class="table table-hover">
          <tr>
            <th>Directive</th>
            <th>Type</th>
            <th>Usage</th>
          </tr>
          <tr>
            <td>*ngIf</td>
            <td>Structural</td>
            <td>Conditionally includes or removes an element from the DOM.</td>
          </tr>
          <tr>
            <td>*ngFor</td>
            <td>Structural</td>
            <td>Repeats an element for each item in a list.</td>
          </tr>
          <tr>
            <td>ngClass</td>
            <td>Attribute</td>
            <td>Dynamically adds/removes CSS classes from an element.</td>
          </tr>
          <tr>
            <td>ngStyle</td>
            <td>Attribute</td>
            <td>Dynamically sets inline styles of an element.</td>
          </tr>
        </table>
  
        <h3>Conclusion</h3>
        <p>Directives in Angular are an essential tool for manipulating the DOM and controlling the behavior and appearance of elements. By understanding and using structural and attribute directives, you can create dynamic and interactive user interfaces. Additionally, you can extend Angular’s functionality by creating your own custom directives tailored to your specific needs.</p>
      `,
                isVisible: false
            },
            {
                title: 'Forms in Angular',
                description: `Forms in Angular are used to capture and manage user input. Angular provides two types of forms: Template-driven forms and Reactive forms. Template-driven forms are simpler and easier to use, while reactive forms provide more control and flexibility, making them suitable for complex form scenarios.`,
                content: `
        <h3>Introduction to Forms in Angular</h3>
        <p>Forms allow users to input data that can be processed in your Angular application. Angular provides two types of forms:</p>
        <ul>
          <li><strong>Template-driven Forms</strong>: These are simple to use and typically used for smaller forms. They are driven by the template and use directives like <code>ngModel</code> to bind the form controls.</li>
          <li><strong>Reactive Forms</strong>: These are more powerful and flexible, allowing you to build forms using a model in the component class. They are better suited for complex forms with dynamic validation, or when you need to manage form state programmatically.</li>
        </ul>
  
        <h3>Template-driven Forms</h3>
        <p>Template-driven forms are simple to use and work well for basic forms. In these forms, Angular manages the state of the form in the template, and the form elements are bound using the <code>ngModel</code> directive.</p>
        
        <h4>Setting Up Template-driven Forms</h4>
        <p>To use template-driven forms, you need to import the <code>FormsModule</code> in your application module.</p>
        <pre><code>
  import { FormsModule } from '@angular/forms';
  
  @NgModule({
    imports: [FormsModule]
  })
  export class AppModule { }
        </code></pre>
        
        <h4>Basic Example of a Template-driven Form</h4>
        <p>Here is a simple example of a template-driven form:</p>
        <pre><code>
  <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" [(ngModel)]="user.name" required>
  
    <button type="submit" [disabled]="!myForm.valid">Submit</button>
  </form>
        </code></pre>
        <p>In this example, the <code>ngModel</code> directive is used for two-way data binding between the input field and the component property <code>user.name</code>. The form is submitted using the <code>ngSubmit</code> event, and the form is disabled if it's invalid.</p>
  
        <h3>Reactive Forms</h3>
        <p>Reactive forms provide more flexibility and are ideal for complex forms with dynamic validation or multiple form groups. In reactive forms, you define the form model in the component class and bind it to the template.</p>
  
        <h4>Setting Up Reactive Forms</h4>
        <p>To use reactive forms, you need to import the <code>ReactiveFormsModule</code> in your application module.</p>
        <pre><code>
  import { ReactiveFormsModule } from '@angular/forms';
  
  @NgModule({
    imports: [ReactiveFormsModule]
  })
  export class AppModule { }
        </code></pre>
  
        <h4>Basic Example of a Reactive Form</h4>
        <p>Here is an example of a reactive form:</p>
        <pre><code>
  import { Component } from '@angular/core';
  import { FormGroup, FormBuilder, Validators } from '@angular/forms';
  
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    loginForm: FormGroup;
  
    constructor(private fb: FormBuilder) {
      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
    }
  
    onSubmit() {
      if (this.loginForm.valid) {
        console.log(this.loginForm.value);
      }
    }
  }
        </code></pre>
        <p>In this example, we define a <code>FormGroup</code> with two form controls: <code>username</code> and <code>password</code>. The form is created using the <code>FormBuilder</code> service, and validation is added using the <code>Validators</code> class. The form is submitted using the <code>onSubmit()</code> method, and we log the form values if the form is valid.</p>
  
        <h3>Form Validation</h3>
        <p>Angular provides powerful tools for form validation in both template-driven and reactive forms. Validation can be applied both in the template and in the component class. Common validation strategies include required fields, minimum/maximum length, email format, and custom validators.</p>
        
        <h4>Example: Required Validation</h4>
        <p>For template-driven forms, you can use the <code>required</code> attribute to make a field mandatory.</p>
        <pre><code>
  <input type="text" name="name" [(ngModel)]="user.name" required>
        </code></pre>
  
        <h4>Example: Reactive Form Validation</h4>
        <p>In a reactive form, you can add validation to a form control like this:</p>
        <pre><code>
  this.loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
        </code></pre>
  
        <h3>Handling Form Submission</h3>
        <p>When the user submits a form, Angular provides an event handler to manage the submission process. For template-driven forms, this is handled with the <code>(ngSubmit)</code> event. For reactive forms, the form submission is handled programmatically using the <code>onSubmit()</code> method.</p>
  
        <h4>Example: Handling Form Submission in Template-driven Form</h4>
        <pre><code>
  <form (ngSubmit)="onSubmit(myForm)">
    <!-- Form Fields -->
  </form>
        </code></pre>
        <p>In this example, when the form is submitted, the <code>onSubmit</code> method is triggered.</p>
  
        <h4>Example: Handling Form Submission in Reactive Form</h4>
        <pre><code>
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
        </code></pre>
  
        <h3>Summary of Form Types</h3>
        <table class="table table-hover">
          <tr>
            <th>Form Type</th>
            <th>Usage</th>
          </tr>
          <tr>
            <td>Template-driven Forms</td>
            <td>Best for simple forms. Uses ngModel for two-way data binding.</td>
          </tr>
          <tr>
            <td>Reactive Forms</td>
            <td>Best for complex forms. Uses FormGroup and FormControl for explicit form management and validation.</td>
          </tr>
        </table>
  
        <h3>Conclusion</h3>
        <p>Angular forms provide a powerful and flexible way to capture and validate user input. Template-driven forms are simpler and easier to implement, while reactive forms provide more control and are ideal for complex use cases. By understanding the differences and features of both types, you can choose the right approach for your Angular application’s form management needs.</p>
      `,
                isVisible: false
            },
            {
                title: 'HTTP Client in Angular',
                description: `Angular's HTTP Client module allows you to make HTTP requests to communicate with a server or external API. It provides a simplified API for making various types of HTTP requests, handling responses, and working with HTTP observables.`,
                content: `
        <h3>Introduction to HTTP Client</h3>
        <p>The Angular HTTP client module is part of the @angular/common/http package and allows you to perform HTTP operations such as GET, POST, PUT, DELETE, and more. It makes working with external data sources in your Angular app easier and more efficient by returning observables that you can subscribe to.</p>
        
        <h3>Setting Up the HTTP Client</h3>
        <p>To use the HTTP client in your Angular application, you need to import the <code>HttpClientModule</code> into your app's root module (<code>AppModule</code>).</p>
        <pre><code>
  import { HttpClientModule } from '@angular/common/http';
  
  @NgModule({
    imports: [HttpClientModule]
  })
  export class AppModule { }
        </code></pre>
        <p>Once you’ve imported <code>HttpClientModule</code>, you can inject the <code>HttpClient</code> service into your components or services to make HTTP requests.</p>
  
        <h3>Basic HTTP Operations</h3>
        <p>Angular provides various methods for performing HTTP operations such as <code>GET</code>, <code>POST</code>, <code>PUT</code>, and <code>DELETE</code>. Below are examples of these operations:</p>
        
        <h4>1. Making a GET Request</h4>
        <p>The <code>GET</code> method is used to fetch data from a server. The data is returned as an observable that you can subscribe to.</p>
        <pre><code>
  import { HttpClient } from '@angular/common/http';
  import { Component, OnInit } from '@angular/core';
  
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent implements OnInit {
    data: any;
  
    constructor(private http: HttpClient) {}
  
    ngOnInit() {
      this.http.get('https://api.example.com/data').subscribe(response => {
        this.data = response;
      });
    }
  }
        </code></pre>
        <p>This example fetches data from a REST API using the <code>get()</code> method of <code>HttpClient</code> and assigns the result to the <code>data</code> property in the component.</p>
  
        <h4>2. Making a POST Request</h4>
        <p>The <code>POST</code> method is used to send data to a server. You can include a request body in the request.</p>
        <pre><code>
  this.http.post('https://api.example.com/data', { key: 'value' }).subscribe(response => {
    console.log(response);
  });
        </code></pre>
        <p>This example sends a POST request to the server with a JSON payload. The response is logged to the console.</p>
  
        <h4>3. Making a PUT Request</h4>
        <p>The <code>PUT</code> method is used to update existing data on the server.</p>
        <pre><code>
  this.http.put('https://api.example.com/data/1', { key: 'newValue' }).subscribe(response => {
    console.log(response);
  });
        </code></pre>
        <p>This example updates the data with ID 1 on the server with the new value.</p>
  
        <h4>4. Making a DELETE Request</h4>
        <p>The <code>DELETE</code> method is used to delete data from the server.</p>
        <pre><code>
  this.http.delete('https://api.example.com/data/1').subscribe(response => {
    console.log('Data deleted');
  });
        </code></pre>
        <p>This example sends a DELETE request to the server to remove the data with ID 1.</p>
  
        <h3>Handling HTTP Responses</h3>
        <p>HTTP responses are typically handled using observables. You can subscribe to the observable and process the response inside the <code>subscribe()</code> callback.</p>
        
        <h4>Handling Errors</h4>
        <p>To handle errors in HTTP requests, Angular provides an <code>error</code> callback in the <code>subscribe()</code> method or you can use the <code>catchError</code> operator in an observable chain.</p>
        <pre><code>
  import { catchError } from 'rxjs/operators';
  import { of } from 'rxjs';
  
  this.http.get('https://api.example.com/data')
    .pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return of([]);
      })
    )
    .subscribe(response => {
      this.data = response;
    });
        </code></pre>
        <p>This example catches any errors from the <code>get()</code> request and returns an empty array if an error occurs, preventing the application from crashing.</p>
  
        <h3>Using HTTP Headers</h3>
        <p>You can also customize the HTTP request by adding headers. To do this, you need to create an <code>HttpHeaders</code> object and pass it as the second argument to the HTTP request method.</p>
        <pre><code>
  import { HttpHeaders } from '@angular/common/http';
  
  const headers = new HttpHeaders().set('Authorization', 'Bearer your-token');
  this.http.get('https://api.example.com/data', { headers }).subscribe(response => {
    console.log(response);
  });
        </code></pre>
        <p>This example adds an authorization token as a header to the HTTP request.</p>
  
        <h3>Observables and Async Pipe</h3>
        <p>Angular’s HTTP client returns an observable that can be subscribed to. In the template, you can use the <code>async</code> pipe to automatically subscribe to the observable and manage the subscription.</p>
        <pre><code>
  <div *ngIf="data$ | async as data">
    <pre>{{ data | json }}</pre>
  </div>
        </code></pre>
        <p>This example binds the <code>data$</code> observable to the template and automatically handles subscription and unsubscription using the <code>async</code> pipe.</p>
  
        <h3>Summary</h3>
        <table class="table table-hover">
          <tr>
            <th>HTTP Method</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>GET</td>
            <td>Fetches data from the server</td>
          </tr>
          <tr>
            <td>POST</td>
            <td>Sends data to the server to create a resource</td>
          </tr>
          <tr>
            <td>PUT</td>
            <td>Updates existing data on the server</td>
          </tr>
          <tr>
            <td>DELETE</td>
            <td>Deletes data from the server</td>
          </tr>
        </table>
  
        <h3>Conclusion</h3>
        <p>Angular’s HTTP client is a powerful tool for making HTTP requests and handling responses in your application. It simplifies the process of fetching, sending, and updating data from external APIs, and makes working with RESTful services easier by leveraging observables.</p>
      `,
                isVisible: false
            },
            {
                title: 'Angular RxJS',
                description: `RxJS (Reactive Extensions for JavaScript) is a powerful library for reactive programming using Observables. In Angular, RxJS is used to handle asynchronous events like HTTP requests, form input, and user interactions in a more declarative and manageable way. Angular leverages RxJS to make handling asynchronous data easier and more efficient.`,
                content: `
        <h3>Introduction to RxJS</h3>
        <p>RxJS is a library that allows you to work with asynchronous data streams using Observables. Angular uses RxJS extensively to handle data streams such as HTTP requests, events, and even time-based operations. Observables are a core part of the Angular framework, making it more efficient to manage asynchronous programming.</p>
        
        <h3>Setting Up RxJS in Angular</h3>
        <p>RxJS comes pre-installed with Angular, so there's no need to install it separately. You can start using RxJS operators by importing the necessary operators from the <code>rxjs</code> package in your Angular services or components.</p>
  
        <h4>Basic Example: Observables</h4>
        <p>Here's a simple example of how you can create and subscribe to an Observable in Angular.</p>
        <pre><code>
  import { Observable } from 'rxjs';
  
  const observable = new Observable(subscriber => {
    subscriber.next('Hello');
    subscriber.next('World');
    subscriber.complete();
  });
  
  observable.subscribe({
    next(value) { console.log(value); },
    complete() { console.log('Observable completed'); }
  });
        </code></pre>
        <p>This example creates an Observable that emits two values, "Hello" and "World," and then completes. The subscriber listens to these values and prints them to the console.</p>
  
        <h3>Common RxJS Operators</h3>
        <p>RxJS provides many operators that help you transform, filter, and combine streams of data. Below are some of the most commonly used operators:</p>
  
        <h4>1. map</h4>
        <p>The <code>map</code> operator is used to transform the emitted values of an Observable.</p>
        <pre><code>
  import { map } from 'rxjs/operators';
  
  observable.pipe(
    map(value => value.toUpperCase())
  ).subscribe(value => console.log(value));
        </code></pre>
        <p>This will transform the emitted values to uppercase before subscribing to them.</p>
  
        <h4>2. filter</h4>
        <p>The <code>filter</code> operator is used to only allow values that meet certain criteria.</p>
        <pre><code>
  import { filter } from 'rxjs/operators';
  
  observable.pipe(
    filter(value => value !== 'World')
  ).subscribe(value => console.log(value));
        </code></pre>
        <p>This example filters out the value "World" from the emitted values.</p>
  
        <h4>3. mergeMap</h4>
        <p>The <code>mergeMap</code> operator is used to flatten higher-order Observables into a single stream. It allows for concurrency when dealing with multiple Observables.</p>
        <pre><code>
  import { mergeMap } from 'rxjs/operators';
  import { of } from 'rxjs';
  
  observable.pipe(
    mergeMap(value => of(value, 'New Value'))
  ).subscribe(value => console.log(value));
        </code></pre>
        <p>This example merges the values from the inner Observable into the output stream.</p>
  
        <h4>4. catchError</h4>
        <p>The <code>catchError</code> operator is used to handle errors that occur within the Observable stream.</p>
        <pre><code>
  import { catchError } from 'rxjs/operators';
  import { of } from 'rxjs';
  
  observable.pipe(
    catchError(err => {
      console.error('Error occurred:', err);
      return of('Error handled');
    })
  ).subscribe(value => console.log(value));
        </code></pre>
        <p>This example catches any error that occurs during the Observable's execution and handles it by returning a default value.</p>
  
        <h3>RxJS and Angular's HTTP Client</h3>
        <p>In Angular, RxJS is used with the HTTP Client module to handle asynchronous HTTP requests. The <code>HttpClient</code> methods return observables, and RxJS operators can be chained to these observables to transform and manage the data.</p>
  
        <h4>Example: HTTP GET Request with RxJS</h4>
        <p>Here’s an example of using RxJS with the Angular HTTP client to make an HTTP request and process the response.</p>
        <pre><code>
  import { HttpClient } from '@angular/common/http';
  import { map, catchError } from 'rxjs/operators';
  import { Injectable } from '@angular/core';
  
  @Injectable({
    providedIn: 'root'
  })
  export class DataService {
  
    constructor(private http: HttpClient) {}
  
    fetchData() {
      return this.http.get('https://api.example.com/data').pipe(
        map(response => response['data']), // Transform data
        catchError(error => {
          console.error('Error occurred:', error);
          return of([]);
        })
      );
    }
  }
        </code></pre>
        <p>In this example, an HTTP GET request is made to fetch data, and the response is transformed using the <code>map</code> operator. If an error occurs, it is caught by the <code>catchError</code> operator, and an empty array is returned.</p>
  
        <h3>Subjects in RxJS</h3>
        <p>A <code>Subject</code> in RxJS is a special type of Observable that allows values to be multicasted to many Observers. It acts both as an Observable and an Observer.</p>
  
        <h4>Example: Using Subject</h4>
        <pre><code>
  import { Subject } from 'rxjs';
  
  const subject = new Subject();
  
  subject.subscribe(value => console.log('Observer 1:', value));
  subject.subscribe(value => console.log('Observer 2:', value));
  
  subject.next('Hello');
  subject.next('World');
        </code></pre>
        <p>This example demonstrates creating a Subject and multicasting values to multiple observers.</p>
  
        <h3>Conclusion</h3>
        <p>RxJS is a powerful tool for managing asynchronous data streams in Angular. It allows you to manage events, data transformations, error handling, and concurrency in a declarative way, making it an essential part of the Angular framework. By mastering RxJS, you can enhance your Angular applications' performance and maintainability.</p>
      `,
                isVisible: false
            },
            {
                title: 'Pipes in Angular',
                description: `In Angular, Pipes are used to transform data in templates. They can be used for formatting, filtering, and transforming data before it is displayed in the view. Pipes can be used for simple tasks like formatting dates or numbers, or more complex tasks like filtering lists of items.`,
                content: `
        <h3>Introduction to Pipes</h3>
        <p>A Pipe in Angular is a simple function that can be used to transform input data to a desired output format in the view. Pipes can be applied in templates using the pipe operator (<code>|</code>). Angular provides built-in pipes, but you can also create custom pipes for specific use cases.</p>
  
        <h3>Built-in Pipes in Angular</h3>
        <p>Angular comes with several built-in pipes that are commonly used for tasks like formatting dates, numbers, and currency, or filtering lists.</p>
  
        <h4>1. Date Pipe</h4>
        <p>The <code>date</code> pipe formats a date according to the specified format.</p>
        <pre><code>
        {{ today | date:'shortDate' }}
        </code></pre>
        <p>This example will format the current date in the "shortDate" format.</p>
  
        <h4>2. Currency Pipe</h4>
        <p>The <code>currency</code> pipe formats a number as a currency value.</p>
        <pre><code>
        {{ price | currency:'USD':true }}
        </code></pre>
        <p>This example formats the value of <code>price</code> as a currency, including the currency symbol "USD".</p>
  
        <h4>3. Percent Pipe</h4>
        <p>The <code>percent</code> pipe formats a number as a percentage.</p>
        <pre><code>
        {{ percentage | percent }}
        </code></pre>
        <p>This will format the number in <code>percentage</code> as a percentage (e.g., 0.25 becomes 25%).</p>
  
        <h4>4. UpperCase and LowerCase Pipes</h4>
        <p>The <code>uppercase</code> and <code>lowercase</code> pipes convert text to uppercase or lowercase, respectively.</p>
        <pre><code>
        {{ message | uppercase }}
        </code></pre>
        <p>This will convert the <code>message</code> string to uppercase letters.</p>
  
        <h4>5. JSON Pipe</h4>
        <p>The <code>json</code> pipe formats an object or array as a JSON string for debugging purposes.</p>
        <pre><code>
        {{ data | json }}
        </code></pre>
        <p>This will output the object or array <code>data</code> as a JSON string in the template.</p>
  
        <h3>Custom Pipes in Angular</h3>
        <p>In addition to the built-in pipes, Angular allows you to create custom pipes to handle specific data transformations. Custom pipes can be created using the <code>@Pipe</code> decorator and must implement the <code>transform</code> method to define how the data should be transformed.</p>
  
        <h4>Creating a Custom Pipe</h4>
        <p>Here’s an example of how to create a custom pipe that converts text to title case.</p>
        <pre><code>
  import { Pipe, PipeTransform } from '@angular/core';
  
  @Pipe({
    name: 'titleCase'
  })
  export class TitleCasePipe implements PipeTransform {
    transform(value: string): string {
      return value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    }
  }
        </code></pre>
        <p>This custom pipe splits the input string into words, capitalizes the first letter of each word, and converts the rest of the letters to lowercase.</p>
  
        <h4>Using the Custom Pipe</h4>
        <p>You can use the custom pipe just like any other built-in pipe in your template:</p>
        <pre><code>
        {{ 'hello world' | titleCase }}
        </code></pre>
        <p>This will display "Hello World".</p>
  
        <h3>Pipe Chaining</h3>
        <p>Angular allows you to chain multiple pipes together. You can apply more than one transformation to the data in a single statement by using multiple pipes.</p>
        <pre><code>
        {{ today | date:'shortDate' | uppercase }}
        </code></pre>
        <p>This example first formats the date and then converts it to uppercase.</p>
  
        <h3>Pure and Impure Pipes</h3>
        <p>There are two types of pipes in Angular: pure and impure.</p>
  
        <h4>Pure Pipes</h4>
        <p>A pure pipe only transforms data when the input data changes. It is more efficient because Angular only calls the pipe when the input data or the parameters to the pipe change.</p>
  
        <h4>Impure Pipes</h4>
        <p>An impure pipe runs on every change detection cycle, regardless of whether the input data changes. This can be useful when the transformation relies on a value that changes frequently, such as a random number.</p>
        <p>To create an impure pipe, set the <code>pure</code> property of the <code>@Pipe</code> decorator to <code>false</code>.</p>
        <pre><code>
  @Pipe({
    name: 'random',
    pure: false
  })
  export class RandomPipe implements PipeTransform {
    transform(value: any): any {
      return Math.random();
    }
  }
        </code></pre>
        
        <h3>Conclusion</h3>
        <p>Pipes are a powerful tool in Angular for transforming data in the view. They allow you to format data, filter lists, and perform various transformations without modifying the underlying data. Angular comes with several built-in pipes, and you can easily create custom pipes for your specific needs. Pipes can be chained, and understanding the difference between pure and impure pipes will help you write more efficient applications.</p>
      `,
                isVisible: false
            },
            {
                title: 'ng-container in Angular',
                description: `The <code>ng-container</code> directive in Angular is a non-rendering container that can group elements without adding extra nodes to the DOM. It allows you to apply structural directives like <code>*ngIf</code>, <code>*ngFor</code>, and others to a group of elements without creating additional wrapper elements in the DOM.`,
                content: `
        <h3>Introduction to ng-container</h3>
        <p>The <code>ng-container</code> is a logical container that does not create any additional DOM elements. It can be useful when you need to apply a structural directive to multiple elements or components without introducing unnecessary wrapper elements like <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>.</p>
        
        <h3>Use Cases for ng-container</h3>
        <p>Here are some common scenarios where you might use <code>ng-container</code>:</p>
        <ul>
          <li>When using structural directives like <code>*ngIf</code>, <code>*ngFor</code>, or <code>*ngSwitch</code> on multiple elements.</li>
          <li>When you want to conditionally render a group of elements without adding extra wrapper elements to the DOM.</li>
          <li>For grouping elements without affecting layout or styling.</li>
        </ul>
  
        <h3>Basic Example of ng-container</h3>
        <p>Without <code>ng-container</code>, you might need to wrap elements with a <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> when applying structural directives:</p>
        <pre><code>
        <div *ngIf="isVisible">
          <p>Element 1</p>
          <p>Element 2</p>
        </div>
        </code></pre>
        <p>However, this introduces unnecessary HTML elements like <code>&lt;div&gt;</code> around the content. Using <code>ng-container</code> avoids this:</p>
        <pre><code>
        <ng-container *ngIf="isVisible">
          <p>Element 1</p>
          <p>Element 2</p>
        </ng-container>
        </code></pre>
        <p>In this example, <code>ng-container</code> doesn't add any extra wrapper around the <code>&lt;p&gt;</code> elements in the DOM.</p>
  
        <h3>ng-container with *ngFor</h3>
        <p>Another common use case for <code>ng-container</code> is when using <code>*ngFor</code> to loop over an array of items. Here is an example:</p>
        <pre><code>
        <ng-container *ngFor="let item of items">
          <div>{{ item.name }}</div>
          <span>{{ item.description }}</span>
        </ng-container>
        </code></pre>
        <p>In this case, <code>ng-container</code> wraps the elements inside the loop without adding additional DOM elements for each iteration.</p>
  
        <h3>ng-container with *ngIf and *ngFor</h3>
        <p>You can also combine multiple structural directives like <code>*ngIf</code> and <code>*ngFor</code> with <code>ng-container</code>. However, remember that you cannot apply two structural directives to the same element, so <code>ng-container</code> is useful to combine them:</p>
        <pre><code>
        <ng-container *ngIf="isVisible">
          <ng-container *ngFor="let item of items">
            <div>{{ item.name }}</div>
            <span>{{ item.description }}</span>
          </ng-container>
        </ng-container>
        </code></pre>
        <p>In this example, the <code>*ngIf</code> and <code>*ngFor</code> directives are applied without adding extra wrapper elements to the DOM.</p>
  
        <h3>Benefits of Using ng-container</h3>
        <p>The main benefits of using <code>ng-container</code> include:</p>
        <ul>
          <li><strong>No additional DOM elements:</strong> It doesn’t introduce extra HTML elements into the DOM, which keeps the structure clean and efficient.</li>
          <li><strong>Performance:</strong> Since <code>ng-container</code> does not render any elements, it does not affect performance.</li>
          <li><strong>Cleaner code:</strong> It allows you to group multiple elements without the need for unnecessary wrappers like <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>.</li>
        </ul>
  
        <h3>Example: ng-container with ngSwitch</h3>
        <p>In some cases, you may need to use <code>ng-container</code> with <code>ngSwitch</code> for conditional rendering. Here’s how you can use it:</p>
        <pre><code>
        <div [ngSwitch]="selectedTab">
          <ng-container *ngSwitchCase="'home'">
            <p>Home Tab</p>
          </ng-container>
          <ng-container *ngSwitchCase="'profile'">
            <p>Profile Tab</p>
          </ng-container>
          <ng-container *ngSwitchDefault>
            <p>Default Tab</p>
          </ng-container>
        </div>
        </code></pre>
        <p>Here, we use <code>ng-container</code> to group elements under <code>ngSwitchCase</code> and <code>ngSwitchDefault</code> without adding extra DOM elements.</p>
  
        <h3>Conclusion</h3>
        <p>In Angular, the <code>ng-container</code> directive is a powerful tool that helps you group elements logically without introducing extra elements in the DOM. It is especially useful when applying multiple structural directives or when you want to avoid unnecessary HTML wrappers around content. This helps improve the readability, performance, and structure of your Angular templates.</p>
      `,
                isVisible: false
            },
            {
                title: 'Dependency Injection in Angular',
                description: `Dependency Injection (DI) is a design pattern used to implement IoC (Inversion of Control), allowing Angular to manage the lifecycle and dependencies of services and components. Angular’s DI system is used to create and inject instances of services and other dependencies into Angular components, directives, pipes, and other services.`,
                content: `
        <h3>What is Dependency Injection?</h3>
        <p>In Dependency Injection, objects or services are not created by the class that needs them but are instead injected by an external source (usually the Angular framework itself). This helps in decoupling the application’s components, making them easier to manage, test, and maintain.</p>
  
        <h3>How Dependency Injection Works in Angular</h3>
        <p>Angular’s Dependency Injection system works by providing instances of services to components, directives, or other services as needed. Angular's injector is responsible for creating and managing service instances and injecting them into the classes that need them.</p>
  
        <h3>Example: Basic Dependency Injection</h3>
        <p>Let's start with an example where we inject a simple service into a component:</p>
        <pre><code>
        // service: greeting.service.ts
        import { Injectable } from '@angular/core';
        
        @Injectable({
          providedIn: 'root',
        })
        export class GreetingService {
          getGreeting() {
            return 'Hello, Angular!';
          }
        }
        </code></pre>
  
        <p>Now, we inject this service into a component:</p>
        <pre><code>
        // component: app.component.ts
        import { Component } from '@angular/core';
        import { GreetingService } from './greeting.service';
        
        @Component({
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        })
        export class AppComponent {
          constructor(private greetingService: GreetingService) { }
        
          getMessage() {
            return this.greetingService.getGreeting();
          }
        }
        </code></pre>
  
        <h3>Injecting Services into Components</h3>
        <p>In the above example, the <code>GreetingService</code> is injected into the <code>AppComponent</code> via its constructor. The service is then used to fetch a greeting message inside the component. This injection happens automatically by Angular's DI system.</p>
  
        <h3>Providers and Injectors</h3>
        <p>Angular uses a hierarchical dependency injection system. Every Angular module has its own injector. Providers are responsible for specifying how Angular should create and inject services. You can configure providers in the component’s metadata or module’s <code>@NgModule</code> decorator.</p>
  
        <h3>Example of Configuring Providers</h3>
        <p>Providers can be configured at different levels in Angular:</p>
        <ul>
          <li><strong>Root Level:</strong> In the <code>@Injectable</code> decorator using <code>providedIn: 'root'</code>. This makes the service available throughout the app.</li>
          <li><strong>Module Level:</strong> In the <code>providers</code> array of the <code>@NgModule</code> decorator.</li>
          <li><strong>Component Level:</strong> In the <code>providers</code> array of a specific component.</li>
        </ul>
        
        <pre><code>
        @Injectable({
          providedIn: 'root',
        })
        export class MyService { ... }
        </code></pre>
  
        <h3>Using Different Types of Providers</h3>
        <p>There are different ways to configure providers in Angular:</p>
        <ul>
          <li><strong>Class Providers:</strong> The default provider, which uses a class for dependency injection.</li>
          <li><strong>Value Providers:</strong> Provides a simple value instead of a class.</li>
          <li><strong>Factory Providers:</strong> Provides an instance based on a function.</li>
          <li><strong>Existing Providers:</strong> Allows you to alias one provider to another.</li>
        </ul>
  
        <h3>Example: Using Factory Providers</h3>
        <p>Here is an example of using a factory provider:</p>
        <pre><code>
        export function loggerFactory() {
          return new LoggerService();
        }
  
        @NgModule({
          providers: [
            { provide: LoggerService, useFactory: loggerFactory }
          ]
        })
        export class AppModule { }
        </code></pre>
  
        <h3>Injecting Dependencies into Services</h3>
        <p>In Angular, services can also have dependencies. These dependencies can be injected into services just as they are injected into components.</p>
  
        <pre><code>
        // Service with another injected service
        import { Injectable } from '@angular/core';
        import { LoggerService } from './logger.service';
        
        @Injectable({
          providedIn: 'root',
        })
        export class DataService {
          constructor(private logger: LoggerService) {}
          
          logMessage(message: string) {
            this.logger.log(message);
          }
        }
        </code></pre>
  
        <h3>Using DI in Angular Modules</h3>
        <p>Services can be provided in Angular modules as well. By configuring the provider in the module's <code>@NgModule</code> decorator, the service will be available to all components in that module.</p>
  
        <pre><code>
        @NgModule({
          providers: [MyService]
        })
        export class MyModule { }
        </code></pre>
  
        <h3>Benefits of Dependency Injection</h3>
        <ul>
          <li><strong>Loose Coupling:</strong> Components and services are decoupled, making the application easier to manage and test.</li>
          <li><strong>Testability:</strong> Since dependencies are injected, it’s easy to mock dependencies in tests.</li>
          <li><strong>Reusability:</strong> Services can be reused across multiple components, reducing code duplication.</li>
          <li><strong>Improved Maintainability:</strong> Changes to services are easily propagated across components that depend on them.</li>
        </ul>
  
        <h3>Conclusion</h3>
        <p>Dependency Injection in Angular simplifies how components and services interact by allowing the framework to manage the creation and injection of services. This leads to more maintainable, testable, and decoupled code. Angular’s DI system is one of the core features that enable scalable and robust applications.</p>
      `,
                isVisible: false
            }
        ];
    }
    ngOnInit() {
    }
    toggleContent(index) {
        this.sections[index].isVisible = !this.sections[index].isVisible;
    }
};
TutorialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tutorial',
        template: __webpack_require__(/*! raw-loader!./tutorial.component.html */ "./node_modules/raw-loader/index.js!./src/app/tutorial/tutorial.component.html"),
        styles: [__webpack_require__(/*! ./tutorial.component.css */ "./src/app/tutorial/tutorial.component.css")]
    })
], TutorialComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\angularTest\gitAngular\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map