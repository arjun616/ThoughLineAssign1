import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelModule } from './model/model.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  serviceURL : string ;

  constructor(private http:HttpClient)
   {  this.serviceURL = "http://localhost:3000/user" }



  
  addTask(ModelModule : ModelModule) : Observable<Task> {
    return this.http.post<Task>(this.serviceURL,ModelModule);
  }


  Viewall():Observable<ModelModule>{
    return this.http.get<ModelModule>(this.serviceURL)
  }




  Deleteit(id:any):Observable<any>{
    return this.http.delete<any>(this.serviceURL+'/'+id)

  }
  

 
  getone(id:any):Observable<any>{
    return this.http.get<any>(this.serviceURL+'/'+id)

  }
  

  updateit(ModelModule:ModelModule):Observable<ModelModule>{
    return this.http.patch<ModelModule>(this.serviceURL+'/'+ModelModule.id,ModelModule)

  }

}
