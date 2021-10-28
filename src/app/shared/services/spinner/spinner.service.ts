import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  
  public isLoading$ = new BehaviorSubject(false);
  public changeText$ = new BehaviorSubject('Loading table...');

  constructor() { }
}
