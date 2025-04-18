import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'Task1';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
