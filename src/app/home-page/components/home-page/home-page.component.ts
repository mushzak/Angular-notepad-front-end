import { Component, OnInit} from '@angular/core';
import {HomePageService} from '../../services/home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  constructor(
    private homePageService: HomePageService
  ) {
  }

  ngOnInit(): void {
    this.homePageService.test().subscribe();
  }

}
