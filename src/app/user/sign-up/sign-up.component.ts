import { Component,  OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {
  signUpForm:NgForm;
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
  }

}
