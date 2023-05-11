import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssbasicsComponent } from './cssbasics.component';

describe('CssbasicsComponent', () => {
  let component: CssbasicsComponent;
  let fixture: ComponentFixture<CssbasicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssbasicsComponent]
    });
    fixture = TestBed.createComponent(CssbasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
