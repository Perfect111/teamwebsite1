import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-us-can-switcher',
  templateUrl: './us-can-switcher.component.html',
  styleUrls: ['./us-can-switcher.component.scss']
})

export class UsCanSwitcherComponent implements OnInit {
  _us = '';  
  @Input() set us(us: string){
    this._us = us;
  }
  @Input() set canada(canada: string){
    this._canada = canada;
  }
  
   _canada = '';
  constructor() { }

  ngOnInit() {
  }

}
