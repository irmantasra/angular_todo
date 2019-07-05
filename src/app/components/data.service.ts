import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import defaultData from '../../data/defaultAppSettings';

@Injectable()
export class DataService {

  private colorSource = new BehaviorSubject(defaultData.appColor);
  color = this.colorSource.asObservable();

  constructor() { }

  changeColor(color: string) {
    this.colorSource.next(color)
  }

}