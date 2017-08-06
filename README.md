# using Datepicker on angular 2 in template driven forms

I have read in several forum people having problem integrating in Forms, Datepicker Angular2. So i decided to post an example of a solution that could be used.

At the end, you will find some links to understand better how datePicker and forms can be configured.

## Prerequise

I'm using for this exercise:
- Angular 2.4.5
- Express server
- ng2-bootstrap for the datePicker

So the installation of packages is required :
> npm install

To launch the server
> npm run start

To launch the angular
> npm run build

Access to the website
http://locahost:3000

## The template driven form
### How does it work?
The exercise, here, is to create a project description form using datePicker of course

#### Interface
The interface structures the project form (project.model.ts)

... so a formatted variable can be re-used throughout the program and specially during initialisation of the component (OnInit)

#### Form
The binding is typical for most of the input, or select items.

However datePicker that doesn't accept the standard form binding.

#### datePicker
To allow the date Picker to work properly, I use an option to avoid any error. The datePicker is now "stand alone". however I'm interested to use information, two fold : 1. setting dates, 2. getting dates. So i will setup a 2way-binding [(ngModel)] = "project.startDate" or "project.endDate"

The trick is to create an HIDDEN input component (type:HIDDEN) for each datePicker element. While datePicker is not bind to the form, this hidden composant is. The 2-way binding do the magic and as soon as a date is clicked on a calendar, it appears inside in the form with the same value

For the purpose of the exercise, I set as "required" this hidden component: the form is waiting for a date to be picked in order to be validated

Also you can configure datePicker to achieve some more rules:
- the End Date should be after the start Date

By setting a rule "minDate" parameters to the second datePicker (endDate) then the user will not be able to pickup an earlier date than ... the startDate for example. [minDate] = "project.startDate"

## Summary
This small code allows you to create a template driven Form using 2 datePickers some basic rules
Hope this helps!

## References:
_About datePicker_

http://www.dotnetcurry.com/angular/1345/angular2-datepicker-bootstrap-tutorial

_About template driven form and validators_

https://scotch.io/tutorials/using-angular-2s-template-driven-forms

https://scotch.io/tutorials/how-to-implement-a-custom-validator-directive-confirm-password-in-angular-2

_About model driven form_

https://toddmotto.com/angular-2-forms-reactive#simplifying-with-formbuilder
