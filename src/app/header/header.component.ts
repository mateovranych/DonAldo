import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';



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
     MatSidenavModule,
     MatButtonModule,
    
     
     ],

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {





toggleNav() {
  this.isNavOpen = !this.isNavOpen;
}

  isNavOpen: boolean = false;


  closeNav() {
    this.isNavOpen = false;
  }









 

  


  

}
