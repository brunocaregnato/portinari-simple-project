import { Component, OnInit } from '@angular/core';
import { PoTableColumn, PoRadioGroupOption } from '@portinari/portinari-ui';
import { SearchUtils } from '../utils/search.utils';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor() { }

  public readonly columnsList: Array<PoTableColumn> = [
    { property: 'country', label: 'País' },
    { property: 'team', label: 'Time' },
    { property: 'supporters', label: 'Torcida' }
  ];

  public readonly filterOption: Array<PoRadioGroupOption> = [
    { label: 'Time', value: 'team' },
    { label: 'País', value: 'country' }
  ];
  
  public itemsList: Array<any> = [];
  public optionFilter: string;

  private getItems() {
    return [
      {
        country: 'Brasil',
        team: 'Juventude',
        supporters: 'Os Loucos da Papada'
      },
      {
        country: 'Argentina',
        team: 'Banfield',
        supporters: 'La Banda del Taladro'
      },
    ];
  }

  ngOnInit() {   
    this.optionFilter = 'Time';
    this.itemsList = this.getItems(); 
  }

  public getFilterList(filter: any){
    this.itemsList = SearchUtils.getFilter(filter, this.itemsList, this.getItems(), this.optionFilter);
  }

  public changeOptionFilter(value: string){
    this.optionFilter = value;
  }
}
