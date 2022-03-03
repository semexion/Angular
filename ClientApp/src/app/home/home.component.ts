import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataPointService } from '../data-point.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  users: Observable<any> | undefined;
  user: User = new User('noname', 0);

  constructor(private Data: DataPointService) {}

  ngOnInit() {
    this.users = this.Data.getUsers();
  }

  setUser() {
    this.Data.setUser(this.user);
  }
}
