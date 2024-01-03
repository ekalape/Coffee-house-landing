import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlAppSectionComponent } from './dl-app-section.component';

describe('DlAppSectionComponent', () => {
  let component: DlAppSectionComponent;
  let fixture: ComponentFixture<DlAppSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DlAppSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DlAppSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
