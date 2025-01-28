import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorTwoComponent } from './selector-two.component';

describe('SelectorTwoComponent', () => {
  let component: SelectorTwoComponent;
  let fixture: ComponentFixture<SelectorTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectorTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
