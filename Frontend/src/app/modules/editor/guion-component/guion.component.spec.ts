import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuionComponent } from './guion.component';

describe('GuionComponent', () => {
  let component: GuionComponent;
  let fixture: ComponentFixture<GuionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
