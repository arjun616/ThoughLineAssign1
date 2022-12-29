import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModelModule } from 'src/app/model/model.module';



@Component({
  selector: 'app-addedit',
  templateUrl: './addedit.component.html',
  styleUrls: ['./addedit.component.css']
})
export class AddeditComponent implements OnInit {

  ModelModule: ModelModule = new ModelModule();

  id1: string = '';
  name1: string = '';
  email1: string = '';
  status1: string = '';

  color = "grey";
  id:any=''

  constructor(private router : Router , private http: HttpClient , private route: Router, private service: DataService, private rou: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.rou.snapshot.params['id']
    this.service.getone(this.rou.snapshot.params['id']).subscribe((result => {
      this.id1 = result.id
      this.name1 = result.name
      this.email1 = result.email
      this.status1 = result.status
    console.log(result.id);
    }))
  }


  add() {

    this.ModelModule.id = this.id1
    this.ModelModule.name = this.name1
    this.ModelModule.email = this.email1
    this.ModelModule.status = this.status1
    console.log(this.ModelModule);

    this.service.addTask(this.ModelModule).subscribe(res => {
      alert('added')
      this.route.navigateByUrl('userlist')
      
    })

  }


  cancel() {

  }


  update() {

    this.ModelModule.id = this.id1
    this.ModelModule.name = this.name1
    this.ModelModule.email = this.email1
    this.ModelModule.status = this.status1
    console.log(this.ModelModule);
    this.service.updateit(this.ModelModule).subscribe(res => {
      alert('updated')
      this.route.navigateByUrl('home')
    })
  }

  backycolor() {
    if (this.status1 == "Active") {
      this.color = "green";
    }
    else {
      this.color = "red"
    }
  }



}
