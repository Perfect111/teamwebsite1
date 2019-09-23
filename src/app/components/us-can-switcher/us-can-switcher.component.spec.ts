import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsCanSwitcherComponent } from './us-can-switcher.component';

describe('UsCanSwitcherComponent', () => {
  let component: UsCanSwitcherComponent;
  let fixture: ComponentFixture<UsCanSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsCanSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsCanSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
