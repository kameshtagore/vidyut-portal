import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // open http://localhost:4200/assets/data.json
  data = {
    "line1" : "Hey! I'm Vidyuth", 
    "line2" : "A college student, lifelong learner and emerging life adventurer."
  }


  constructor() { }

  ngOnInit(): void {
  }



}
