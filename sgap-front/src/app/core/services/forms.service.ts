import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  form!: FormGroup;

  constructor() { }

  getForm(){
    return this.form;
  }

  setForm(form: FormGroup){
    this.form = form;
  }
}
