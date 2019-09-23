import { Component, OnInit } from '@angular/core';
import { InterestService } from '../interest.service';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css']
})
export class MortgageComponent implements OnInit {

  constructor(private interestService:InterestService) { }

  Total: number; 
  years: number;

  calculateinterest(): void {
    this.Total = this.interestService.calculateinterest(this.years)
   
  }


  ngOnInit() {
  }

}
