import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageInterface } from '@nx-angular-nest-mysql/my-ts-lib';

@Component({
  selector: 'nx-angular-nest-mysql-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<MessageInterface>('/api/messages/get/randomMessage');
  constructor(private http: HttpClient) {}
}
