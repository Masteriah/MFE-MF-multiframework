import { Component } from '@angular/core';
import { CustomRemoteConfig } from './utils/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shell';
  
  remotes: CustomRemoteConfig[] = [];

  constructor() {}
}
