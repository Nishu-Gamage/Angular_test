import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NishuTestingComponent } from './nishu-testing.component';

describe('NishuTestingComponent', () => {
  let component: NishuTestingComponent;
  let fixture: ComponentFixture<NishuTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NishuTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NishuTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
