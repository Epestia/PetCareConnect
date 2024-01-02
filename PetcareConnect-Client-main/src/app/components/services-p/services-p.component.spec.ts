import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPComponent } from './services-p.component';

describe('ServicesPComponent', () => {
  let component: ServicesPComponent;
  let fixture: ComponentFixture<ServicesPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesPComponent]
    });
    fixture = TestBed.createComponent(ServicesPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
