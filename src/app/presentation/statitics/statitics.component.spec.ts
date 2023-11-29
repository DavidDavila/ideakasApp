import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatiticsComponent } from './statitics.component';

describe('StatiticsComponent', () => {
  let component: StatiticsComponent;
  let fixture: ComponentFixture<StatiticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatiticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatiticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
