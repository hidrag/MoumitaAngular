import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.styl']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  root_path(){
    return "../../assets/";
  }
}
