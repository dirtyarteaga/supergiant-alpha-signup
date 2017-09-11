import { Component } from '@angular/core';

import {Validators, FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from 'ng-formly';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'

    user = {
      email: '',
      invite: '',
    };

  form: FormGroup = new FormGroup({});
   userFields: FormlyFieldConfig = [{
     fieldGroup: [{
         key: 'email',
         type: 'input',
         templateOptions: {
             type: 'email',
             label: 'Email address*',
             placeholder: 'Email Address'
         },
         validators: {
           validation: Validators.compose([Validators.required])
         }
     }, {
         key: 'invite',
         type: 'input',
         templateOptions: {
             type: 'string',
             label: 'Invite Code*',
             placeholder: 'INVITECODE',
             pattern: ''
         },
         validators: {
           validation: Validators.compose([Validators.required])
         }
     }]
   }];
}
