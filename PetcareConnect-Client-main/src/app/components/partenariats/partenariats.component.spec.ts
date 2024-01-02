import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenariatsComponent } from './partenariats.component';

describe('PartenariatsComponent', () => {
  let component: PartenariatsComponent;
  let fixture: ComponentFixture<PartenariatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartenariatsComponent]
    });
    fixture = TestBed.createComponent(PartenariatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
