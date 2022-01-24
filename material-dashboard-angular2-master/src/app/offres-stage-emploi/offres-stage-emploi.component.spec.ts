import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresStageEmploiComponent } from './offres-stage-emploi.component';

describe('OffresStageEmploiComponent', () => {
  let component: OffresStageEmploiComponent;
  let fixture: ComponentFixture<OffresStageEmploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresStageEmploiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresStageEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
