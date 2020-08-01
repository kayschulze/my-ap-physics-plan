import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSlideComponent } from './message-slide.component';

describe('MessageSlideComponent', () => {
  let component: MessageSlideComponent;
  let fixture: ComponentFixture<MessageSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
