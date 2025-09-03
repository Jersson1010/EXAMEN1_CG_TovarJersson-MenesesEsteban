import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubfootersComponent } from './subfooters.component';

describe('SubfootersComponent', () => {
  let component: SubfootersComponent;
  let fixture: ComponentFixture<SubfootersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubfootersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubfootersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
