import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetterenglandComponent } from './petterengland.component';

describe('PetterenglandComponent', () => {
  let component: PetterenglandComponent;
  let fixture: ComponentFixture<PetterenglandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetterenglandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetterenglandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
