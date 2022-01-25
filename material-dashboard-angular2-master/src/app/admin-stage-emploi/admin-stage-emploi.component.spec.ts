import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStageEmploiComponent } from './admin-stage-emploi.component';

describe('AdminStageEmploiComponent', () => {
  let component: AdminStageEmploiComponent;
  let fixture: ComponentFixture<AdminStageEmploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStageEmploiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStageEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
