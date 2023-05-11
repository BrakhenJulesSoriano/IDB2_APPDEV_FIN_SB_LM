import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsstableComponent } from './csstable.component';

describe('CsstableComponent', () => {
  let component: CsstableComponent;
  let fixture: ComponentFixture<CsstableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsstableComponent]
    });
    fixture = TestBed.createComponent(CsstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
