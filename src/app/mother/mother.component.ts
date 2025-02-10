import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { SelectorComponent } from '../selector/selector.component';
import { SelectorTwoComponent } from '../selector-two/selector-two.component';
import { RightSideComponent } from '../right-side/right-side.component';
import { LeftSideComponent } from '../left-side/left-side.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-mother',
  imports: [RightSideComponent,LeftSideComponent,HeaderComponent,FooterComponent],
  templateUrl: './mother.component.html',
  styleUrl: './mother.component.css'
})
export class MotherComponent {

}
