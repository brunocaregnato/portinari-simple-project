import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@portinari/portinari-ui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor(private _router: Router){}

  public readonly menus: Array<PoMenuItem> = [
    { label: 'Início', action: this.onHomeClick.bind(this) },
    { label: 'Torcidas', action: this.onCountryClick.bind(this) }
  ];

  ngOnInit(){
    this.onHomeClick();
  }

  private onHomeClick() : void {
    this._router.navigate(['home']);
  }

  private onCountryClick() : void {
    this._router.navigate(['country']);
  }
}
