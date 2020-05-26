import { TestBed } from '@angular/core/testing';

import { DataStorageService } from './data-storage.service';
import { HttpClientModule } from '@angular/common/http';

describe('DataStorageService', () => {
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [DataStorageService]
    });
    
  });

 it('should be created', () => {
   const service : DataStorageService=TestBed.get(DataStorageService);
    expect(service).toBeTruthy();
  });
});
