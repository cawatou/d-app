import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Dragon } from './dragon';
import { DragonService } from './services/dragon.service';

@Component({
  selector: 'table-of-dragons',
  templateUrl: './d-table.component.html',
  styleUrls: ['css/d-table.component.css']
})
export class DTableComponent implements OnInit {

  dragons: Dragon[];

  constructor(private dragonService: DragonService) { }

  getDragons(): void {
    this.dragonService.getDragons().then(dragons => this.dragons = dragons);
  }


  ngOnInit(): void {
    this.getDragons();
  }

  columns: any[] = [
    {
      display: 'Дракон',
      variable: 'rus'
    },
    {
      display: 'Тип',
      variable: 'type'
    },
    {
      display: 'Особенность',
      variable: 'note'
    },
    {
      display: 'Стихии',
      variable: 'elements'
    },
    {
      display: 'Выведение',
      variable: 'breeding'
    },
    {
      display: 'Инкубатор',
      variable: 'hatching'
    },
    {
      display: 'Стоимость',
      variable: 'cost'
    },
    {
      display: 'Атака',
      variable: 'attack'
    },
    {
      display: 'Здоровье',
      variable: 'health'
    },
    {
      display: 'Золото',
      variable: 'gold'
    },
    {
      display: 'Версия',
      variable: 'version'
    },
  ];
  sorting: any = {
    column: 'Дракон',
    descending: false
  };
}
