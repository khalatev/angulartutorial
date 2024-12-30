import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  
  sections = [
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
      isVisible:false
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
      isVisible:false
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
      isVisible:false
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
      isVisible:false
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
      isVisible:false
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
      isVisible:false
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
      isVisible:false
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
      isVisible:false
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
      isVisible:false
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  toggleContent(index: number) {
    this.sections[index].isVisible = !this.sections[index].isVisible;
  }
}
