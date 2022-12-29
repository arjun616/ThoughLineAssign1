import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModelModule } from 'src/app/model/model.module';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  details: any = []

  updated:any

  ModelModule:any




 

  constructor(private router : Router , private http: HttpClient , private route: Router, private service: DataService, private rou: ActivatedRoute) { }

  ngOnInit(): void {

    console.log(ModelModule);

    this.view()
    
  
  }


  users(){
    this.router.navigateByUrl('viewList')
  }


  

  add() {
    this.route.navigateByUrl('addedit/:id')
  }



  view() {
    this.service.Viewall().subscribe(res => {
      this.details = res
    })
  }



  deleteit(id:any) {
    this.service.Deleteit(id).subscribe(res => {
      alert('deleted')
      this.ngOnInit()
    })

  }
  

  edit(){

  }




  



}
