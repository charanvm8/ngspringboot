import { Component, OnInit } from '@angular/core';
import { UserRegistration } from './UserRegistration';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  submitted = false;
  model = new UserRegistration('', '', '', '');
  constructor() {}

  ngOnInit(): void {}

  onSubmit(userreg: any) {
    this.submitted = true;
    alert(JSON.stringify(userreg.value));
  }
}
