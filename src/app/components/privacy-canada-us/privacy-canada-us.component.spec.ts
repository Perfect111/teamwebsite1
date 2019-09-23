import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyCanadaUsComponent } from './privacy-canada-us.component';

describe('PrivacyCanadaUsComponent', () => {
  let component: PrivacyCanadaUsComponent;
  let fixture: ComponentFixture<PrivacyCanadaUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyCanadaUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyCanadaUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
