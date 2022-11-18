import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidationErrors } from "@angular/forms";
import { ReactiveComponent } from './reactive.component';

describe('ReactiveComponent', () => {
  let component: ReactiveComponent;
  let fixture: ComponentFixture<ReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });
  it('email field validity', () => {
    let errors :ValidationErrors = {};
    let email = component.registerForm.controls['email'];
    expect(email.valid).toBeFalsy();

    // Email field is required
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to something
    email.setValue('test');
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeTruthy();

    // Set email to something correct
    email.setValue('test@example.com');
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeFalsy();
  });
  it('userfullname field validity', () => {
    let errors :ValidationErrors = {};
    let userfullname = component.registerForm.controls['userfullname'];
    expect(userfullname.valid).toBeFalsy();

    // UserFullName field is required
    errors = userfullname.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set UserFullName to something
    userfullname.setValue('test');
    errors = userfullname.errors || {};
    expect(errors['required']).toBeFalsy();
  });
  it('address field validity', () => {
    let errors :ValidationErrors = {};
    let address = component.registerForm.controls['address'];
    expect(address.valid).toBeFalsy();

    // Address is required
    errors = address.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set Address to something
    address.setValue('test');
    errors = address.errors || {};
    expect(errors['required']).toBeFalsy();
  });
  it('zipcode field validity', () => {
    let errors :ValidationErrors = {};
    let zipcode = component.registerForm.controls['zipcode'];
    expect(zipcode.valid).toBeFalsy();

    // ZipCode field is required
    errors = zipcode.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set ZipCode to something
    zipcode.setValue('abc32');
    errors = zipcode.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();

    // Set ZipCode to something correct
    zipcode.setValue('20171');
    errors = zipcode.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
  });
});
