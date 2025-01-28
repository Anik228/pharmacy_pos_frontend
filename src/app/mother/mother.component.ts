import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { SelectorComponent } from '../selector/selector.component';

@Component({
  selector: 'app-mother',
  imports: [CardComponent,SelectorComponent],
  templateUrl: './mother.component.html',
  styleUrl: './mother.component.css'
})
export class MotherComponent {

}
