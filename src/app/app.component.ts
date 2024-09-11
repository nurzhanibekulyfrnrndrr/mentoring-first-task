import { NgFor,NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


const newPages: number[]=[5,4,3,2,1]

const menuItems:string[]= ['Каталог','Стройматериалы', 'Инструменты', 'Электрика','Интерьер и одежда' ]

const upperCaseMenuItems:string[] = menuItems.map(
  (item:string)=> {
    return item.toUpperCase();
  }
)


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf,NgFor],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.scss'
})



export class AppComponent { 
  title = 'mentoring-first-project';

  isShowMujik = true;

  isShowCatalog = true;

  readonly headerItem = 'Главная';

  readonly headerItem2 ='О компании';

   headerItem3 = 'Каталог';


  readonly header2Item1 ='Каталог';

  readonly header2Item2 ='Стройматериалы';

  readonly header2Item3 ='Инструменты';
 
  readonly header2Item4 ='Электрика';

  readonly header2Item5 ='Интерьер и одежда';

  readonly newPages: number[]= newPages;

  menuItems:string[] = upperCaseMenuItems;

  isUpperCase:boolean = true;


  changeMenuText():void {
    this.menuItems = upperCaseMenuItems.map(
    item => this.isUpperCase ? item.toLowerCase():item.toUpperCase()
  
    )
  
    this.isUpperCase =!this.isUpperCase
  }
}




