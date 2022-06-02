import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlStatmentComponent } from './control-statment.component';

describe('ControlStatmentComponent', () => {
  let component: ControlStatmentComponent;
  let fixture: ComponentFixture<ControlStatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlStatmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlStatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
