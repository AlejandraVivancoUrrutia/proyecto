import { Component } from '@angular/core';

import datasnk from 'src/assets/json/snk.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'arbol-angular';

  data: any = datasnk;
}
