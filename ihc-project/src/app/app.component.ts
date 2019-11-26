import { Component } from '@angular/core';
import { PoMenuItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public readonly menus: Array<PoMenuItem> = [
    { label: 'Início', action: this.onBeginClick.bind(this) },
    { label: 'Torcidas', action: this.onCountryClick.bind(this) }
  ];

  public slides : Array<any> = [
    {
      title: 'River Plate - Los Borrachos del Tablón',
      description: 'Um recebimento incrível! Nada mais justo que na final da Libertadores ter esse recebimento, não?',
      imagem: '/assets/river.jpg', 
      link: 'https://www.youtube.com/watch?v=TUb-csYqCWI'
    },
    {
      title: 'Celtic - Celtic Fans',
      description: 'Uma demonstração de torcida! A torcida do Celtic se fez presente a milhares de KM de distância.',
      imagem: '/assets/celtic.jpg', 
      link: 'https://www.youtube.com/watch?v=gJ-xSCEGryk'
    },
    {
      title: 'Boca Juniors - La 12',
      description: 'Um grande alento na arquibancada! A torcida do Boca Juniors como sempre impondo respeito.',
      imagem: '/assets/boca.jpg',
      link: 'https://www.youtube.com/watch?v=prHW3Urm1EU'
    }];

  private onBeginClick() : void {

  }

  private onCountryClick() : void {

  }

  public onLinkClick(link : string){
    window.open(link, '_blank');
  }

}
