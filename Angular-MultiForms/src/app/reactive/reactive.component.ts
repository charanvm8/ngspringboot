import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  registerForm!:FormGroup
  submmitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Validations
    this.registerForm = this.formBuilder.group({
      userfullname:['', Validators.required],
      email:['', [Validators.email, Validators.required]],
      address:['', Validators.required],
      zipcode:['', [Validators.pattern('[0-9]{5}'), Validators.required]],
    })
  }

  onSubmit() {
    this.submmitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    alert(JSON.stringify(this.registerForm.value));
  }

}
