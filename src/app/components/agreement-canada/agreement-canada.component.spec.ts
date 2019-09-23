import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementCanadaComponent } from './agreement-canada.component';

describe('AgreementCanadaComponent', () => {
  let component: AgreementCanadaComponent;
  let fixture: ComponentFixture<AgreementCanadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreementCanadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementCanadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
