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
    { label: 'Países e Times', action: this.onCountryClick.bind(this) },
    { label: 'Estatísticas', action: this.onStatisticClick.bind(this) },
    { label: 'Sobre', action: this.onAboutClick.bind(this) },
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

  private onStatisticClick() : void {
    this._router.navigate(['statistic']);
  }

  private onAboutClick() : void {
    this._router.navigate(['about']);
  }

}
