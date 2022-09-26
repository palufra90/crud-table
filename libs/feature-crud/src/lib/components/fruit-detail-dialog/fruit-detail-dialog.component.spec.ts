import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitDetailDialogComponent } from './fruit-detail-dialog.component';

describe('FruitDetailDialogComponent', () => {
  let component: FruitDetailDialogComponent;
  let fixture: ComponentFixture<FruitDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FruitDetailDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FruitDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
