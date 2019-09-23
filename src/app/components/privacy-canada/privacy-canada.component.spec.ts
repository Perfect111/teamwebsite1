import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyCanadaComponent } from './privacy-canada.component';

describe('PrivacyCanadaComponent', () => {
  let component: PrivacyCanadaComponent;
  let fixture: ComponentFixture<PrivacyCanadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyCanadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyCanadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
