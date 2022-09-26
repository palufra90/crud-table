import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SortItemsUtilService } from './sort-items-util.service';

describe('Sort item utility tests', () => {
  let sortService: SortItemsUtilService;
  const fruits = [
    {
      family: 'Rosaceae',
      id: 105,
      name: 'Apple',
    },
    {
      family: 'Rosaceae',
      id: 106,
      name: 'Cherry',
    },
    {
      family: 'Rosaceae',
      id: 109,
      name: 'Banana',
    },
    {
      family: 'Rutaceae',
      id: 107,
      name: 'Lime',
    },
    {
      family: 'Rosaceae',
      id: 108,
      name: 'Prune',
    },
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SortItemsUtilService],
    });
    sortService = TestBed.inject(SortItemsUtilService);
  });

  it('should create', () => {
    expect(sortService).toBeTruthy();
  });

  it('should sort fruit', () => {
    const sortedFruits = sortService.sortItems(fruits, 'name');
    expect(sortedFruits.length).toBe(5);
    expect(sortedFruits[3].id).toBe(107);
  });
});
