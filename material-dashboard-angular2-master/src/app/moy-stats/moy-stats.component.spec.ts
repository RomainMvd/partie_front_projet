import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoyStatsComponent } from './moy-stats.component';

describe('MoyStatsComponent', () => {
  let component: MoyStatsComponent;
  let fixture: ComponentFixture<MoyStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoyStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoyStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
