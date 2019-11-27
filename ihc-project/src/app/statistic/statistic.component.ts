import { Component, OnInit } from '@angular/core';
import { PoDonutChartSeries, PoChartType, PoChartGaugeSerie } from '@portinari/portinari-ui';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html'
})
export class StatisticComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public teamsPerCountry: Array<PoDonutChartSeries> = [    
    { category: 'Brasil', value: 3, tooltip: 'Brasil' },
    { category: 'Argentina', value: 6, tooltip: 'Argentina' },
    { category: 'Colômbia', value: 2, tooltip: 'Colômbia' },
    { category: 'Paraguai', value: 1, tooltip: 'Paraguai' },
    { category: 'Uruguai', value: 2, tooltip: 'Uruguai' }    
  ];
  
  public teamsPerCountryChartType: PoChartType = PoChartType.Donut;

  public teamSupporters: PoChartGaugeSerie = 
    { value: 89, description: 'das torcidas latinas possuem barras-bravas que fazem a festa na arquibancada' };

  public teamSupportersChartType: PoChartType = PoChartType.Gauge;
  

}
