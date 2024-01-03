import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseFavComponent } from './choose-fav.component';

describe('ChooseFavComponent', () => {
  let component: ChooseFavComponent;
  let fixture: ComponentFixture<ChooseFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseFavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
