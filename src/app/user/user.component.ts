import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserData } from '../user';
import {  HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  providers: [UserService],
  imports: [ HttpClientModule,ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user!:UserData;
  userForm!: FormGroup;
  info:string="";
  constructor(private userService: UserService, private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.userService.getData().subscribe((data: UserData[]) => {
      this.user = data[0];
      this.info="Данные полученны"
      this.userForm = this.formBuilder.group({
        first_name: [this.user.first_name],
        last_name: [this.user.last_name],
        email: [this.user.email],
        phone_number: [this.user.phone_number],
        password: [this.user.password],
        password_confirmation: [this.user.password_confirmation],
        data_processing_consent: [this.user.data_processing_consent]
      });      
    });
  }

  onSubmit() {
    this.userService.saveData(this.userForm.value).subscribe(response => {
      console.log(response);
      this.info=response.message
    });
  }
  
  
  ngOnDestroy(){
    
  }
}
