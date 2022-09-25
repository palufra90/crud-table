import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FruitListComponent } from './fruit-list.component';
import { FruitListComponentModule } from './fruit-list.component.module';

describe('FruitListComponent', () => {
  let component: FruitListComponent;
  let fixture: ComponentFixture<FruitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitListComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FruitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
