import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SelectorTwoComponent } from '../selector-two/selector-two.component';

@Component({
  selector: 'app-left-side',
  imports: [CommonModule,SelectorTwoComponent],
  templateUrl: './left-side.component.html',
  styleUrl: './left-side.component.css'
})
export class LeftSideComponent {

}
