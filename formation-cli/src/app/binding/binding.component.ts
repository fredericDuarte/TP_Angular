import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

//  isHidden:boolean= true;
  isHidden:boolean= false;

  color :string = 'green';

  constructor() { }

  ngOnInit() {

    setInterval(() =>{
     // this.isHidden = !this.isHidden;

    }, 2000)

    setInterval(() =>{

      if(this.color=='red')
        this.color= 'green';
      else this.color='red';
    }, 1000)
  }

}
