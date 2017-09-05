import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

export class AppComponent implements OnInit {
  username: string = "<insert username>";
  hueApi: string = `http://192.168.0.103/api/${this.username}`;
  lights: string[];

  constructor(private http: HttpClient) {}

  lightOn(){}
  lightOff(){}

  ngOnInit(): void {
    this.http.get(`${this.hueApi}/lights`)
    .subscribe(res => {
      this.lights = Object.keys(res).map(key => res[key]);
      console.log(this.lights);
    });
  }
}