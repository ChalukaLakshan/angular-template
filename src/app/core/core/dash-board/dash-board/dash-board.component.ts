import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  onUserClick() {
    this.router.navigateByUrl('dash-board/master/user');
  }

  onMaterClick() {
    this.router.navigateByUrl('dash-board');
  }
}
