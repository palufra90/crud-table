import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitTableComponent } from './fruit-table.component';

describe('FruitTableComponent', () => {
  let component: FruitTableComponent;
  let fixture: ComponentFixture<FruitTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FruitTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FruitTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
