import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubgCheatComponent } from './pubg-cheat.component';

describe('PubgCheatComponent', () => {
  let component: PubgCheatComponent;
  let fixture: ComponentFixture<PubgCheatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubgCheatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubgCheatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
