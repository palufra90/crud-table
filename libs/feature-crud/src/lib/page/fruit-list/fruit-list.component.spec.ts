import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../../store/fruits.reducers';
import { FruitListComponent } from './fruit-list.component';
import { FruitListComponentModule } from './fruit-list.component.module';

describe('FruitListComponent', () => {
  let component: FruitListComponent;
  let fixture: ComponentFixture<FruitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        FruitListComponentModule,
        NoopAnimationsModule,
      ],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(FruitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
