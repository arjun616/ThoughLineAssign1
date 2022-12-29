import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) {
    
  }

  ngOnInit(): void {
  }

  login( name:any , pswd:any ){

    name=name.value
    pswd=pswd.value

    console.log(name , pswd);

    if(name == 'arjun' && pswd=='arjun')
    {
      this.router.navigateByUrl('home')

    }

    else{
      alert('wrong username or password')
    }

    


    


  }

}
