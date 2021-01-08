import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { HomeService } from '../home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myimage:string = "assets/tshirt.jpg";
  
  productlist:any = [];

  constructor(private homeService:HomeService,private _router:Router) {
    
  }


  getuser(){
    this.homeService.getAlluser().subscribe((result) => {
      this.productlist = result;
      console.log(result);
    });
  }
  onClick(productId:number){
   console.log(productId);
   this._router.navigate(['/viewdetails',productId]);
  }

  
  

  ngOnInit(): void {
    this.getuser();
  }

}
