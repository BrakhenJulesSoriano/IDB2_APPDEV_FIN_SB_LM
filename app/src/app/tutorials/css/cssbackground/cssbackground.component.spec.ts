import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssbackgroundComponent } from './cssbackground.component';

describe('CssbackgroundComponent', () => {
  let component: CssbackgroundComponent;
  let fixture: ComponentFixture<CssbackgroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssbackgroundComponent]
    });
    fixture = TestBed.createComponent(CssbackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
