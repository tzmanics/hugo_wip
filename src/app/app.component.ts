import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

export class AppComponent implements OnInit {
  username: string = "<insert username";
  hueApi: string = `http://192.168.0.103/api/${this.username}/lights`;
  lights: string[];

  constructor(private http: HttpClient) {}

  lightSwitch(lightNumber, lightState){
    this.http.put(`${this.hueApi}/${lightNumber}/state`, { "on": lightState })
    .subscribe(
      data => { console.log(data); },
      err => { console.log('Something went wrong!'); } 
    );
  }

  lightBright(lightNumber, briValue ){
    this.http.put(`${this.hueApi}/${lightNumber}/state`, { "bri": briValue })
    .subscribe(
      data => { console.log(data); },
      err => { console.log('Something went wrong!'); } 
    );
  }

  ngOnInit(): void {
    this.http.get(this.hueApi)
    .subscribe(
      data => { this.lights = Object.keys(data).map(key => data[key]); },
      err => { console.log('Something went wrong!'); }
    );
  }
}