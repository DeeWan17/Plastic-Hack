import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheatService {

  showCsgo: boolean = true;
  showDota2: boolean = false;
  private toggle$ = new BehaviorSubject<boolean>(true);

  GetShowCscgo() {
    return this.showCsgo;
  }

  ToggleShowCscgo() {
    return this.showCsgo = !this.showCsgo
  }

  ToggleShowDota2(){
    return this.showDota2 = !this.showDota2
  }

  constructor() { }

  toggleEvent() {
    return this.toggle$.asObservable();
  }

  toggleShowCsgo() {
    this.showCsgo = !this.showCsgo
    this.toggle$.next(this.showCsgo);
  }
  toggleShowDota2() {
    this.showDota2 = !this.showDota2
    this.toggle$.next(this.showDota2);
  }

}
