# Datepicker on angular 2 in forms

I have read in several forum people having problem integrating in Forms, Datepicker Angular2. So i decided to post an example of a solution that could be use.




## Prerequise

I'm using for this exercise:
- Angular 2.4.5
- Express server
- ng2-bootstrap

So the installation of the package is required :
> npm install

To launch the server
> npm run start

To launch the angular
> npm run build

Access to the website
http://locahost:3000

## The template driven
### How does it work?
The exercise is to fill a project description form

#### Interface
the interface structure the project form (project.model.ts)

so a formatted variable can be re-used when initializing the component (OnInit)

#### the form
The binding is typical for most of the input, or select items
Except for the datePicker that doesn't accept the standard form binding

#### the datePicker
The variable and datePicker thanks to [(ngModel)]= "project.startDate"
the trick is to create an HIDDEN input component (type:HIDDEN). While datePicker is not bind to the form, this hidden composant is. The 2-way binding do the magic and as soon as a date is click on a calendar, it appears inside in the form with the same value

For the purpose of the exercise, I set as "required" this hidden component: the form is waiting for a date to be picked 

Also you can configure datePicker to Achieve some more rules:
- the End Date should finish after the start Date
by setting a rule "minDate" parameters to the second calendar (endDate) then you disallow the to pickup earlier date than ... the startDate for example.


### Summary
This small code allows you to create a template driven Form using 2 datePickers some basic rules


References:
About datePicker
http://www.dotnetcurry.com/angular/1345/angular2-datepicker-bootstrap-tutorial

About template driven form and validators
https://scotch.io/tutorials/using-angular-2s-template-driven-forms
https://scotch.io/tutorials/how-to-implement-a-custom-validator-directive-confirm-password-in-angular-2

About model drivent form
https://toddmotto.com/angular-2-forms-reactive#simplifying-with-formbuilder