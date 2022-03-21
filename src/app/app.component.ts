import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ui';
  apiPath = 'https://localhost:5001/api/Users';
  list: any;

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http.get(this.apiPath)
      .subscribe(values => {
        this.list = values
      });
  }


}
