import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { SelectorComponent } from '../selector/selector.component';
import { SelectorTwoComponent } from '../selector-two/selector-two.component';
import { RightSideComponent } from '../right-side/right-side.component';
import { LeftSideComponent } from '../left-side/left-side.component';

@Component({
  selector: 'app-mother',
  imports: [RightSideComponent,LeftSideComponent],
  templateUrl: './mother.component.html',
  styleUrl: './mother.component.css'
})
export class MotherComponent {

}
