import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosPoulaillerComponent } from './infos-poulailler.component';

describe('InfosPoulaillerComponent', () => {
  let component: InfosPoulaillerComponent;
  let fixture: ComponentFixture<InfosPoulaillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosPoulaillerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosPoulaillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
