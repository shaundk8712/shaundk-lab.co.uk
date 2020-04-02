import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  public nameList: any[] = [];
  public myName: string = "default";
  public isVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(){
    this.nameList.push("Shaun", "Kev", "Chris");
    this.myName = "Phillip";
  }

  showNames(){
    this.isVisible = true;
  }

}
