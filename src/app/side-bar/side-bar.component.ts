import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  @Output() sidebarToggled = new EventEmitter<void>();
  isSidebarOpen = true; 
  isMobile = false; 

  ngOnInit() {
    this.checkScreenSize(); 
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize(); 
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 1024; 
    this.isSidebarOpen = !this.isMobile; 
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
