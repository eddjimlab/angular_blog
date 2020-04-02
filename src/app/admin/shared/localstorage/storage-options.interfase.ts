import {Type} from '@angular/core';
import {LocalStorage} from './local-storage.interface';
import {MemoryStorage} from './memory-storage.interface';

export interface StorageOptions {
  localStorage: Type<LocalStorage>;
  memoryStorage: Type<MemoryStorage>;
}
