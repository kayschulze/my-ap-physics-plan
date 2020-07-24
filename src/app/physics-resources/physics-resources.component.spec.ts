import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicsResourcesComponent } from './physics-resources.component';

describe('PhysicsResourcesComponent', () => {
  let component: PhysicsResourcesComponent;
  let fixture: ComponentFixture<PhysicsResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicsResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicsResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
