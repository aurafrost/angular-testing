import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Childofchild1Component } from './childofchild1.component';

describe('Childofchild1Component', () => {
  let component: Childofchild1Component;
  let fixture: ComponentFixture<Childofchild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Childofchild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Childofchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
