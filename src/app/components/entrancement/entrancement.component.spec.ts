import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrancementComponent } from './entrancement.component';

describe('EntrancementComponent', () => {
  let component: EntrancementComponent;
  let fixture: ComponentFixture<EntrancementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrancementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrancementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
