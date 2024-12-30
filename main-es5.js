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

module.exports = "<div class=\"welcome-section\">\n    <h3>Welcome to Angular Tutorial</h3>\n    <h4>Master Angular: Ace Interviews & Build Amazing Websites</h4>\n    <h5>Comprehensive tutorials, real-world projects, and expert-curated interview questions to fast-track your Angular development journey.</h5>\n    <p>This tutorial website will teach Angular interview questions and basic skills to help Angular developers learn and build websites.</p>\n</div>\n"

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

module.exports = "<header>\n    <h1>Angular Tutorial</h1>\n    <p>Your guide to mastering Angular development</p>\n</header>\n\n<div class=\"content\">\n    <div class=\"section\">\n        <div class=\"section-title\">Introduction to Angular</div>\n        <div class=\"section-content\">\n            <p>Angular is a TypeScript-based framework for building dynamic web applications. Developed by Google, it provides a component-based architecture, making it easier to create reusable and maintainable code.</p>\n        </div>\n    </div>\n\n    <div class=\"section\">\n        <div class=\"section-title\">Setting Up Angular</div>\n        <div class=\"section-content\">\n            <h4>1. Install Node.js</h4>\n            <p>Download and install Node.js from the official <a href=\"https://nodejs.org\" target=\"_blank\">Node.js website</a>.</p>\n            \n            <h4>2. Install Angular CLI</h4>\n            <p>Use the following command to install the Angular CLI:</p>\n            <div class=\"code-block\">\n                npm install -g @angular/cli\n            </div>\n            \n            <h4>3. Create a New Angular Project</h4>\n            <p>Run the following command to create a new Angular project:</p>\n            <div class=\"code-block\">\n                ng new my-angular-app\n            </div>\n        </div>\n    </div>\n\n    <div class=\"section\">\n        <div class=\"section-title\">Basic Concepts</div>\n        <div class=\"section-content\">\n            <h4>1. Components</h4>\n            <p>Components are the building blocks of Angular applications. Each component consists of a TypeScript class, an HTML template, and optional CSS styles.</p>\n\n            <h4>2. Data Binding</h4>\n            <p>Angular supports one-way and two-way data binding, allowing seamless synchronization between the model and the view.</p>\n\n            <h4>3. Directives</h4>\n            <p>Directives are used to extend HTML functionality. Common directives include:</p>\n            <ul>\n                <li><code>*ngIf</code>: Condition rendering</li>\n                <li><code>*ngFor</code>: Iteration over lists</li>\n                <li><code>[ngStyle]</code>: Dynamic styles</li>\n            </ul>\n        </div>\n    </div>\n\n    <div class=\"section\">\n        <div class=\"section-title\">Example Component</div>\n        <div class=\"section-content\">\n            <p>Here's an example of a basic Angular component:</p>\n            <div class=\"code-block\">\n                <strong>app.component.ts</strong><br>\n                import &#123; Component &#125; from '@angular/core';<br><br>\n                @Component(&#123;<br>\n                    selector: 'app-root',<br>\n                    templateUrl: './app.component.html',<br>\n                    styleUrls: ['./app.component.css']<br>\n                &#125;)<br>\n                export class AppComponent &#123;<br>\n                    title = 'My Angular App';<br>\n                &#125;\n            </div>\n        </div>\n    </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lifecycle_hook_lifecycle_hook_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lifecycle-hook/lifecycle-hook.component */ "./src/app/lifecycle-hook/lifecycle-hook.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _http_request_http_request_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http-request/http-request.component */ "./src/app/http-request/http-request.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./question/question.component */ "./src/app/question/question.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tutorial/tutorial.component */ "./src/app/tutorial/tutorial.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");











