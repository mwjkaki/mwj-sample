import { Component, OnInit } from '@angular/core';
import { DateAdapter, NativeDateAdapter } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

export class MyDateAdapter extends NativeDateAdapter {
  getDateNames(): string[] {
    const dateNames: string[] = [];
    for (let i = 0; i < 31; i++) {
      dateNames[i] = String(i + 1);
    }
    return dateNames;
  }
}

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  providers: [
    {provide: DateAdapter, useClass: MyDateAdapter}
  ]

})
export class SearchformComponent implements OnInit {
  soukoCtrl = new FormControl('', [Validators.required]);
  souko = [
    {value: '001', viewValue: '朝来倉庫'},
    {value: '002', viewValue: '本社'},
    {value: '003', viewValue: '水道橋'},
    {value: '004', viewValue: '灰塚'}
  ];
  constructor(dateAdapter: DateAdapter<NativeDateAdapter>) {
    dateAdapter.setLocale('jp-JA');
  }
  ngOnInit() {
  }
}
