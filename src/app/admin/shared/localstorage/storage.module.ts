import {ModuleWithProviders, NgModule} from '@angular/core';
import {StorageOptions} from './storage-options.interfase';
import {LocalStorage} from './local-storage.interface';
import {BaseLocalStorageService} from './base-local.storage.service';
import {MemoryStorage} from './memory-storage.interface';
import {BaseMemoryStorageService} from './base-memory.storage.service';

@NgModule()
export class StorageModule {
  static forRoot(options: Partial<StorageOptions> = {}): ModuleWithProviders<StorageModule> {
    return {
      ngModule: StorageModule,
      providers: [
        {
          provide: LocalStorage,
          useClass: options.localStorage || BaseLocalStorageService
        },
        {
          provide: MemoryStorage,
          useClass: options.memoryStorage || BaseMemoryStorageService
        }
      ]
    };
  }
}
