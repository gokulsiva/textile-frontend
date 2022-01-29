import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: any;
  currentUser:any;
  currentIndex = -1;
  //searchTitle = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  // Get list
  getAllUsers(): void {
    this.userService.list()
      .subscribe(
        (users: any) => {
          this.users = users;
        },
        (error: any) => {
          console.log(error);
        });
  }

  // Delete action
  deleteUser(id:number){
    this.userService.delete(id)
    .subscribe(
      response => {
        this.getAllUsers();
      },
      error => {
        console.log(error);
      });
  }

  // Search items
  // searchByTitle(): void {
  //   this.userService.filterByTitle(this.searchTitle)
  //     .subscribe(
  //       books => {
  //         this.books = books;
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

}