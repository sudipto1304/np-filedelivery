import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  public cid: string;
  constructor(private readonly route: ActivatedRoute,
    private readonly router: Router) {
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.cid = params.get("cid");
      console.log(this.cid);
    });
  }

}
