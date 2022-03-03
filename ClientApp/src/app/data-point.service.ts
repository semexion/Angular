import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';
import { InformerComponent } from './informer/informer.component';

@Injectable({
  providedIn: 'root',
})
export class DataPointService {
  baseUrl: string = '';
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public getUsers(): Observable<User[]> {
    return this.http.get('assets/users.json').pipe(
      map((data: any) => {
        let usersList = data['userList'];
        return usersList.map(function (user: any): User {
          console.log(user.name);
          return new User(user.name, user.age);
        });
      })
    );
  }

  public setUser(user: User) {
    this.http.post(this.baseUrl + 'weatherforecast', user).subscribe();
  }
}
