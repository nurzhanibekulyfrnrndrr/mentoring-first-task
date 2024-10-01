import { NgFor,NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';







@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf,NgFor,HeaderComponent,MainComponent,RouterLink],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.scss'
})



export class AppComponent { 
  title = 'mentoring-first-project';


}




