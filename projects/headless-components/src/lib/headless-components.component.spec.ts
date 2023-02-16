import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlessComponentsComponent } from './headless-components.component';

describe('HeadlessComponentsComponent', () => {
  let component: HeadlessComponentsComponent;
  let fixture: ComponentFixture<HeadlessComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadlessComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadlessComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
