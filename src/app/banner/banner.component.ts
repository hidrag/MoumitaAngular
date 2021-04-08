import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.styl']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public imgUrl(){
    return "../../assets/img/1920x1080/01.jpg";
  }
  public image = "../../assets/img/1920x1080/01.jpg";
}
