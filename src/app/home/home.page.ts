import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public items:any[]=[];


  constructor(private http: HttpClient){
    this.list()
    

  }
  

  async list(){
    let Pets: Observable<any>;
    Pets = await this.http.get('http://petstore-demo-endpoint.execute-api.com/petstore/pets');
    Pets.subscribe(info => {
      this.items = info;
      console.log(this.items)
    })
  }

  key: string = 'id';
  reverse:boolean = false;
  sort(key){
    this.key = key;
    this.reverse = this.reverse;
  }
  



  }




  



