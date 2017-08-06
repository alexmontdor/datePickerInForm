import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],

})

export class AppComponent implements OnInit{
    project: Project;

    constructor() { }
    
    initProject() {
        this.project = {
            name: "",
            description:'',
            startDate: new Date(),
            endDate: null,
            type: null
        }
    }

    onClear(f) {
        f.form.reset();
    }

    onSubmit (model:Project) {
        alert(JSON.stringify(model, null, '\t'))
    }

    ngOnInit(): void {
        this.initProject()
    }
}