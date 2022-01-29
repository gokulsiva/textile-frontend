import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user = {
    name: '',
    position: ''
  };
  isUserAdded = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  // Add New
  addUser(): void {
    const data = {
      name: this.user.name,
      position: this.user.position
    };
    if (!data.name) {
      alert('Please add name!');
      return;
    }

    this.userService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.isUserAdded = true;
        },
        error => {
          console.log(error);
        });
  }

  // Reset on adding new
  newUser(): void {
    this.isUserAdded = false;
    this.user = {
      name: '',
      position: ''
    };
  }

}
