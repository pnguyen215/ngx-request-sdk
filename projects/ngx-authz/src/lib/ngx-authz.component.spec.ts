import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAuthzComponent } from './ngx-authz.component';

describe('NgxAuthzComponent', () => {
  let component: NgxAuthzComponent;
  let fixture: ComponentFixture<NgxAuthzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxAuthzComponent]
    });
    fixture = TestBed.createComponent(NgxAuthzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
