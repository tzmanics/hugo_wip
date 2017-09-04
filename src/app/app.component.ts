import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  hueApi: string = "http://192.168.0.103/api";
  lights: {};

  constructor(private http: HttpClient) {}

  subscribe() {
    this.http.post(this.hueApi, { "devicetype":"u_go_hue_go#web tzmanics"})
      .subscribe(res => console.log(res));
  }

  getAllLights() {
    console.log("GET");
    let url = `${this.hueApi}/lights`;
    this.http.get(url).subscribe(res => {
      this.lights = res;
      console.log("lights" + this.lights);
    });
  }

  ngOnInit(): void {}
}