import { TestBed } from '@angular/core/testing';

import { LocalStorageRepositoryService } from './local-storage-repository.service';

describe('LocalStorageRepositoryService', () => {
    let service: LocalStorageRepositoryService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LocalStorageRepositoryService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
