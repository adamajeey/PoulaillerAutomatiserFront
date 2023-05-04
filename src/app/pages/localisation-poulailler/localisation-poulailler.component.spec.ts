import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalisationPoulaillerComponent } from './localisation-poulailler.component';

describe('LocalisationPoulaillerComponent', () => {
  let component: LocalisationPoulaillerComponent;
  let fixture: ComponentFixture<LocalisationPoulaillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalisationPoulaillerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalisationPoulaillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
