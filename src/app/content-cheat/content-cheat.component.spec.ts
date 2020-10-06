import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCheatComponent } from './content-cheat.component';

describe('ContentCheatComponent', () => {
  let component: ContentCheatComponent;
  let fixture: ComponentFixture<ContentCheatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentCheatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCheatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
