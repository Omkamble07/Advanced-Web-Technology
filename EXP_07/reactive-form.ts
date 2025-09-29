import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm {

  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl("", [Validators.required]),
    userName: new FormControl("", [Validators.required]),
    terms: new FormControl(false, Validators.requiredTrue)  
  });

  formvalue: any;

  onSubmit() {
    if (this.studentForm.valid) {
      this.formvalue = this.studentForm.value;
      console.log(this.formvalue);
      alert("Form Submitted Successfully!");
    } else {
      this.studentForm.markAllAsTouched(); 
    }
  }
}
