import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JKGarmentsComponent } from './jkgarments.component';

describe('JKGarmentsComponent', () => {
  let component: JKGarmentsComponent;
  let fixture: ComponentFixture<JKGarmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JKGarmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JKGarmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
