import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableDataSource } from '@angular/material/table';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FruitSchema } from '@test/data-access-fruits';
import { FruitTableComponent } from './fruit-table.component';
import { FruitTableComponentModule } from './fruit-table.component.module';

describe('FruitTableComponent', () => {
  let component: FruitTableComponent;
  let fixture: ComponentFixture<FruitTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitTableComponentModule, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FruitTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the table should have at least one row element', () => {
    component.dataSource = new MatTableDataSource([
      {
        genus: 'Malus',
        name: 'Apple',
        id: 6,
        family: 'Rosaceae',
        order: 'Rosales',
      },
    ] as FruitSchema[]);
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('tbody>tr')).length).toBe(1);
  });
});
