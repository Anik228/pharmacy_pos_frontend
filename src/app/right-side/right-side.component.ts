import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { SelectorComponent } from '../selector/selector.component';

@Component({
  selector: 'app-right-side',
  imports: [CommonModule,CardComponent,SelectorComponent],
  templateUrl: './right-side.component.html',
  styleUrl: './right-side.component.css'
})
export class RightSideComponent {

}
