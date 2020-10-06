import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit, OnChanges } from '@angular/core';
import { CheatService } from 'src/app/cheat.service';


@Component({
  selector: 'app-cheat',
  templateUrl: './cheat.component.html',
  styleUrls: ['./cheat.component.css']
})
export class CheatComponent implements OnInit {

  showCsgo: boolean;
  showDota2: boolean = false;
  
  constructor(public service: CheatService) {

  }

  ngOnInit(): void {
    this.service.toggleEvent().subscribe(showFlag => {
      this.showCsgo = showFlag;
      this.showDota2 = showFlag;
    })
  }

}
