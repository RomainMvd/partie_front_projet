import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViecampusComponent } from './viecampus.component';

describe('ViecampusComponent', () => {
  let component: ViecampusComponent;
  let fixture: ComponentFixture<ViecampusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViecampusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViecampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
