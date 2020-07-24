import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KinematicsComponent } from './kinematics.component';

describe('KinematicsComponent', () => {
  let component: KinematicsComponent;
  let fixture: ComponentFixture<KinematicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KinematicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinematicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
