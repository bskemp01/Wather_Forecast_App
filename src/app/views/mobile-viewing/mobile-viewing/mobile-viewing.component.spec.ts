import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileViewingComponent } from './mobile-viewing.component';

describe('MobileViewingComponent', () => {
  let component: MobileViewingComponent;
  let fixture: ComponentFixture<MobileViewingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileViewingComponent]
    });
    fixture = TestBed.createComponent(MobileViewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
