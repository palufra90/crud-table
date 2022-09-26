import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitTableComponent } from './fruit-table.component';
import { FruitTableComponentModule } from './fruit-table.component.module';

describe('FruitTableComponent', () => {
  let component: FruitTableComponent;
  let fixture: ComponentFixture<FruitTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitTableComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FruitTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
