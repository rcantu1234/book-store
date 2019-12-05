import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanHalenComponent } from './van-halen.component';

describe('VanHalenComponent', () => {
  let component: VanHalenComponent;
  let fixture: ComponentFixture<VanHalenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanHalenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanHalenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
