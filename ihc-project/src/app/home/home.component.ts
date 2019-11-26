import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public readonly slides : Array<any> = [
    {
      title: 'River Plate - Los Borrachos del Tablón',
      description: 'Um recebimento incrível! Nada mais justo que na semifinal da Libertadores ter esse recebimento, não?',
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

    ngOnInit() {
    }

    public onLinkClick(link : string){
      window.open(link, '_blank');
    }

}
