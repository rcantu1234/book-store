import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatInTheHatComponent } from './cat-in-the-hat.component';

describe('CatInTheHatComponent', () => {
  let component: CatInTheHatComponent;
  let fixture: ComponentFixture<CatInTheHatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatInTheHatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatInTheHatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
