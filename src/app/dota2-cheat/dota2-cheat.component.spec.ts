import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dota2CheatComponent } from './dota2-cheat.component';

describe('Dota2CheatComponent', () => {
  let component: Dota2CheatComponent;
  let fixture: ComponentFixture<Dota2CheatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dota2CheatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dota2CheatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
