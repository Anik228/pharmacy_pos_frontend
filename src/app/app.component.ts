// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MotherComponent } from './mother/mother.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MotherComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pharmacy-app';
}
