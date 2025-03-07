import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaishaligarmentsComponent } from './vaishaligarments.component';

describe('VaishaligarmentsComponent', () => {
  let component: VaishaligarmentsComponent;
  let fixture: ComponentFixture<VaishaligarmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VaishaligarmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VaishaligarmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
