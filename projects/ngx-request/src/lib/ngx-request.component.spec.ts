import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRequestComponent } from './ngx-request.component';

describe('NgxRequestComponent', () => {
  let component: NgxRequestComponent;
  let fixture: ComponentFixture<NgxRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxRequestComponent]
    });
    fixture = TestBed.createComponent(NgxRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
