import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-header',
  standalone:true,
  imports:[
    CommonModule,
     MatIconModule,
     MatButtonModule,
     MatButtonToggleModule,
     MatListModule,
     MatMenuModule,
     
     
     ],

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  navigateTo(route: string) {
    
    this.router.navigate([route]);
  }

  


  

}
