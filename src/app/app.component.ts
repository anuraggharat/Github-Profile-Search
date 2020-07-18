import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-search';

  constructor( private auth:AuthService ){
    auth.getUser().subscribe(
      (user)=>{
        console.log(user);
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

}
