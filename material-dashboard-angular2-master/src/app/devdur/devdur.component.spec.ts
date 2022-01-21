import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevdurComponent } from './devdur.component';

describe('DevdurComponent', () => {
  let component: DevdurComponent;
  let fixture: ComponentFixture<DevdurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevdurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevdurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
