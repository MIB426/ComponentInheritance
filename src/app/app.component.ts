import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages: string[] = [];

  gatherCount(message) {
    this.messages.push(message);
  }

  gatherPage(pageNo) {
    this.messages.push(`I am at page ${pageNo} now.`);
  }
}
