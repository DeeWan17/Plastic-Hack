import { CheatService } from 'src/app/cheat.service';
import { Component, OnInit, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  showCsgo: boolean;
  showDota2: boolean;
  constructor(public service: CheatService) { }

  ngOnInit(): void {
    this.service.toggleEvent().subscribe(showFlag => {
      this.showCsgo = showFlag;
      this.showDota2 = showFlag;
    

    })
  }

  public ToggleShowCsgo() {
    this.service.toggleShowCsgo();
  }
  public ToggleShowDota2() {
    this.service.toggleShowDota2();
  }




}

