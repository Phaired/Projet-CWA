import { Injectable } from '@angular/core';
import { LocalStorageRepository } from './LocalStorageRepository';

@Injectable({
    providedIn: 'root',
})
/**
 * Service used to inject LocalStorageRepository
 */
export class LocalStorageRepositoryService {
    private localStorageRepository: LocalStorageRepository;

    constructor() {
        this.localStorageRepository = new LocalStorageRepository();
    }

    public getLocalStorageRepository() {
        return this.localStorageRepository;
    }
}
