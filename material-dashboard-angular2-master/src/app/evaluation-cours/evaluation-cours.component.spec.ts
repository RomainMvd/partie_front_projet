import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationCoursComponent } from './evaluation-cours.component';

describe('EvaluationCoursComponent', () => {
  let component: EvaluationCoursComponent;
  let fixture: ComponentFixture<EvaluationCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
