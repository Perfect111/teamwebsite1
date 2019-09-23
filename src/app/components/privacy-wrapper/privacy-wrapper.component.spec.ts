import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyWrapperComponent } from './privacy-wrapper.component';

describe('PrivacyWrapperComponent', () => {
  let component: PrivacyWrapperComponent;
  let fixture: ComponentFixture<PrivacyWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
