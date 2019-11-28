import { Component, OnInit } from '@angular/core';
import { PoTableColumn, PoRadioGroupOption } from '@portinari/portinari-ui';
import { SearchUtils } from '../utils/search.utils';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html'
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
        supporters: 'Os Loucos da Papada',
        description: `A "Torcida Loucos da Papada" foi fundada em Janeiro de 2008 
        por alguns ex integrantes da torcida Mancha Verde com o intuito de 
        apoiar ainda mais o seu time. Seu estilo de "cantar" se intitula 
        como Barra Brava que é um tipo de movimento de torcedores de esportes 
        muito popular na América Latina, conhecida por incentivar suas equipes 
        com cantos intermináveis.`,
        image: '/assets/juventude.jpg'
      },
      {
        country: 'Argentina',
        team: 'Banfield',
        supporters: 'La Banda del Taladro',
        description: `A torcida do Banfield ficou conhecida por se aglomerar ao sul do estádio,
        e com isso foi pegando a alcunha.`,
        image: '/assets/banfield.jpg'
      },
      {
        country: 'Brasil',
        team: 'Grêmio',
        supporters: 'Geral do Grêmio',
        description: `A Geral do Grêmio foi a precursora dos movimentos barra brava no Brasil. 
        Influenciados por ela, surgiram dezenas de outros movimentos de torcedores 
        de grandes clubes de futebol brasileiros. Seus cânticos são, em grande parte, adaptados 
        de ritmos famosos na Argentina e Uruguai, assim como fazem as torcidas destes 
        respectivos países. São, também, adaptações de músicas gaúchas famosas, 
        como "Eu sou do Sul", "Bebendo Vinho", "Amigo Punk" e etc. A torcida costuma se 
        posicionar em volta do portão 10, atrás do gol da avenida Cascatinha - 
        hoje avenida Oswaldo Rolla - à direita das cabines de imprensa.`,
        image: '/assets/gremio.jpg'
      },
      {
        country: 'Colômbia',
        team: 'Atlético Nacional',
        supporters: 'Los del Sur',
        description: `Em 1992, foi criado o primeiro grupo de fãs do Escândalo Verde que 
        queriam fazer algo diferente para incentivar o Atletismo Nacional.
        Eles pegaram algumas bandeiras e camisetas que levaram ao estádio, continuaram fazendo 
        o escândalo, mas não usavam a camisa do bar, tinham suas bandeiras e camisas, e até 
        pegaram algumas músicas que cantaram dentro do bar. A maioria das músicas não gostava 
        do estilo sulista, mas havia outras que o Escândalo ajustou ao estilo dela e começou a cantar.`,
        image: '/assets/atletico_nacional.jpg'
      },
      {
        country: 'Uruguai',
        team: 'Peñarol',
        supporters: 'Barra Amsterdam',
        description: `As bravas uruguaias são muito parecidas com a Argentina por causa de suas criações 
        quase simultâneas. As fontes de financiamento são as mesmas: venda de medicamentos, 
        revenda de ingressos e dinheiro cedido por líderes e atores. Os referentes máximos 
        da barra de Peñarol são Adolfo, "el Tuerto", que chocam as pessoas capazes de tudo. 
        O Caterva Aurinegra (Barra Amsterdam) é o primeiro bar bravo do Uruguai, nascido no 
        início dos anos 70; O nome deriva de uma das primeiras bandeiras do bar Peñarol, 
        "La Caterva Presente" (Caterva: multidão de pessoas descontroladas); o cúal 
        não vai mais ao tribunal. O bar Peñarol foi a primeira banda a introduzir guarda-chuvas 
        em um estádio de futebol, e a primeira no Uruguai a introduzir bandeiras verticais e palitos.
         É composto por vários bares de diferentes pontos de Montevidéu, entre os quais há um 
         relacionamento muito bom.`,
        image: '/assets/penarol.jpg'
      },
      {
        country: 'Paraguai',
        team: 'Olimpia',
        supporters: 'La Barra 79',
        description: `As fundações de La Barra del Olímpia hoje datam de 1975, em que o 
        Comitê Benicio Ferreira (principalmente por membros) foi criado com o objetivo 
        de ter um grupo estável para incentivar o clube em eventos esportivos. Em 1978, 
        o time de futebol de Olímpia tornou-se campeão do torneio nacional, adquirindo 
        o direito de jogar a Copa Libertadores no ano seguinte. Isso lembrado em 1979 incendiou 
        o futebol paraguaio e o Olympia. Pela primeira vez, um time que não é argentino, 
        brasileiro ou uruguaio venceu a Copa Libertadores e, para a final, o comitê organizou 
        os torcedores que apoiaram o time no Estádio Bombonera, em frente ao Boca Juniors. 
        Mais de dez mil olímpicos pegaram as duas bandejas do estádio xeneise e retornaram 
        em uma caravana, com o copo nas mãos.`,
        image: '/assets/olimpia.jpg'
      },
      {
        country: 'Argentina',
        team: 'River Plate',
        supporters: 'Los Borrachos del Táblon',
        description: `A partir de 2000, Los Borrachos del Táblon do River Plate se 
        consolidaram como o a torcida mais organizada e respeitado do meio ambiente. Uma das 
        características que diferencia os outros torcedores é, por exemplo, que eles 
        nunca notificam a polícia para anunciar sua rota para um tribunal visitante, 
        enquanto o La 12 (torcedores do Boca Juniors) sempre alerta para onde e para onde irão.`,
        image: '/assets/river.jpg'
      },
      {
        country: 'Argentina',
        team: 'Boca Juniors',
        supporters: 'La 12',
        description: `A história do jogador número 12 começou a ser escrita em 1925.
        Naquele ano, o Boca viajava para fazer a primeira turnê de sua história e o futebol argentino.
        Mas algo estranho aconteceu: os jogadores estavam viajando, treinando a equipe e um fã. 
        Isso foi tratado como um dos grupos de jogadores, por isso foi chamado de Jogador Número Doze.`,
        image: '/assets/boca.jpg'
      },
      {
        country: 'Brasil',
        team: 'Internacional',
        supporters: 'Guarda Popular',
        description: `Mesmo que o grande boom da torcida tenha acontecido em 2006, as atividades 
        relacionadas à Popular se iniciaram alguns anos antes, com o surgimento de movimentos de 
        torcida diferenciados no Inter entre os anos de 2002 e 2004 (como os Diabos Vermelhos, 
          Malditos da Coréia e ex-integrantes das torcidas organizadas do Internacional). 
          Outro fator primordial no desenvolvimento da barra foi o fechamento do setor popular do 
          Beira-Rio (conhecido como Coréia, localizado abaixo da arquibancada inferior e próximo
             ao campo) em 2004 - ocasião que resultou em uma migração de ex-"coreanos" para o 
             setor Popular Placar - que, como o nome diz, se localiza abaixo do placar eletrônico 
             do estádio, à direita das cabines de rádio e TV.`,
        image: '/assets/internacional.jpg'
      },
      {
        country: 'Uruguai',
        team: 'Nacional',
        supporters: 'La Banda del Parque',
        description: `Antes de ter o nome de La Banda del Parque, o fã é dividido em 
        três grupos: o bar na cobertura localizado no anel superior da tribuna de Amsterdã 
        do estádio do centenário, a banda do meio localizada no anel do meio e as crianças 
        Cerrito localizado no anel abaixo. Esta divisão terminou no ano de 99 quando, 
        sob a liderança de "Pablito", o fã se tornou uniforme, uma união que dura até os dias de hoje.`,
        image: '/assets/nacional.jpg'
      },
      {
        country: 'Argentina',
        team: 'Racing',
        supporters: 'La Guarda Imperial',
        description: `Guarda Imperial é o nome pelo qual a barra corajosa do Racing Club é conhecida, 
        embora essa denominação também seja atribuída a uma de suas facções particulares.
        Como um grupo de corajosos bares A guarda imperial foi formada no final dos 
        anos 50, mais precisamente no ano de 1958. Ao longo de sua história, atuou em várias situações 
        de violência com bares de outros clubes. eles criaram a maior bandeira do mundo Nos anos 2000, 
        houve muitas brigas internas por causa de quem estava no comando, desde que os líderes até 
        então estavam presos pelo assassinato do fã do Independente.`,
        image: '/assets/racing.jpg'
      },
      {
        country: 'Argentina',
        team: 'Indepiendente',
        supporters: 'La Banda del Rojo',
        description: `A barra vermelha é o nome da barra corajosa do Independent Athletic Club. 
        É considerado um dos maiores e mais fortes bares corajosos da Argentina (atualmente ao 
          lado dos Oldell's New Boys, Boca Juniors e River Plate) e do mundo. Há informações 
          sobre a existência desse grupo desde os anos 50. Além de estar nas partidas do Independent, 
          desde 1982 o núcleo do Red Devils vai para os jogos que a Argentina joga nas Copas do Mundo
           e também foi para a Copa. America 2007 jogou na Venezuela.`,
        image: '/assets/indepiendente.jpg'
      },
      {
        country: 'Argentina',
        team: 'San Lorenzo',
        supporters: 'La Gloriosa Butteler',
        description: `Este é o cronograma da história do corajoso bar San Lorenzo, La Gloriosa Butteler:
        1927: a barra de borracha é formada;
        1946: O fã faz parte da obtenção do título e invade o campo de jogo (tornado inédito na época);
        1959: Pela primeira vez, um torcedor do futebol argentino está atrás do arco.
        1968: Mais de 500 fãs entregaram o carro ao presidente do clube para impedir a venda do Fischer Wolf ao River;
        1970: A revista gráfica tinha uma seção chamada "canções" dedicada às músicas do ciclone;
        E muito mais.`,
        image: '/assets/san_lorenzo.jpg'
      },
      {
        country: 'Colômbia',
        team: 'América de Cali',
        supporters: 'Baron Rojo Sur',
        description: `Este plano continua com excelentes resultados. Hoje, a barra 
        BRS (por sua sigla) constitui o maior grupo de torcedores do país, 
        pois possui filiais em todas as cidades onde é disputado o torneio profissional 
        colombiano, além de grupos em Nova York e Miami. Da mesma forma, eles são reconhecidos 
        como o bar mais itinerante do país, sendo os primeiros a cruzar as fronteiras para incentivar 
        a América à Venezuela, Equador, Peru e Argentina.`,
        image: '/assets/america_cali.jpg'
      },      
    ];
  }

  ngOnInit() {   
    this.optionFilter = 'Time';
    this.itemsList = this.getItems().sort(); 
  }

  public getFilterList(filter: any){
    this.itemsList = SearchUtils.getFilter(filter, this.itemsList, this.getItems().sort(), this.optionFilter);
  }

  public changeOptionFilter(value: string){
    this.optionFilter = value;
  }
}
