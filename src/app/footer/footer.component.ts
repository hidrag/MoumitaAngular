import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.styl']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public image = "../../assets/img/logo-dark.png";
}
