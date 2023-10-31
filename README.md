Angular Core Deep Dive (Video Course)

Install CLI locally

    npm install @angular/cli
    npm run-script ng generate component course-card

- The template mechanism reflects modifications done to the data in a secure way (the interpolation sintax in the template evaluates only strings). Example: to insert a script in the input field doesn't succed <script>alert('attack')</script> 
```
<input [value]="inputValue" (keyup)="changeInput(inputRef.value)" #inputRef>
```
- @Input syntax (also used for accessing the dom properties, e.i. [src], [class.is-even], [style.underline])
- Event handlers and event listeners:
    - standard events bubble up. The event handlers in the children and event listeners in the parents have the same template sintax: (click)="function()"
    - custom events don't bubble and therefore have to be emitted in the children with an event handler e.i (click)="function()" with the @Output decorator. The listener in the parent must have the name emitted with the @Output decorator
- *ngFor and its auxiliary features (index,first,last,odd,even)
- *ngIf and else clause. NgIf accepts strings, objects, booleans, functions and convert them to booleans
- [ngClass] (most used) directive used to add or remove classes to the component depending on the data
- [ngStyle] (rerely used) directive used to add or remove styles to the component depending on the data
- [ngSwitch] followed by *ngSwitchCase to verify more conditions than *ngIf (2) 
- *ng-container to apply structural directives if there is not parent available (instead of using a div element)
- built-in pipes
- Template queries @ViewChild and @ViewChildren evaluated with AfterViewInit lifecicle hook
- Content projection with <ng-content select="html element / css class">
- Content projected queries @ContentChild and @ContentChildren evaluated with AfterContentInit lifecicle hook
- <ng-template #noImage let-courseName="description"> passed to a child component as @Input and instantiated with *ngTemplateOutlet and its context