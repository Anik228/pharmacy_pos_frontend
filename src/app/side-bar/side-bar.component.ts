import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
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
