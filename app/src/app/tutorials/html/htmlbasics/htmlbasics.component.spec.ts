import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlbasicsComponent } from './htmlbasics.component';

describe('HtmlbasicsComponent', () => {
  let component: HtmlbasicsComponent;
  let fixture: ComponentFixture<HtmlbasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlbasicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlbasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
