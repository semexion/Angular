import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataPointService } from '../data-point.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() user: User;

  constructor(private Data: DataPointService) {}

  ngOnInit() {}

  setUser() {
    this.Data.setUser(this.user);
  }
}
