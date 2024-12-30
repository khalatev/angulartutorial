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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TutorialComponent = /** @class */ (function () {
    function TutorialComponent() {
        this.sections = [
            {
                title: 'Introduction to Angular',
                description: "Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Developed and maintained by Google, it provides a powerful set of tools for creating dynamic and efficient web applications. In this section, we'll explore what Angular is, its features, and why it's widely used by developers to build modern web apps.",
                content: "\n        <h3>What is Angular?</h3>\n        <p>Angular is a platform that helps you build web applications with dynamic features, all by using TypeScript and declarative HTML. Unlike traditional web development, Angular supports advanced techniques like data binding, component-based architecture, and routing, making it easier to develop complex applications.</p>\n        \n        <h3>Key Features of Angular</h3>\n        <ul>\n          <li><strong>Component-based Architecture:</strong> Angular encourages breaking the application into reusable components. This leads to better structure, maintainability, and testability of your app.</li>\n          <li><strong>Data Binding:</strong> Angular provides powerful data binding mechanisms, allowing synchronization between the component's model (data) and the view (UI).</li>\n          <li><strong>Directives:</strong> Directives are custom HTML tags or attributes that enhance the functionality of HTML elements.</li>\n          <li><strong>Dependency Injection (DI):</strong> DI is a design pattern used by Angular to manage services and their dependencies, improving code modularity and reusability.</li>\n          <li><strong>Routing:</strong> Angular supports routing, which allows users to navigate between different views or pages without reloading the page, enhancing user experience in single-page applications (SPA).</li>\n          <li><strong>CLI (Command Line Interface):</strong> The Angular CLI is a powerful tool that automates tasks like project setup, testing, and deployment, making the development process more efficient.</li>\n          <li><strong>RxJS:</strong> Angular uses Reactive Extensions for JavaScript (RxJS), allowing you to work with asynchronous data streams and implement reactive programming patterns.</li>\n        </ul>\n  \n        <h3>Why Use Angular?</h3>\n        <p>Angular is widely adopted by developers due to its rich feature set, which facilitates the creation of scalable, maintainable, and high-performance web applications. Some of the key reasons for using Angular include:</p>\n        <ul>\n          <li><strong>Fast Development:</strong> With the Angular CLI, you can quickly generate components, services, and other Angular constructs, reducing the amount of boilerplate code you need to write.</li>\n          <li><strong>Strong Ecosystem:</strong> Angular has a large ecosystem with well-supported libraries and tools for every aspect of web development, from state management to form handling and HTTP requests.</li>\n          <li><strong>TypeScript:</strong> Angular is built on TypeScript, which provides static typing, better tooling, and early error detection, making it easier to maintain large codebases.</li>\n          <li><strong>Cross-Platform:</strong> Angular allows you to build applications that run on various platforms, including the web, mobile (using Ionic), and desktop (using Electron).</li>\n          <li><strong>Community Support:</strong> Angular has a large and active community that contributes to its ecosystem and provides help via forums, blogs, and GitHub repositories.</li>\n        </ul>\n  \n        <h3>Angular vs. Other Frontend Frameworks</h3>\n        <p>Angular is often compared to other frontend frameworks like React and Vue.js. Here\u2019s how Angular stands out:</p>\n        <ul>\n          <li><strong>Complete Framework:</strong> Angular is a full-fledged MVC framework that provides more out-of-the-box functionality compared to React, which focuses primarily on the view layer.</li>\n          <li><strong>Opinionated Structure:</strong> Angular follows a more rigid, opinionated structure, which is beneficial for large-scale applications where consistency and maintainability are important. In contrast, React offers more flexibility but requires more setup and configuration.</li>\n          <li><strong>Two-Way Data Binding:</strong> Angular offers built-in two-way data binding, while React and Vue provide one-way data binding by default. Angular\u2019s two-way binding can be particularly useful for form-based applications.</li>\n        </ul>\n  \n        <h3>Setting Up an Angular Application</h3>\n        <p>Before you can start developing with Angular, you need to set up your development environment. Here are the basic steps to get started:</p>\n        <ul>\n          <li><strong>Install Node.js:</strong> Angular requires Node.js. Download and install it from <a href=\"https://nodejs.org\" target=\"_blank\">Node.js website</a>.</li>\n          <li><strong>Install Angular CLI:</strong> After installing Node.js, you can install the Angular CLI globally by running the following command:\n            <pre><code>npm install -g @angular/cli</code></pre>\n          </li>\n          <li><strong>Create a New Angular Project:</strong> To create a new project, run:\n            <pre><code>ng new my-angular-app</code></pre>\n            This will set up a new Angular project with the default configuration.\n          </li>\n          <li><strong>Run the Development Server:</strong> To start the application locally, navigate to the project directory and run:\n            <pre><code>cd my-angular-app</code></pre>\n            <pre><code>ng serve</code></pre>\n            Then open your browser and go to <a href=\"http://localhost:4200\" target=\"_blank\">http://localhost:4200</a> to see your Angular app in action.\n          </li>\n        </ul>\n  \n        <h3>Conclusion</h3>\n        <p>Angular is a comprehensive framework that provides everything you need to build large-scale, high-performance web applications. Its rich feature set, strong ecosystem, and the support of TypeScript make it a great choice for developers looking to create modern web apps. If you\u2019re building a complex application or require a robust toolset, Angular is an excellent option to consider.</p>\n      ",
                isVisible: false
            },
            {
                title: 'Understand the Project Structure',
                description: "The Angular project structure is organized in a modular way to separate concerns and improve maintainability. When you generate a new Angular project using the Angular CLI, the default directory structure is designed to be scalable and to allow you to organize your application logically. In this section, we will walk through the typical structure of an Angular project and explain the purpose of each folder and file.",
                content: "\n        <h3>Typical Angular Project Structure</h3>\n        <p>When you create an Angular project, the default project structure generated by the Angular CLI looks something like this:</p>\n        <pre><code>\n        my-angular-app/\n        \u251C\u2500\u2500 e2e/\n        \u251C\u2500\u2500 node_modules/\n        \u251C\u2500\u2500 src/\n        \u2502   \u251C\u2500\u2500 app/\n        \u2502   \u251C\u2500\u2500 assets/\n        \u2502   \u251C\u2500\u2500 environments/\n        \u2502   \u251C\u2500\u2500 index.html\n        \u2502   \u251C\u2500\u2500 main.ts\n        \u2502   \u251C\u2500\u2500 polyfills.ts\n        \u2502   \u2514\u2500\u2500 styles.css\n        \u251C\u2500\u2500 angular.json\n        \u251C\u2500\u2500 package.json\n        \u251C\u2500\u2500 tsconfig.json\n        \u251C\u2500\u2500 tsconfig.app.json\n        \u251C\u2500\u2500 tslint.json\n        \u2514\u2500\u2500 karma.conf.js\n        </code></pre>\n        \n        <h3>Key Directories and Files</h3>\n        \n        <h4>1. e2e/</h4>\n        <p>The <code>e2e</code> folder contains end-to-end testing files. These tests simulate user interactions with your app to ensure that it behaves as expected. Angular uses Protractor for E2E testing by default, but you can also configure it to use other tools if needed.</p>\n        \n        <h4>2. node_modules/</h4>\n        <p>The <code>node_modules</code> directory contains all the dependencies and packages installed via npm (Node Package Manager). This folder is automatically created when you run the <code>npm install</code> command.</p>\n        \n        <h4>3. src/</h4>\n        <p>The <code>src</code> folder contains the source code of your application. This is where you will spend most of your time developing the app. The key subdirectories in the <code>src</code> folder include:</p>\n        \n        <h5>3.1 app/</h5>\n        <p>The <code>app</code> directory is where the components, services, and other Angular constructs reside. It typically contains:</p>\n        <ul>\n          <li><strong>app.component.ts</strong>: The root component of your application.</li>\n          <li><strong>app.module.ts</strong>: The root module that imports the necessary Angular modules and declares the components and services used in the application.</li>\n          <li><strong>app-routing.module.ts</strong>: The routing module that manages the navigation between views in the application.</li>\n          <li>Other components, services, directives, and pipes that you generate using Angular CLI.</li>\n        </ul>\n        \n        <h5>3.2 assets/</h5>\n        <p>The <code>assets</code> directory is used for static resources like images, stylesheets, and other assets that do not require processing during the build. These files are included in the final bundle as-is.</p>\n        \n        <h5>3.3 environments/</h5>\n        <p>The <code>environments</code> folder contains configuration files for different environments (e.g., development, production). Angular allows you to define different configurations for different build environments, which can be used for API endpoints, logging levels, etc.</p>\n        \n        <h5>3.4 index.html</h5>\n        <p>The <code>index.html</code> file is the main HTML file of the application. It is the entry point for the Angular application and contains the <code>&lt;app-root&gt;</code> tag where the root component is bootstrapped.</p>\n        \n        <h5>3.5 main.ts</h5>\n        <p>The <code>main.ts</code> file is the entry point for the Angular application. It bootstraps the root module (<code>AppModule</code>) and initializes the application.</p>\n        \n        <h5>3.6 polyfills.ts</h5>\n        <p>The <code>polyfills.ts</code> file contains code to ensure compatibility with different browsers, such as adding support for features that are not natively supported (e.g., older versions of Internet Explorer).</p>\n        \n        <h5>3.7 styles.css</h5>\n        <p>The <code>styles.css</code> file contains global styles for the application. These styles are applied to the entire app, but you can also have component-specific styles.</p>\n        \n        <h4>4. angular.json</h4>\n        <p>The <code>angular.json</code> file contains the configuration for your Angular application, including settings for building, testing, and serving the app. It specifies details about the project's structure, the assets to include, and which Angular CLI builders to use.</p>\n        \n        <h4>5. package.json</h4>\n        <p>The <code>package.json</code> file lists the dependencies and scripts for your Angular project. It is where npm packages are defined, and it also contains the metadata about your project such as its name, version, and description.</p>\n        \n        <h4>6. tsconfig.json</h4>\n        <p>The <code>tsconfig.json</code> file contains the TypeScript compiler options and settings. This file defines how TypeScript code is compiled into JavaScript.</p>\n        \n        <h4>7. tslint.json</h4>\n        <p>The <code>tslint.json</code> file contains the configuration for TSLint, which is a tool used to enforce coding standards and conventions in TypeScript code. It can help ensure consistency and maintainability of your codebase.</p>\n        \n        <h4>8. karma.conf.js</h4>\n        <p>The <code>karma.conf.js</code> file contains the configuration for Karma, which is a test runner used by Angular. It defines how tests are executed, which browsers are used for testing, and the framework (such as Jasmine) to use for writing unit tests.</p>\n        \n        <h3>Conclusion</h3>\n        <p>Understanding the structure of an Angular project is crucial to navigating and organizing your application. By keeping related files grouped together, Angular ensures that your app remains modular, scalable, and easy to maintain. The project structure provided by Angular CLI is designed to facilitate best practices, making it easy for developers to get started with minimal configuration.</p>\n      ",
                isVisible: false
            },
            {
                title: 'Generate a New Component',
                content: "\n        <p><strong>Generate a new component:</strong></p>\n        <pre><code>ng generate component hello-world</code></pre>\n        <p>This creates files for the new component in <code>src/app/hello-world</code>.</p>\n        <h3>Use the Component</h3>\n        <p>Add <code>&lt;app-hello-world&gt;&lt;/app-hello-world&gt;</code> to the <code>src/app/app.component.html</code> file.</p>\n      ",
                isVisible: false
            },
            {
                title: 'Angular Data Binding',
                description: "Angular Data Binding is a mechanism for coordinating the interaction between the component's model (data) and its view (UI). Angular provides multiple ways to bind data, including one-way binding and two-way binding.",
                content: "\n        <p>Here\u2019s a breakdown of the different types of data binding in Angular:</p>\n  \n        <h4>1. Interpolation (One-Way Data Binding)</h4>\n        <p>Interpolation binds a component's data to the view by embedding the data within the HTML. It is used for inserting dynamic content into the template.</p>\n        <pre><code>&lt;h1&gt;{{ title }}&lt;/h1&gt;</code></pre>\n        <p><strong>Explanation:</strong> The title property in the component class will be displayed within the &lt;h1&gt; tag. If title changes in the component, the view will update automatically.</p>\n        <pre><code>export class AppComponent {\n    title = 'Welcome to Angular!';\n  }</code></pre>\n  \n        <h4>2. Property Binding (One-Way Data Binding)</h4>\n        <p>Property binding allows you to bind an HTML element property to a value in the component.</p>\n        <pre><code>&lt;img [src]=\"imageUrl\" alt=\"Angular Logo\"&gt;</code></pre>\n        <p><strong>Explanation:</strong> The src property of the &lt;img&gt; tag will be bound to the imageUrl property in the component. If the imageUrl changes, the src will update automatically.</p>\n        <pre><code>export class AppComponent {\n    imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';\n  }</code></pre>\n  \n        <h4>3. Event Binding (One-Way Data Binding)</h4>\n        <p>Event binding allows you to listen to events (e.g., click, mouseover) and respond to them by calling methods in your component.</p>\n        <pre><code>&lt;button (click)=\"onClick()\"&gt;Click Me&lt;/button&gt;</code></pre>\n        <p><strong>Explanation:</strong> When the button is clicked, the onClick() method is executed.</p>\n        <pre><code>export class AppComponent {\n    onClick() {\n      alert('Button clicked!');\n    }\n  }</code></pre>\n  \n        <h4>4. Two-Way Data Binding</h4>\n        <p>Two-way data binding combines property binding and event binding. It allows you to bind a property in the component to an input field and vice versa. Changes to the input field will update the component property, and changes to the component property will update the input field.</p>\n        <pre><code>&lt;input [(ngModel)]=\"name\" placeholder=\"Enter your name\"&gt;</code></pre>\n        <p><strong>Explanation:</strong> The name property in the component is bound to the input field. If you type in the input field, the value of name will automatically update. Similarly, if name changes in the component, the input field will reflect the new value.</p>\n        <pre><code>import { Component } from '@angular/core';\n  \n  @Component({\n    selector: 'app-root',\n    templateUrl: './app.component.html',\n    styleUrls: ['./app.component.css']\n  })\n  export class AppComponent {\n    name: string = '';\n  }</code></pre>\n        <p><strong>Note:</strong> You need to import the FormsModule to use ngModel for two-way binding.</p>\n        <pre><code>import { NgModule } from '@angular/core';\n  import { BrowserModule } from '@angular/platform-browser';\n  import { FormsModule } from '@angular/forms'; // Import FormsModule\n  \n  import { AppComponent } from './app.component';\n  \n  @NgModule({\n    declarations: [AppComponent],\n    imports: [BrowserModule, FormsModule], // Include FormsModule here\n    providers: [],\n    bootstrap: [AppComponent]\n  })\n  export class AppModule {}</code></pre>\n  \n        <h4>5. Class Binding (One-Way Data Binding)</h4>\n        <p>Class binding allows you to set the CSS class of an element dynamically, based on the component's data.</p>\n        <pre><code>&lt;div [class.active]=\"isActive\"&gt;This div is active&lt;/div&gt;</code></pre>\n        <p><strong>Explanation:</strong> If isActive is true, the active class will be added to the div. If isActive is false, the active class will be removed.</p>\n        <pre><code>export class AppComponent {\n    isActive = true;  // Set this value to true or false\n  }</code></pre>\n  \n        <h4>6. Style Binding (One-Way Data Binding)</h4>\n        <p>Style binding allows you to bind inline styles dynamically based on the component\u2019s data.</p>\n        <pre><code>&lt;div [style.background-color]=\"isRed ? 'red' : 'green'\"&gt;This div has dynamic background color&lt;/div&gt;</code></pre>\n        <p><strong>Explanation:</strong> If isRed is true, the background color will be red. If isRed is false, the background color will be green.</p>\n        <pre><code>export class AppComponent {\n    isRed = true;\n  }</code></pre>\n  \n        <h4>Summary of Data Binding Types:</h4>\n        <table class=\"table table-hover\">\n          <thead>\n            <tr>\n              <th>Binding Type</th>\n              <th>Syntax</th>\n              <th>Direction</th>\n              <th>Description</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>Interpolation</td>\n              <td>{{ expression }}</td>\n              <td>One-way</td>\n              <td>Inserts data into the HTML template.</td>\n            </tr>\n            <tr>\n              <td>Property Binding</td>\n              <td>[property]=\"expression\"</td>\n              <td>One-way</td>\n              <td>Binds an element\u2019s property to a component property.</td>\n            </tr>\n            <tr>\n              <td>Event Binding</td>\n              <td>(event)=\"method()\"</td>\n              <td>One-way</td>\n              <td>Listens for events and calls a method in the component.</td>\n            </tr>\n            <tr>\n              <td>Two-Way Binding</td>\n              <td>[(ngModel)]=\"property\"</td>\n              <td>Both-way</td>\n              <td>Binds a property in the component to an input field.</td>\n            </tr>\n            <tr>\n              <td>Class Binding</td>\n              <td>[class.className]=\"condition\"</td>\n              <td>One-way</td>\n              <td>Dynamically adds/removes CSS classes.</td>\n            </tr>\n            <tr>\n              <td>Style Binding</td>\n              <td>[style.property]=\"expression\"</td>\n              <td>One-way</td>\n              <td>Dynamically sets inline styles.</td>\n            </tr>\n          </tbody>\n        </table>\n  \n        <h4>When to Use Which Binding:</h4>\n        <ul>\n          <li><strong>Use interpolation</strong> when you need to display data.</li>\n          <li><strong>Use property binding</strong> for binding values to element properties like src, href, disabled, etc.</li>\n          <li><strong>Use event binding</strong> when you need to respond to user actions like clicks, mouse events, or keyboard events.</li>\n          <li><strong>Use two-way binding</strong> for forms or input fields where the component data needs to be updated when the user inputs data and vice versa.</li>\n          <li><strong>Use class and style bindings</strong> when you need to dynamically add/remove CSS classes or styles based on component properties.</li>\n        </ul>\n  \n        <h4>Conclusion:</h4>\n        <p>Data binding in Angular provides a powerful way to ensure that your view and model are synchronized, reducing the need for manual DOM manipulation.</p>\n      ",
                isVisible: false
            },
            {
                title: 'Understand Services in Angular',
                description: "In Angular, services are classes that handle data logic, business logic, or external communications. Services are used to encapsulate data manipulation, HTTP requests, and other functionality that can be shared across multiple components. Services are typically injected into components, other services, or directives to provide a consistent way of interacting with data.",
                content: "\n        <h3>What is a Service?</h3>\n        <p>A service is a class that is responsible for providing functionality and data that can be used across multiple components. Services are ideal for tasks like handling HTTP requests, data management, or performing operations that are shared by multiple parts of the application.</p>\n        \n        <h3>Creating a Service</h3>\n        <p>In Angular, you can create a service using the Angular CLI. For example, to create a service called <code>DataService</code>, you would run the following command:</p>\n        <pre><code>ng generate service data</code></pre>\n        <p>This will create a new service file called <code>data.service.ts</code> in the <code>src/app</code> directory. The service will look like this:</p>\n        \n        <h4>Example: DataService</h4>\n        <pre><code>\n  import { Injectable } from '@angular/core';\n  \n  @Injectable({\n    providedIn: 'root', // Service is available throughout the app\n  })\n  export class DataService {\n    constructor() { }\n  \n    getData() {\n      return ['Item 1', 'Item 2', 'Item 3'];\n    }\n  }\n        </code></pre>\n        <p>The <code>@Injectable</code> decorator marks the class as a service that can be injected into other components or services. The <code>providedIn: 'root'</code> part tells Angular to create a single instance of the service that can be shared throughout the entire application.</p>\n        \n        <h3>Injecting a Service into a Component</h3>\n        <p>Once the service is created, you can inject it into a component by adding it to the component's constructor. Here's how you inject the <code>DataService</code> into a component:</p>\n        \n        <h4>Example: Injecting DataService in a Component</h4>\n        <pre><code>\n  import { Component, OnInit } from '@angular/core';\n  import { DataService } from './data.service'; // Import the service\n  \n  @Component({\n    selector: 'app-hello-world',\n    templateUrl: './hello-world.component.html',\n    styleUrls: ['./hello-world.component.css']\n  })\n  export class HelloWorldComponent implements OnInit {\n    items: string[] = [];\n  \n    // Inject the service into the constructor\n    constructor(private dataService: DataService) { }\n  \n    ngOnInit() {\n      this.items = this.dataService.getData(); // Call the service method\n    }\n  }\n        </code></pre>\n        <p>The service is injected using the constructor, and once injected, its methods can be accessed within the component's logic. In this case, the <code>getData()</code> method is called to populate the <code>items</code> array.</p>\n        \n        <h3>Using Services for HTTP Requests</h3>\n        <p>Services are commonly used to handle HTTP requests in Angular. You can use the Angular <code>HttpClient</code> module to make HTTP requests to external APIs and services.</p>\n        \n        <h4>Example: Making an HTTP Request</h4>\n        <p>First, import the <code>HttpClient</code> module in your service:</p>\n        <pre><code>\n  import { Injectable } from '@angular/core';\n  import { HttpClient } from '@angular/common/http'; // Import HttpClient\n  \n  @Injectable({\n    providedIn: 'root',\n  })\n  export class DataService {\n    constructor(private http: HttpClient) { }\n  \n    getItems() {\n      return this.http.get('https://api.example.com/items'); // Make an HTTP GET request\n    }\n  }\n        </code></pre>\n        <p>In this example, the service makes an HTTP GET request to the URL <code>https://api.example.com/items</code> and returns the data to the component that calls it.</p>\n        \n        <h3>Providing Services</h3>\n        <p>Services can be provided in various ways. The most common way is to provide a service at the root level, which makes it available throughout the application. You can also provide services in specific modules or components to limit their scope.</p>\n        \n        <h4>Providing a Service at the Root Level</h4>\n        <p>When you use the <code>providedIn: 'root'</code> option, Angular provides the service at the root level, making it a singleton that can be injected throughout the app:</p>\n        <pre><code>\n  @Injectable({\n    providedIn: 'root',\n  })\n  export class DataService { ... }\n        </code></pre>\n        \n        <h4>Providing a Service in a Module</h4>\n        <p>You can also provide services at the module level by adding them to the <code>providers</code> array in a module's metadata:</p>\n        <pre><code>\n  @NgModule({\n    declarations: [AppComponent],\n    imports: [BrowserModule],\n    providers: [DataService], // Provide the service at the module level\n    bootstrap: [AppComponent]\n  })\n  export class AppModule { }\n        </code></pre>\n        \n        <h3>Conclusion</h3>\n        <p>Angular services are a powerful tool for handling business logic and data management in your application. By creating services and injecting them into your components, you can separate concerns and improve maintainability. Services can also be used to make HTTP requests, store application state, or share data between multiple components.</p>\n      ",
                isVisible: false
            },
            {
                title: 'Understand Angular Routing',
                description: "Angular routing is a powerful feature that allows navigation between different views or components in a single-page application (SPA). Routing in Angular helps to define the URL paths and link them to the specific components that should be displayed when the user navigates to those paths.",
                content: "\n        <h3>What is Angular Routing?</h3>\n        <p>Angular Routing enables navigation from one view to another view, allowing the application to be dynamic and interactive. Routing is used to change views based on the URL. When a user clicks on a link or enters a URL, Angular updates the view without reloading the entire page.</p>\n  \n        <h3>Setting up Angular Routing</h3>\n        <p>To enable routing in Angular, follow these steps:</p>\n        <ol>\n          <li>First, create a routing module (if it's not already available).</li>\n          <li>Define routes in the routing module using the <code>Routes</code> array.</li>\n          <li>Configure your <code>app-routing.module.ts</code> to handle routing in the application.</li>\n          <li>Use <code>router-outlet</code> in your component to load the routed views.</li>\n        </ol>\n  \n        <h3>Step 1: Create the Routing Module</h3>\n        <p>Angular provides an easy way to create a routing module using the CLI:</p>\n        <pre><code>ng generate module app-routing --flat --module=app</code></pre>\n        <p>This will create an <code>app-routing.module.ts</code> file that contains the routing logic for the application. You need to import the <code>RouterModule</code> and <code>Routes</code> from <code>@angular/router</code>.</p>\n        \n        <h4>Example: app-routing.module.ts</h4>\n        <pre><code>\n  import { NgModule } from '@angular/core';\n  import { RouterModule, Routes } from '@angular/router';\n  import { HomeComponent } from './home/home.component';\n  import { AboutComponent } from './about/about.component';\n  \n  const routes: Routes = [\n    { path: '', component: HomeComponent },  // Default route\n    { path: 'about', component: AboutComponent }\n  ];\n  \n  @NgModule({\n    imports: [RouterModule.forRoot(routes)],\n    exports: [RouterModule]\n  })\n  export class AppRoutingModule { }\n        </code></pre>\n        <p>Here, we've defined two routes:\n          <ul>\n            <li><code>''</code>: Default route that loads the <code>HomeComponent</code>.</li>\n            <li><code>'about'</code>: A route that loads the <code>AboutComponent</code>.</li>\n          </ul>\n        </p>\n  \n        <h3>Step 2: Use Router Outlet in app.component.html</h3>\n        <p>Next, you need to add the <code>router-outlet</code> directive in the template of your main component (usually <code>app.component.html</code>). This will be the placeholder where the routed components will be displayed:</p>\n        <pre><code>&lt;router-outlet&gt;&lt;/router-outlet&gt;</code></pre>\n  \n        <h3>Step 3: Navigating to Routes</h3>\n        <p>Once the routes are defined and the outlet is set, you can use Angular's <code>routerLink</code> directive to navigate between routes. You can apply <code>routerLink</code> to any element, like a <code>div</code>, <code>button</code>, or <code>a</code> tag, to link to the route:</p>\n  \n        <h4>Example: Using routerLink</h4>\n        <pre><code>\n  &lt;a routerLink=\"/about\"&gt;Go to About Page&lt;/a&gt;\n        </code></pre>\n        <p>When this link is clicked, it will navigate to the <code>AboutComponent</code> that we defined in our routes.</p>\n  \n        <h3>Step 4: Programmatic Navigation</h3>\n        <p>You can also navigate programmatically using Angular's <code>Router</code> service. This is useful for navigation triggered by logic or events, like after a form submission.</p>\n        \n        <h4>Example: Programmatic Navigation</h4>\n        <pre><code>\n  import { Component } from '@angular/core';\n  import { Router } from '@angular/router';\n  \n  @Component({\n    selector: 'app-home',\n    template: '&lt;button (click)=\"goToAbout()\"&gt;Go to About&lt;/button&gt;'\n  })\n  export class HomeComponent {\n  \n    constructor(private router: Router) { }\n  \n    goToAbout() {\n      this.router.navigate(['/about']);\n    }\n  }\n        </code></pre>\n        <p>In this example, clicking the button will programmatically navigate to the <code>AboutComponent</code> using the <code>router.navigate()</code> method.</p>\n  \n        <h3>Step 5: Route Parameters</h3>\n        <p>Routes can also accept parameters. These parameters can be accessed by the component associated with the route. The syntax for defining routes with parameters is as follows:</p>\n        \n        <h4>Example: Route with Parameters</h4>\n        <pre><code>\n  const routes: Routes = [\n    { path: 'user/:id', component: UserComponent }\n  ];\n        </code></pre>\n        <p>The <code>:id</code> is a route parameter. You can access this parameter in the component using Angular's <code>ActivatedRoute</code> service:</p>\n  \n        <h4>Example: Accessing Route Parameters</h4>\n        <pre><code>\n  import { ActivatedRoute } from '@angular/router';\n  \n  @Component({\n    selector: 'app-user',\n    template: '&lt;p&gt;User ID: {{ userId }}&lt;/p&gt;'\n  })\n  export class UserComponent implements OnInit {\n    userId: string;\n  \n    constructor(private route: ActivatedRoute) { }\n  \n    ngOnInit() {\n      this.userId = this.route.snapshot.paramMap.get('id');\n    }\n  }\n        </code></pre>\n        <p>Here, the component retrieves the <code>id</code> parameter from the URL using the <code>ActivatedRoute</code> service's <code>snapshot.paramMap.get('id')</code>.</p>\n  \n        <h3>Conclusion</h3>\n        <p>Angular Routing is a vital feature for building single-page applications with navigation capabilities. By setting up routing, defining routes, using the <code>router-outlet</code>, and navigating programmatically or via <code>routerLink</code>, you can easily manage the flow of your Angular application. Understanding and mastering Angular routing helps in building dynamic, user-friendly SPAs.</p>\n      ",
                isVisible: false
            },
            {
                title: 'Angular Directives',
                description: "Directives are a powerful feature in Angular that allows you to extend the functionality of HTML elements. They can modify the behavior or appearance of elements in the DOM (Document Object Model). Angular provides built-in directives, such as structural directives (e.g., *ngIf, *ngFor) and attribute directives (e.g., ngClass, ngStyle), and you can also create custom directives to suit your needs.",
                content: "\n        <h3>What Are Directives?</h3>\n        <p>In Angular, directives are classes that add or modify the behavior of HTML elements. They are markers on the DOM that tell Angular to do something special with that element.</p>\n  \n        <h3>Types of Directives in Angular</h3>\n        <p>There are three types of directives in Angular:</p>\n        <ul>\n          <li><strong>Component Directives</strong>: These are directives that create and control a component. Every component in Angular is a directive with a template.</li>\n          <li><strong>Structural Directives</strong>: These modify the DOM layout by adding or removing elements based on conditions. Examples: <code>*ngIf</code>, <code>*ngFor</code>.</li>\n          <li><strong>Attribute Directives</strong>: These modify the appearance or behavior of an element, component, or another directive. Examples: <code>ngClass</code>, <code>ngStyle</code>.</li>\n        </ul>\n  \n        <h3>1. Structural Directives</h3>\n        <p>Structural directives alter the DOM layout by adding or removing elements. They are prefixed with an asterisk (<code>*</code>) when used in the template.</p>\n  \n        <h4>Example: *ngIf</h4>\n        <p>The <code>*ngIf</code> directive conditionally includes or removes an element from the DOM based on a boolean expression.</p>\n        <pre><code>\n  <div *ngIf=\"isVisible\">This content is visible when isVisible is true.</div>\n        </code></pre>\n        <p>Here, the <code>div</code> element will only be rendered if the <code>isVisible</code> expression evaluates to <code>true</code>.</p>\n  \n        <h4>Example: *ngFor</h4>\n        <p>The <code>*ngFor</code> directive is used to repeat a block of HTML for each item in a list.</p>\n        <pre><code>\n  <ul>\n    <li *ngFor=\"let item of items\">{{ item }}</li>\n  </ul>\n        </code></pre>\n        <p>In this example, <code>*ngFor</code> iterates over the <code>items</code> array and renders each item as a list item (<code>li</code>) in the unordered list.</p>\n  \n        <h3>2. Attribute Directives</h3>\n        <p>Attribute directives modify the behavior or appearance of an element. These directives can be applied to an element, component, or another directive.</p>\n  \n        <h4>Example: ngClass</h4>\n        <p>The <code>ngClass</code> directive is used to dynamically add or remove CSS classes from an element based on an expression.</p>\n        <pre><code>\n  <div [ngClass]=\"{'active': isActive}\">This div will have 'active' class when isActive is true.</div>\n        </code></pre>\n        <p>If the value of <code>isActive</code> is <code>true</code>, the <code>active</code> class will be applied to the <code>div</code> element.</p>\n  \n        <h4>Example: ngStyle</h4>\n        <p>The <code>ngStyle</code> directive allows you to dynamically set the inline styles of an element based on an expression.</p>\n        <pre><code>\n  <div [ngStyle]=\"{'background-color': isRed ? 'red' : 'green'}\">\n    This div will have a dynamic background color.\n  </div>\n        </code></pre>\n        <p>In this example, if <code>isRed</code> is <code>true</code>, the background color will be red, otherwise, it will be green.</p>\n  \n        <h3>3. Custom Directives</h3>\n        <p>Angular also allows you to create your own custom directives. You can create attribute or structural directives based on your requirements.</p>\n  \n        <h4>Example: Custom Attribute Directive</h4>\n        <p>Here\u2019s an example of how to create a custom attribute directive that changes the background color of an element when the mouse hovers over it.</p>\n        <pre><code>\n  import { Directive, ElementRef, HostListener } from '@angular/core';\n  \n  @Directive({\n    selector: '[appHover]'\n  })\n  export class HoverDirective {\n  \n    constructor(private el: ElementRef) {}\n  \n    @HostListener('mouseenter') onMouseEnter() {\n      this.el.nativeElement.style.backgroundColor = 'yellow';\n    }\n  \n    @HostListener('mouseleave') onMouseLeave() {\n      this.el.nativeElement.style.backgroundColor = '';\n    }\n  }\n        </code></pre>\n        <p>This directive listens for the <code>mouseenter</code> and <code>mouseleave</code> events on the element, and when these events occur, it changes the background color of the element.</p>\n  \n        <h3>4. Using Directives in Templates</h3>\n        <p>To use a directive in a template, simply apply it to an element or component as an attribute. Structural directives, like <code>*ngIf</code> and <code>*ngFor</code>, are prefixed with an asterisk (<code>*</code>) when used in the template. For attribute directives like <code>ngClass</code> and <code>ngStyle</code>, you use the square brackets (<code>[]</code>) for property binding.</p>\n  \n        <h4>Summary of Common Directives</h4>\n        <table class=\"table table-hover\">\n          <tr>\n            <th>Directive</th>\n            <th>Type</th>\n            <th>Usage</th>\n          </tr>\n          <tr>\n            <td>*ngIf</td>\n            <td>Structural</td>\n            <td>Conditionally includes or removes an element from the DOM.</td>\n          </tr>\n          <tr>\n            <td>*ngFor</td>\n            <td>Structural</td>\n            <td>Repeats an element for each item in a list.</td>\n          </tr>\n          <tr>\n            <td>ngClass</td>\n            <td>Attribute</td>\n            <td>Dynamically adds/removes CSS classes from an element.</td>\n          </tr>\n          <tr>\n            <td>ngStyle</td>\n            <td>Attribute</td>\n            <td>Dynamically sets inline styles of an element.</td>\n          </tr>\n        </table>\n  \n        <h3>Conclusion</h3>\n        <p>Directives in Angular are an essential tool for manipulating the DOM and controlling the behavior and appearance of elements. By understanding and using structural and attribute directives, you can create dynamic and interactive user interfaces. Additionally, you can extend Angular\u2019s functionality by creating your own custom directives tailored to your specific needs.</p>\n      ",
                isVisible: false
            },
            {
                title: 'Forms in Angular',
                description: "Forms in Angular are used to capture and manage user input. Angular provides two types of forms: Template-driven forms and Reactive forms. Template-driven forms are simpler and easier to use, while reactive forms provide more control and flexibility, making them suitable for complex form scenarios.",
                content: "\n        <h3>Introduction to Forms in Angular</h3>\n        <p>Forms allow users to input data that can be processed in your Angular application. Angular provides two types of forms:</p>\n        <ul>\n          <li><strong>Template-driven Forms</strong>: These are simple to use and typically used for smaller forms. They are driven by the template and use directives like <code>ngModel</code> to bind the form controls.</li>\n          <li><strong>Reactive Forms</strong>: These are more powerful and flexible, allowing you to build forms using a model in the component class. They are better suited for complex forms with dynamic validation, or when you need to manage form state programmatically.</li>\n        </ul>\n  \n        <h3>Template-driven Forms</h3>\n        <p>Template-driven forms are simple to use and work well for basic forms. In these forms, Angular manages the state of the form in the template, and the form elements are bound using the <code>ngModel</code> directive.</p>\n        \n        <h4>Setting Up Template-driven Forms</h4>\n        <p>To use template-driven forms, you need to import the <code>FormsModule</code> in your application module.</p>\n        <pre><code>\n  import { FormsModule } from '@angular/forms';\n  \n  @NgModule({\n    imports: [FormsModule]\n  })\n  export class AppModule { }\n        </code></pre>\n        \n        <h4>Basic Example of a Template-driven Form</h4>\n        <p>Here is a simple example of a template-driven form:</p>\n        <pre><code>\n  <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit(myForm)\">\n    <label for=\"name\">Name:</label>\n    <input type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"user.name\" required>\n  \n    <button type=\"submit\" [disabled]=\"!myForm.valid\">Submit</button>\n  </form>\n        </code></pre>\n        <p>In this example, the <code>ngModel</code> directive is used for two-way data binding between the input field and the component property <code>user.name</code>. The form is submitted using the <code>ngSubmit</code> event, and the form is disabled if it's invalid.</p>\n  \n        <h3>Reactive Forms</h3>\n        <p>Reactive forms provide more flexibility and are ideal for complex forms with dynamic validation or multiple form groups. In reactive forms, you define the form model in the component class and bind it to the template.</p>\n  \n        <h4>Setting Up Reactive Forms</h4>\n        <p>To use reactive forms, you need to import the <code>ReactiveFormsModule</code> in your application module.</p>\n        <pre><code>\n  import { ReactiveFormsModule } from '@angular/forms';\n  \n  @NgModule({\n    imports: [ReactiveFormsModule]\n  })\n  export class AppModule { }\n        </code></pre>\n  \n        <h4>Basic Example of a Reactive Form</h4>\n        <p>Here is an example of a reactive form:</p>\n        <pre><code>\n  import { Component } from '@angular/core';\n  import { FormGroup, FormBuilder, Validators } from '@angular/forms';\n  \n  @Component({\n    selector: 'app-root',\n    templateUrl: './app.component.html',\n    styleUrls: ['./app.component.css']\n  })\n  export class AppComponent {\n    loginForm: FormGroup;\n  \n    constructor(private fb: FormBuilder) {\n      this.loginForm = this.fb.group({\n        username: ['', Validators.required],\n        password: ['', Validators.required]\n      });\n    }\n  \n    onSubmit() {\n      if (this.loginForm.valid) {\n        console.log(this.loginForm.value);\n      }\n    }\n  }\n        </code></pre>\n        <p>In this example, we define a <code>FormGroup</code> with two form controls: <code>username</code> and <code>password</code>. The form is created using the <code>FormBuilder</code> service, and validation is added using the <code>Validators</code> class. The form is submitted using the <code>onSubmit()</code> method, and we log the form values if the form is valid.</p>\n  \n        <h3>Form Validation</h3>\n        <p>Angular provides powerful tools for form validation in both template-driven and reactive forms. Validation can be applied both in the template and in the component class. Common validation strategies include required fields, minimum/maximum length, email format, and custom validators.</p>\n        \n        <h4>Example: Required Validation</h4>\n        <p>For template-driven forms, you can use the <code>required</code> attribute to make a field mandatory.</p>\n        <pre><code>\n  <input type=\"text\" name=\"name\" [(ngModel)]=\"user.name\" required>\n        </code></pre>\n  \n        <h4>Example: Reactive Form Validation</h4>\n        <p>In a reactive form, you can add validation to a form control like this:</p>\n        <pre><code>\n  this.loginForm = this.fb.group({\n    username: ['', [Validators.required]],\n    password: ['', [Validators.required]]\n  });\n        </code></pre>\n  \n        <h3>Handling Form Submission</h3>\n        <p>When the user submits a form, Angular provides an event handler to manage the submission process. For template-driven forms, this is handled with the <code>(ngSubmit)</code> event. For reactive forms, the form submission is handled programmatically using the <code>onSubmit()</code> method.</p>\n  \n        <h4>Example: Handling Form Submission in Template-driven Form</h4>\n        <pre><code>\n  <form (ngSubmit)=\"onSubmit(myForm)\">\n    <!-- Form Fields -->\n  </form>\n        </code></pre>\n        <p>In this example, when the form is submitted, the <code>onSubmit</code> method is triggered.</p>\n  \n        <h4>Example: Handling Form Submission in Reactive Form</h4>\n        <pre><code>\n  onSubmit() {\n    if (this.loginForm.valid) {\n      console.log(this.loginForm.value);\n    }\n  }\n        </code></pre>\n  \n        <h3>Summary of Form Types</h3>\n        <table class=\"table table-hover\">\n          <tr>\n            <th>Form Type</th>\n            <th>Usage</th>\n          </tr>\n          <tr>\n            <td>Template-driven Forms</td>\n            <td>Best for simple forms. Uses ngModel for two-way data binding.</td>\n          </tr>\n          <tr>\n            <td>Reactive Forms</td>\n            <td>Best for complex forms. Uses FormGroup and FormControl for explicit form management and validation.</td>\n          </tr>\n        </table>\n  \n        <h3>Conclusion</h3>\n        <p>Angular forms provide a powerful and flexible way to capture and validate user input. Template-driven forms are simpler and easier to implement, while reactive forms provide more control and are ideal for complex use cases. By understanding the differences and features of both types, you can choose the right approach for your Angular application\u2019s form management needs.</p>\n      ",
                isVisible: false
            },
            {
                title: 'HTTP Client in Angular',
                description: "Angular's HTTP Client module allows you to make HTTP requests to communicate with a server or external API. It provides a simplified API for making various types of HTTP requests, handling responses, and working with HTTP observables.",
                content: "\n        <h3>Introduction to HTTP Client</h3>\n        <p>The Angular HTTP client module is part of the @angular/common/http package and allows you to perform HTTP operations such as GET, POST, PUT, DELETE, and more. It makes working with external data sources in your Angular app easier and more efficient by returning observables that you can subscribe to.</p>\n        \n        <h3>Setting Up the HTTP Client</h3>\n        <p>To use the HTTP client in your Angular application, you need to import the <code>HttpClientModule</code> into your app's root module (<code>AppModule</code>).</p>\n        <pre><code>\n  import { HttpClientModule } from '@angular/common/http';\n  \n  @NgModule({\n    imports: [HttpClientModule]\n  })\n  export class AppModule { }\n        </code></pre>\n        <p>Once you\u2019ve imported <code>HttpClientModule</code>, you can inject the <code>HttpClient</code> service into your components or services to make HTTP requests.</p>\n  \n        <h3>Basic HTTP Operations</h3>\n        <p>Angular provides various methods for performing HTTP operations such as <code>GET</code>, <code>POST</code>, <code>PUT</code>, and <code>DELETE</code>. Below are examples of these operations:</p>\n        \n        <h4>1. Making a GET Request</h4>\n        <p>The <code>GET</code> method is used to fetch data from a server. The data is returned as an observable that you can subscribe to.</p>\n        <pre><code>\n  import { HttpClient } from '@angular/common/http';\n  import { Component, OnInit } from '@angular/core';\n  \n  @Component({\n    selector: 'app-root',\n    templateUrl: './app.component.html',\n    styleUrls: ['./app.component.css']\n  })\n  export class AppComponent implements OnInit {\n    data: any;\n  \n    constructor(private http: HttpClient) {}\n  \n    ngOnInit() {\n      this.http.get('https://api.example.com/data').subscribe(response => {\n        this.data = response;\n      });\n    }\n  }\n        </code></pre>\n        <p>This example fetches data from a REST API using the <code>get()</code> method of <code>HttpClient</code> and assigns the result to the <code>data</code> property in the component.</p>\n  \n        <h4>2. Making a POST Request</h4>\n        <p>The <code>POST</code> method is used to send data to a server. You can include a request body in the request.</p>\n        <pre><code>\n  this.http.post('https://api.example.com/data', { key: 'value' }).subscribe(response => {\n    console.log(response);\n  });\n        </code></pre>\n        <p>This example sends a POST request to the server with a JSON payload. The response is logged to the console.</p>\n  \n        <h4>3. Making a PUT Request</h4>\n        <p>The <code>PUT</code> method is used to update existing data on the server.</p>\n        <pre><code>\n  this.http.put('https://api.example.com/data/1', { key: 'newValue' }).subscribe(response => {\n    console.log(response);\n  });\n        </code></pre>\n        <p>This example updates the data with ID 1 on the server with the new value.</p>\n  \n        <h4>4. Making a DELETE Request</h4>\n        <p>The <code>DELETE</code> method is used to delete data from the server.</p>\n        <pre><code>\n  this.http.delete('https://api.example.com/data/1').subscribe(response => {\n    console.log('Data deleted');\n  });\n        </code></pre>\n        <p>This example sends a DELETE request to the server to remove the data with ID 1.</p>\n  \n        <h3>Handling HTTP Responses</h3>\n        <p>HTTP responses are typically handled using observables. You can subscribe to the observable and process the response inside the <code>subscribe()</code> callback.</p>\n        \n        <h4>Handling Errors</h4>\n        <p>To handle errors in HTTP requests, Angular provides an <code>error</code> callback in the <code>subscribe()</code> method or you can use the <code>catchError</code> operator in an observable chain.</p>\n        <pre><code>\n  import { catchError } from 'rxjs/operators';\n  import { of } from 'rxjs';\n  \n  this.http.get('https://api.example.com/data')\n    .pipe(\n      catchError(error => {\n        console.error('Error occurred:', error);\n        return of([]);\n      })\n    )\n    .subscribe(response => {\n      this.data = response;\n    });\n        </code></pre>\n        <p>This example catches any errors from the <code>get()</code> request and returns an empty array if an error occurs, preventing the application from crashing.</p>\n  \n        <h3>Using HTTP Headers</h3>\n        <p>You can also customize the HTTP request by adding headers. To do this, you need to create an <code>HttpHeaders</code> object and pass it as the second argument to the HTTP request method.</p>\n        <pre><code>\n  import { HttpHeaders } from '@angular/common/http';\n  \n  const headers = new HttpHeaders().set('Authorization', 'Bearer your-token');\n  this.http.get('https://api.example.com/data', { headers }).subscribe(response => {\n    console.log(response);\n  });\n        </code></pre>\n        <p>This example adds an authorization token as a header to the HTTP request.</p>\n  \n        <h3>Observables and Async Pipe</h3>\n        <p>Angular\u2019s HTTP client returns an observable that can be subscribed to. In the template, you can use the <code>async</code> pipe to automatically subscribe to the observable and manage the subscription.</p>\n        <pre><code>\n  <div *ngIf=\"data$ | async as data\">\n    <pre>{{ data | json }}</pre>\n  </div>\n        </code></pre>\n        <p>This example binds the <code>data$</code> observable to the template and automatically handles subscription and unsubscription using the <code>async</code> pipe.</p>\n  \n        <h3>Summary</h3>\n        <table class=\"table table-hover\">\n          <tr>\n            <th>HTTP Method</th>\n            <th>Description</th>\n          </tr>\n          <tr>\n            <td>GET</td>\n            <td>Fetches data from the server</td>\n          </tr>\n          <tr>\n            <td>POST</td>\n            <td>Sends data to the server to create a resource</td>\n          </tr>\n          <tr>\n            <td>PUT</td>\n            <td>Updates existing data on the server</td>\n          </tr>\n          <tr>\n            <td>DELETE</td>\n            <td>Deletes data from the server</td>\n          </tr>\n        </table>\n  \n        <h3>Conclusion</h3>\n        <p>Angular\u2019s HTTP client is a powerful tool for making HTTP requests and handling responses in your application. It simplifies the process of fetching, sending, and updating data from external APIs, and makes working with RESTful services easier by leveraging observables.</p>\n      ",
                isVisible: false
            },
            {
                title: 'Angular RxJS',
                description: "RxJS (Reactive Extensions for JavaScript) is a powerful library for reactive programming using Observables. In Angular, RxJS is used to handle asynchronous events like HTTP requests, form input, and user interactions in a more declarative and manageable way. Angular leverages RxJS to make handling asynchronous data easier and more efficient.",
                content: "\n        <h3>Introduction to RxJS</h3>\n        <p>RxJS is a library that allows you to work with asynchronous data streams using Observables. Angular uses RxJS extensively to handle data streams such as HTTP requests, events, and even time-based operations. Observables are a core part of the Angular framework, making it more efficient to manage asynchronous programming.</p>\n        \n        <h3>Setting Up RxJS in Angular</h3>\n        <p>RxJS comes pre-installed with Angular, so there's no need to install it separately. You can start using RxJS operators by importing the necessary operators from the <code>rxjs</code> package in your Angular services or components.</p>\n  \n        <h4>Basic Example: Observables</h4>\n        <p>Here's a simple example of how you can create and subscribe to an Observable in Angular.</p>\n        <pre><code>\n  import { Observable } from 'rxjs';\n  \n  const observable = new Observable(subscriber => {\n    subscriber.next('Hello');\n    subscriber.next('World');\n    subscriber.complete();\n  });\n  \n  observable.subscribe({\n    next(value) { console.log(value); },\n    complete() { console.log('Observable completed'); }\n  });\n        </code></pre>\n        <p>This example creates an Observable that emits two values, \"Hello\" and \"World,\" and then completes. The subscriber listens to these values and prints them to the console.</p>\n  \n        <h3>Common RxJS Operators</h3>\n        <p>RxJS provides many operators that help you transform, filter, and combine streams of data. Below are some of the most commonly used operators:</p>\n  \n        <h4>1. map</h4>\n        <p>The <code>map</code> operator is used to transform the emitted values of an Observable.</p>\n        <pre><code>\n  import { map } from 'rxjs/operators';\n  \n  observable.pipe(\n    map(value => value.toUpperCase())\n  ).subscribe(value => console.log(value));\n        </code></pre>\n        <p>This will transform the emitted values to uppercase before subscribing to them.</p>\n  \n        <h4>2. filter</h4>\n        <p>The <code>filter</code> operator is used to only allow values that meet certain criteria.</p>\n        <pre><code>\n  import { filter } from 'rxjs/operators';\n  \n  observable.pipe(\n    filter(value => value !== 'World')\n  ).subscribe(value => console.log(value));\n        </code></pre>\n        <p>This example filters out the value \"World\" from the emitted values.</p>\n  \n        <h4>3. mergeMap</h4>\n        <p>The <code>mergeMap</code> operator is used to flatten higher-order Observables into a single stream. It allows for concurrency when dealing with multiple Observables.</p>\n        <pre><code>\n  import { mergeMap } from 'rxjs/operators';\n  import { of } from 'rxjs';\n  \n  observable.pipe(\n    mergeMap(value => of(value, 'New Value'))\n  ).subscribe(value => console.log(value));\n        </code></pre>\n        <p>This example merges the values from the inner Observable into the output stream.</p>\n  \n        <h4>4. catchError</h4>\n        <p>The <code>catchError</code> operator is used to handle errors that occur within the Observable stream.</p>\n        <pre><code>\n  import { catchError } from 'rxjs/operators';\n  import { of } from 'rxjs';\n  \n  observable.pipe(\n    catchError(err => {\n      console.error('Error occurred:', err);\n      return of('Error handled');\n    })\n  ).subscribe(value => console.log(value));\n        </code></pre>\n        <p>This example catches any error that occurs during the Observable's execution and handles it by returning a default value.</p>\n  \n        <h3>RxJS and Angular's HTTP Client</h3>\n        <p>In Angular, RxJS is used with the HTTP Client module to handle asynchronous HTTP requests. The <code>HttpClient</code> methods return observables, and RxJS operators can be chained to these observables to transform and manage the data.</p>\n  \n        <h4>Example: HTTP GET Request with RxJS</h4>\n        <p>Here\u2019s an example of using RxJS with the Angular HTTP client to make an HTTP request and process the response.</p>\n        <pre><code>\n  import { HttpClient } from '@angular/common/http';\n  import { map, catchError } from 'rxjs/operators';\n  import { Injectable } from '@angular/core';\n  \n  @Injectable({\n    providedIn: 'root'\n  })\n  export class DataService {\n  \n    constructor(private http: HttpClient) {}\n  \n    fetchData() {\n      return this.http.get('https://api.example.com/data').pipe(\n        map(response => response['data']), // Transform data\n        catchError(error => {\n          console.error('Error occurred:', error);\n          return of([]);\n        })\n      );\n    }\n  }\n        </code></pre>\n        <p>In this example, an HTTP GET request is made to fetch data, and the response is transformed using the <code>map</code> operator. If an error occurs, it is caught by the <code>catchError</code> operator, and an empty array is returned.</p>\n  \n        <h3>Subjects in RxJS</h3>\n        <p>A <code>Subject</code> in RxJS is a special type of Observable that allows values to be multicasted to many Observers. It acts both as an Observable and an Observer.</p>\n  \n        <h4>Example: Using Subject</h4>\n        <pre><code>\n  import { Subject } from 'rxjs';\n  \n  const subject = new Subject();\n  \n  subject.subscribe(value => console.log('Observer 1:', value));\n  subject.subscribe(value => console.log('Observer 2:', value));\n  \n  subject.next('Hello');\n  subject.next('World');\n        </code></pre>\n        <p>This example demonstrates creating a Subject and multicasting values to multiple observers.</p>\n  \n        <h3>Conclusion</h3>\n        <p>RxJS is a powerful tool for managing asynchronous data streams in Angular. It allows you to manage events, data transformations, error handling, and concurrency in a declarative way, making it an essential part of the Angular framework. By mastering RxJS, you can enhance your Angular applications' performance and maintainability.</p>\n      ",
                isVisible: false
            },
            {
                title: 'Pipes in Angular',
                description: "In Angular, Pipes are used to transform data in templates. They can be used for formatting, filtering, and transforming data before it is displayed in the view. Pipes can be used for simple tasks like formatting dates or numbers, or more complex tasks like filtering lists of items.",
                content: "\n        <h3>Introduction to Pipes</h3>\n        <p>A Pipe in Angular is a simple function that can be used to transform input data to a desired output format in the view. Pipes can be applied in templates using the pipe operator (<code>|</code>). Angular provides built-in pipes, but you can also create custom pipes for specific use cases.</p>\n  \n        <h3>Built-in Pipes in Angular</h3>\n        <p>Angular comes with several built-in pipes that are commonly used for tasks like formatting dates, numbers, and currency, or filtering lists.</p>\n  \n        <h4>1. Date Pipe</h4>\n        <p>The <code>date</code> pipe formats a date according to the specified format.</p>\n        <pre><code>\n        {{ today | date:'shortDate' }}\n        </code></pre>\n        <p>This example will format the current date in the \"shortDate\" format.</p>\n  \n        <h4>2. Currency Pipe</h4>\n        <p>The <code>currency</code> pipe formats a number as a currency value.</p>\n        <pre><code>\n        {{ price | currency:'USD':true }}\n        </code></pre>\n        <p>This example formats the value of <code>price</code> as a currency, including the currency symbol \"USD\".</p>\n  \n        <h4>3. Percent Pipe</h4>\n        <p>The <code>percent</code> pipe formats a number as a percentage.</p>\n        <pre><code>\n        {{ percentage | percent }}\n        </code></pre>\n        <p>This will format the number in <code>percentage</code> as a percentage (e.g., 0.25 becomes 25%).</p>\n  \n        <h4>4. UpperCase and LowerCase Pipes</h4>\n        <p>The <code>uppercase</code> and <code>lowercase</code> pipes convert text to uppercase or lowercase, respectively.</p>\n        <pre><code>\n        {{ message | uppercase }}\n        </code></pre>\n        <p>This will convert the <code>message</code> string to uppercase letters.</p>\n  \n        <h4>5. JSON Pipe</h4>\n        <p>The <code>json</code> pipe formats an object or array as a JSON string for debugging purposes.</p>\n        <pre><code>\n        {{ data | json }}\n        </code></pre>\n        <p>This will output the object or array <code>data</code> as a JSON string in the template.</p>\n  \n        <h3>Custom Pipes in Angular</h3>\n        <p>In addition to the built-in pipes, Angular allows you to create custom pipes to handle specific data transformations. Custom pipes can be created using the <code>@Pipe</code> decorator and must implement the <code>transform</code> method to define how the data should be transformed.</p>\n  \n        <h4>Creating a Custom Pipe</h4>\n        <p>Here\u2019s an example of how to create a custom pipe that converts text to title case.</p>\n        <pre><code>\n  import { Pipe, PipeTransform } from '@angular/core';\n  \n  @Pipe({\n    name: 'titleCase'\n  })\n  export class TitleCasePipe implements PipeTransform {\n    transform(value: string): string {\n      return value\n        .split(' ')\n        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())\n        .join(' ');\n    }\n  }\n        </code></pre>\n        <p>This custom pipe splits the input string into words, capitalizes the first letter of each word, and converts the rest of the letters to lowercase.</p>\n  \n        <h4>Using the Custom Pipe</h4>\n        <p>You can use the custom pipe just like any other built-in pipe in your template:</p>\n        <pre><code>\n        {{ 'hello world' | titleCase }}\n        </code></pre>\n        <p>This will display \"Hello World\".</p>\n  \n        <h3>Pipe Chaining</h3>\n        <p>Angular allows you to chain multiple pipes together. You can apply more than one transformation to the data in a single statement by using multiple pipes.</p>\n        <pre><code>\n        {{ today | date:'shortDate' | uppercase }}\n        </code></pre>\n        <p>This example first formats the date and then converts it to uppercase.</p>\n  \n        <h3>Pure and Impure Pipes</h3>\n        <p>There are two types of pipes in Angular: pure and impure.</p>\n  \n        <h4>Pure Pipes</h4>\n        <p>A pure pipe only transforms data when the input data changes. It is more efficient because Angular only calls the pipe when the input data or the parameters to the pipe change.</p>\n  \n        <h4>Impure Pipes</h4>\n        <p>An impure pipe runs on every change detection cycle, regardless of whether the input data changes. This can be useful when the transformation relies on a value that changes frequently, such as a random number.</p>\n        <p>To create an impure pipe, set the <code>pure</code> property of the <code>@Pipe</code> decorator to <code>false</code>.</p>\n        <pre><code>\n  @Pipe({\n    name: 'random',\n    pure: false\n  })\n  export class RandomPipe implements PipeTransform {\n    transform(value: any): any {\n      return Math.random();\n    }\n  }\n        </code></pre>\n        \n        <h3>Conclusion</h3>\n        <p>Pipes are a powerful tool in Angular for transforming data in the view. They allow you to format data, filter lists, and perform various transformations without modifying the underlying data. Angular comes with several built-in pipes, and you can easily create custom pipes for your specific needs. Pipes can be chained, and understanding the difference between pure and impure pipes will help you write more efficient applications.</p>\n      ",
                isVisible: false
            },
            {
                title: 'ng-container in Angular',
                description: "The <code>ng-container</code> directive in Angular is a non-rendering container that can group elements without adding extra nodes to the DOM. It allows you to apply structural directives like <code>*ngIf</code>, <code>*ngFor</code>, and others to a group of elements without creating additional wrapper elements in the DOM.",
                content: "\n        <h3>Introduction to ng-container</h3>\n        <p>The <code>ng-container</code> is a logical container that does not create any additional DOM elements. It can be useful when you need to apply a structural directive to multiple elements or components without introducing unnecessary wrapper elements like <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>.</p>\n        \n        <h3>Use Cases for ng-container</h3>\n        <p>Here are some common scenarios where you might use <code>ng-container</code>:</p>\n        <ul>\n          <li>When using structural directives like <code>*ngIf</code>, <code>*ngFor</code>, or <code>*ngSwitch</code> on multiple elements.</li>\n          <li>When you want to conditionally render a group of elements without adding extra wrapper elements to the DOM.</li>\n          <li>For grouping elements without affecting layout or styling.</li>\n        </ul>\n  \n        <h3>Basic Example of ng-container</h3>\n        <p>Without <code>ng-container</code>, you might need to wrap elements with a <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> when applying structural directives:</p>\n        <pre><code>\n        <div *ngIf=\"isVisible\">\n          <p>Element 1</p>\n          <p>Element 2</p>\n        </div>\n        </code></pre>\n        <p>However, this introduces unnecessary HTML elements like <code>&lt;div&gt;</code> around the content. Using <code>ng-container</code> avoids this:</p>\n        <pre><code>\n        <ng-container *ngIf=\"isVisible\">\n          <p>Element 1</p>\n          <p>Element 2</p>\n        </ng-container>\n        </code></pre>\n        <p>In this example, <code>ng-container</code> doesn't add any extra wrapper around the <code>&lt;p&gt;</code> elements in the DOM.</p>\n  \n        <h3>ng-container with *ngFor</h3>\n        <p>Another common use case for <code>ng-container</code> is when using <code>*ngFor</code> to loop over an array of items. Here is an example:</p>\n        <pre><code>\n        <ng-container *ngFor=\"let item of items\">\n          <div>{{ item.name }}</div>\n          <span>{{ item.description }}</span>\n        </ng-container>\n        </code></pre>\n        <p>In this case, <code>ng-container</code> wraps the elements inside the loop without adding additional DOM elements for each iteration.</p>\n  \n        <h3>ng-container with *ngIf and *ngFor</h3>\n        <p>You can also combine multiple structural directives like <code>*ngIf</code> and <code>*ngFor</code> with <code>ng-container</code>. However, remember that you cannot apply two structural directives to the same element, so <code>ng-container</code> is useful to combine them:</p>\n        <pre><code>\n        <ng-container *ngIf=\"isVisible\">\n          <ng-container *ngFor=\"let item of items\">\n            <div>{{ item.name }}</div>\n            <span>{{ item.description }}</span>\n          </ng-container>\n        </ng-container>\n        </code></pre>\n        <p>In this example, the <code>*ngIf</code> and <code>*ngFor</code> directives are applied without adding extra wrapper elements to the DOM.</p>\n  \n        <h3>Benefits of Using ng-container</h3>\n        <p>The main benefits of using <code>ng-container</code> include:</p>\n        <ul>\n          <li><strong>No additional DOM elements:</strong> It doesn\u2019t introduce extra HTML elements into the DOM, which keeps the structure clean and efficient.</li>\n          <li><strong>Performance:</strong> Since <code>ng-container</code> does not render any elements, it does not affect performance.</li>\n          <li><strong>Cleaner code:</strong> It allows you to group multiple elements without the need for unnecessary wrappers like <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>.</li>\n        </ul>\n  \n        <h3>Example: ng-container with ngSwitch</h3>\n        <p>In some cases, you may need to use <code>ng-container</code> with <code>ngSwitch</code> for conditional rendering. Here\u2019s how you can use it:</p>\n        <pre><code>\n        <div [ngSwitch]=\"selectedTab\">\n          <ng-container *ngSwitchCase=\"'home'\">\n            <p>Home Tab</p>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'profile'\">\n            <p>Profile Tab</p>\n          </ng-container>\n          <ng-container *ngSwitchDefault>\n            <p>Default Tab</p>\n          </ng-container>\n        </div>\n        </code></pre>\n        <p>Here, we use <code>ng-container</code> to group elements under <code>ngSwitchCase</code> and <code>ngSwitchDefault</code> without adding extra DOM elements.</p>\n  \n        <h3>Conclusion</h3>\n        <p>In Angular, the <code>ng-container</code> directive is a powerful tool that helps you group elements logically without introducing extra elements in the DOM. It is especially useful when applying multiple structural directives or when you want to avoid unnecessary HTML wrappers around content. This helps improve the readability, performance, and structure of your Angular templates.</p>\n      ",
                isVisible: false
            },
            {
                title: 'Dependency Injection in Angular',
                description: "Dependency Injection (DI) is a design pattern used to implement IoC (Inversion of Control), allowing Angular to manage the lifecycle and dependencies of services and components. Angular\u2019s DI system is used to create and inject instances of services and other dependencies into Angular components, directives, pipes, and other services.",
                content: "\n        <h3>What is Dependency Injection?</h3>\n        <p>In Dependency Injection, objects or services are not created by the class that needs them but are instead injected by an external source (usually the Angular framework itself). This helps in decoupling the application\u2019s components, making them easier to manage, test, and maintain.</p>\n  \n        <h3>How Dependency Injection Works in Angular</h3>\n        <p>Angular\u2019s Dependency Injection system works by providing instances of services to components, directives, or other services as needed. Angular's injector is responsible for creating and managing service instances and injecting them into the classes that need them.</p>\n  \n        <h3>Example: Basic Dependency Injection</h3>\n        <p>Let's start with an example where we inject a simple service into a component:</p>\n        <pre><code>\n        // service: greeting.service.ts\n        import { Injectable } from '@angular/core';\n        \n        @Injectable({\n          providedIn: 'root',\n        })\n        export class GreetingService {\n          getGreeting() {\n            return 'Hello, Angular!';\n          }\n        }\n        </code></pre>\n  \n        <p>Now, we inject this service into a component:</p>\n        <pre><code>\n        // component: app.component.ts\n        import { Component } from '@angular/core';\n        import { GreetingService } from './greeting.service';\n        \n        @Component({\n          selector: 'app-root',\n          templateUrl: './app.component.html',\n          styleUrls: ['./app.component.css']\n        })\n        export class AppComponent {\n          constructor(private greetingService: GreetingService) { }\n        \n          getMessage() {\n            return this.greetingService.getGreeting();\n          }\n        }\n        </code></pre>\n  \n        <h3>Injecting Services into Components</h3>\n        <p>In the above example, the <code>GreetingService</code> is injected into the <code>AppComponent</code> via its constructor. The service is then used to fetch a greeting message inside the component. This injection happens automatically by Angular's DI system.</p>\n  \n        <h3>Providers and Injectors</h3>\n        <p>Angular uses a hierarchical dependency injection system. Every Angular module has its own injector. Providers are responsible for specifying how Angular should create and inject services. You can configure providers in the component\u2019s metadata or module\u2019s <code>@NgModule</code> decorator.</p>\n  \n        <h3>Example of Configuring Providers</h3>\n        <p>Providers can be configured at different levels in Angular:</p>\n        <ul>\n          <li><strong>Root Level:</strong> In the <code>@Injectable</code> decorator using <code>providedIn: 'root'</code>. This makes the service available throughout the app.</li>\n          <li><strong>Module Level:</strong> In the <code>providers</code> array of the <code>@NgModule</code> decorator.</li>\n          <li><strong>Component Level:</strong> In the <code>providers</code> array of a specific component.</li>\n        </ul>\n        \n        <pre><code>\n        @Injectable({\n          providedIn: 'root',\n        })\n        export class MyService { ... }\n        </code></pre>\n  \n        <h3>Using Different Types of Providers</h3>\n        <p>There are different ways to configure providers in Angular:</p>\n        <ul>\n          <li><strong>Class Providers:</strong> The default provider, which uses a class for dependency injection.</li>\n          <li><strong>Value Providers:</strong> Provides a simple value instead of a class.</li>\n          <li><strong>Factory Providers:</strong> Provides an instance based on a function.</li>\n          <li><strong>Existing Providers:</strong> Allows you to alias one provider to another.</li>\n        </ul>\n  \n        <h3>Example: Using Factory Providers</h3>\n        <p>Here is an example of using a factory provider:</p>\n        <pre><code>\n        export function loggerFactory() {\n          return new LoggerService();\n        }\n  \n        @NgModule({\n          providers: [\n            { provide: LoggerService, useFactory: loggerFactory }\n          ]\n        })\n        export class AppModule { }\n        </code></pre>\n  \n        <h3>Injecting Dependencies into Services</h3>\n        <p>In Angular, services can also have dependencies. These dependencies can be injected into services just as they are injected into components.</p>\n  \n        <pre><code>\n        // Service with another injected service\n        import { Injectable } from '@angular/core';\n        import { LoggerService } from './logger.service';\n        \n        @Injectable({\n          providedIn: 'root',\n        })\n        export class DataService {\n          constructor(private logger: LoggerService) {}\n          \n          logMessage(message: string) {\n            this.logger.log(message);\n          }\n        }\n        </code></pre>\n  \n        <h3>Using DI in Angular Modules</h3>\n        <p>Services can be provided in Angular modules as well. By configuring the provider in the module's <code>@NgModule</code> decorator, the service will be available to all components in that module.</p>\n  \n        <pre><code>\n        @NgModule({\n          providers: [MyService]\n        })\n        export class MyModule { }\n        </code></pre>\n  \n        <h3>Benefits of Dependency Injection</h3>\n        <ul>\n          <li><strong>Loose Coupling:</strong> Components and services are decoupled, making the application easier to manage and test.</li>\n          <li><strong>Testability:</strong> Since dependencies are injected, it\u2019s easy to mock dependencies in tests.</li>\n          <li><strong>Reusability:</strong> Services can be reused across multiple components, reducing code duplication.</li>\n          <li><strong>Improved Maintainability:</strong> Changes to services are easily propagated across components that depend on them.</li>\n        </ul>\n  \n        <h3>Conclusion</h3>\n        <p>Dependency Injection in Angular simplifies how components and services interact by allowing the framework to manage the creation and injection of services. This leads to more maintainable, testable, and decoupled code. Angular\u2019s DI system is one of the core features that enable scalable and robust applications.</p>\n      ",
                isVisible: false
            }
        ];
    }
    TutorialComponent.prototype.ngOnInit = function () {
    };
    TutorialComponent.prototype.toggleContent = function (index) {
        this.sections[index].isVisible = !this.sections[index].isVisible;
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