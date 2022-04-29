import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ServicesService } from '../services.service';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jokers:any = [];
  playList:any ;
  addplaylist:any = [];
  listName: any;
  list: any =[];
  data:any = [
    {id: 0, jokelist: "Best joke"},
    {id: 1, jokelist: "Funny Joke"}
];
  bodytext:any;
  selected:any;
  funnyjoke: any =[];
  bestjoke:any=[];
  title: any;
  bestJokeHeader = false;
  funnyJokeHeader =false;

  constructor(private testservice : ServicesService) { }

  ngOnInit(): void {

    this.testservice.getjokers().subscribe(res =>  {
      this.jokers =  res;
      
    })
  }

  addPlayLists(){
    this.addplaylist.push(this.playList)
    
  }

  add(){
    if(this.selected ==0){
      this.bestjoke.push({first:this.bodytext,second:this.title});
    }else{
      this.funnyjoke.push({first:this.bodytext,second:this.title});
    }
  }

  createPlayList(){
    
    if(this.listName.toLowerCase() == "best joke"){
      this.bestJokeHeader =true;
    }else{
      this.funnyJokeHeader =true;
    }
    $("#listName").val('');
  }

  selectPlayLists(selected:any,event:any){
    this.bodytext = selected.punchline;
    this.title = selected.setup;
    this.selected = event.target.value;
    
  }
}
