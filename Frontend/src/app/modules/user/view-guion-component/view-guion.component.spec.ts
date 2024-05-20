import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuionComponent } from './view-guion.component';

describe('ViewGuionComponent', () => {
  let component: ViewGuionComponent;
  let fixture: ComponentFixture<ViewGuionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewGuionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewGuionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