var routes = [
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Vishal Khalate';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_request_http_request_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http-request/http-request.component */ "./src/app/http-request/http-request.component.ts");
/* harmony import */ var _lifecycle_hook_lifecycle_hook_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lifecycle-hook/lifecycle-hook.component */ "./src/app/lifecycle-hook/lifecycle-hook.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./question/question.component */ "./src/app/question/question.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tutorial/tutorial.component */ "./src/app/tutorial/tutorial.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")]
        })
    ], ContactUsComponent);
    return ContactUsComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HttpRequestComponent = /** @class */ (function () {
    function HttpRequestComponent() {
    }
    HttpRequestComponent.prototype.ngOnInit = function () {
    };
    HttpRequestComponent.prototype.ngOnChanges = function (changes) {
        console.log("ngOnChanges Called");
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
    return HttpRequestComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LifecycleHookComponent = /** @class */ (function () {
    function LifecycleHookComponent() {
        console.log("Constructor Called");
    }
    LifecycleHookComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit Called");
    };
    LifecycleHookComponent.prototype.ngDoCheck = function () {
        console.log("ngDoCheck Called");
    };
    LifecycleHookComponent.prototype.ngAfterContentInit = function () {
        console.log("ngAfterContentInit Called");
    };
    LifecycleHookComponent.prototype.ngAfterContentChecked = function () {
        console.log("ngAfterContentChecked Called");
    };
    LifecycleHookComponent.prototype.ngAfterViewInit = function () {
        console.log("ngAfterViewInit Called");
    };
    LifecycleHookComponent.prototype.ngAfterViewChecked = function () {
        console.log("ngAfterViewChecked Called");
    };
    LifecycleHookComponent.prototype.ngOnDestroy = function () {
        console.log("ngOnDestroy Called");
    };
    LifecycleHookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lifecycle-hook',
            template: __webpack_require__(/*! raw-loader!./lifecycle-hook.component.html */ "./node_modules/raw-loader/index.js!./src/app/lifecycle-hook/lifecycle-hook.component.html"),
            styles: [__webpack_require__(/*! ./lifecycle-hook.component.css */ "./src/app/lifecycle-hook/lifecycle-hook.component.css")]
        })
    ], LifecycleHookComponent);
    return LifecycleHookComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: Arial, sans-serif;\r\n    line-height: 1.6;\r\n    margin: 20px;\r\n    color: #333;\r\n}\r\n.project-ideas {\r\n    max-width: 800px;\r\n    margin: auto;\r\n}\r\n.section-title {\r\n    font-size: 2em;\r\n    text-align: center;\r\n    color: #d32f2f;\r\n    margin-bottom: 20px;\r\n}\r\n.project-list {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n}\r\n.project-item {\r\n    margin-bottom: 15px;\r\n    padding: 15px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 8px;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n.project-item h4 {\r\n    margin: 0 0 10px;\r\n    font-size: 1.2em;\r\n    color: #555;\r\n}\r\n.project-item p {\r\n    margin: 0;\r\n    color: #666;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcbi5wcm9qZWN0LWlkZWFzIHtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2QzMmYyZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnByb2plY3QtbGlzdCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbi5wcm9qZWN0LWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4ucHJvamVjdC1pdGVtIGg0IHtcclxuICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbn1cclxuLnByb2plY3QtaXRlbSBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        })
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/question/question.component.css":
/*!*************************************************!*\
  !*** ./src/app/question/question.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: Arial, sans-serif;\r\n    line-height: 1.6;\r\n    margin: 20px;\r\n    color: #333;\r\n}\r\n.qa-section {\r\n    max-width: 800px;\r\n    margin: auto;\r\n}\r\n.section-title {\r\n    font-size: 2em;\r\n    text-align: center;\r\n    color: #d32f2f;\r\n    margin-bottom: 20px;\r\n}\r\n.qa-item {\r\n    margin-bottom: 20px;\r\n    padding: 15px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 8px;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n.question {\r\n    font-weight: bold;\r\n    color: #555;\r\n    margin-bottom: 10px;\r\n}\r\n.answer {\r\n    color: #666;\r\n    margin-left: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbi9xdWVzdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuLnFhLXNlY3Rpb24ge1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4uc2VjdGlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZDMyZjJmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ucWEtaXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcbi5xdWVzdGlvbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uYW5zd2VyIHtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuestionComponent = /** @class */ (function () {
    function QuestionComponent() {
    }
    QuestionComponent.prototype.ngOnInit = function () {
    };
    QuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! raw-loader!./question.component.html */ "./node_modules/raw-loader/index.js!./src/app/question/question.component.html"),
            styles: [__webpack_require__(/*! ./question.component.css */ "./src/app/question/question.component.css")]
        })
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/tutorial/tutorial.component.css":
/*!*************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: Arial, sans-serif;\r\n    line-height: 1.6;\r\n    margin: 20px;\r\n    color: #333;\r\n}\r\nheader {\r\n    text-align: center;\r\n    padding: 20px;\r\n    background-color: #f44336;\r\n    color: white;\r\n}\r\nheader h1 {\r\n    margin: 0;\r\n}\r\n.content {\r\n    max-width: 800px;\r\n    margin: auto;\r\n}\r\n.section-title {\r\n    font-size: 1.8em;\r\n    color: #d32f2f;\r\n    margin-bottom: 10px;\r\n    border-bottom: 2px solid #d32f2f;\r\n    padding-bottom: 5px;\r\n}\r\n.section-content {\r\n    margin-bottom: 20px;\r\n}\r\n.section-content h4 {\r\n    margin-top: 15px;\r\n    color: #555;\r\n}\r\n.code-block {\r\n    background-color: #f5f5f5;\r\n    border: 1px solid #ddd;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    font-family: monospace;\r\n    overflow-x: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHV0b3JpYWwvdHV0b3JpYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3R1dG9yaWFsL3R1dG9yaWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuaGVhZGVyIGgxIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4uY29udGVudCB7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICBjb2xvcjogI2QzMmYyZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2QzMmYyZjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zZWN0aW9uLWNvbnRlbnQgaDQge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG59XHJcbi5jb2RlLWJsb2NrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TutorialComponent = /** @class */ (function () {
    function TutorialComponent() {
    }
    TutorialComponent.prototype.ngOnInit = function () {
    };
    TutorialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tutorial',
            template: __webpack_require__(/*! raw-loader!./tutorial.component.html */ "./node_modules/raw-loader/index.js!./src/app/tutorial/tutorial.component.html"),
            styles: [__webpack_require__(/*! ./tutorial.component.css */ "./src/app/tutorial/tutorial.component.css")]
        })
    ], TutorialComponent);
    return TutorialComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


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
//# sourceMappingURL=main-es5.js.map