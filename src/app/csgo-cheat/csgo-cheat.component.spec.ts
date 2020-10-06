import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsgoCheatComponent } from './csgo-cheat.component';

describe('CsgoCheatComponent', () => {
  let component: CsgoCheatComponent;
  let fixture: ComponentFixture<CsgoCheatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsgoCheatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsgoCheatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
