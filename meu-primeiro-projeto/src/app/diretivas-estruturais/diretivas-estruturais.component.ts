import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit{
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{nome: string, idade: number}> = [
    {nome:"Dener Troquate", idade: 30},
    {nome:"José", idade: 26},
    {nome:"Izabel", idade: 19}
  ];

public nome: string = 'dener';

  ngOnInit(): void {
    setInterval(() => {
     if(this.condition) {
      this.condition = false;
     } else {
      this.condition = true;
     }
    }, 2000)
  }

  public onClick() {
    if(this.conditionClick) {
      this.conditionClick = false;
     } else {
      this.conditionClick = true;
     }
  }

  public onClickAddList() {
    this.list.push({nome: "Nay", idade: 31});
  }

  public onclickEventList(event: number) {
    //removendo item da lista
    this.list.splice(event, 1);
  }


}
