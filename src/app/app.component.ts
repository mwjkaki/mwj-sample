import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor() { }
　pages = { search:'在庫検索',result:'在庫情報' };
　name:string = this.pages[window.location.pathname.replace('/','')];
　ngOnInit() {

  }

}
