import { Component, OnInit } from '@angular/core';
import {Vagon , Vagons} from '../shared/vagon'
@Component({
  selector: 'app-vagon-list',
  templateUrl: './vagon-list.component.html',
  styleUrls: ['./vagon-list.component.css']
})
export class VagonListComponent implements OnInit {
  vagons = Vagons;
  types:string[] = ['rabochiy', 'ne rabochiy', 'na remonte'];
  vagon:Vagon = new Vagon("","","","");
  i:number;
  summ:number=0;
  summa:string;
  last:number;
  //kek:number = parseInt(this.current);
  //@Input() vagon: Vagon;
  addVagon(){
    console.log(this.vagons )
    let summ:number=0;
    let summa:string= "";
    let last:number;
    let curent:any = document.getElementById("nomer");
    console.log(curent.value)
    let current:string =curent.value.toString();
    console.log(this.vagons )
    for(this.i=0;this.i<7;this.i++){
      let per:number=parseInt(current[this.i])
      if(this.i%2==0){
        summ=per*2;
        console.log("число"+summ)
        let d:string = summ.toString()
        summa+=d;
        console.log("число "+summa);
      }else{
        summ= per;
        let d:string = summ.toString()
        summa+=d;
        console.log("число "+summa);
      }
    }
    summ=0;console.log(this.vagons )
    for(this.i=0;this.i<summa.length;this.i++){
      let ker:number = parseInt(summa[this.i])
      summ+=ker;
    }
    this.vagon.id=current;
    console.log("итоговая сумма числом"+summ)
    console.log("строка числом"+summa)
    last=10 - summ%10;
    console.log(last)
    console.log(current[7])
    switch (last) {
      case 2:
        this.vagon.type = 'Крытый грузовой вагон';
        break;
      case 4:
        this.vagon.type = 'Платформа';
        break;
      case 6:
        this.vagon.type = 'Полувагон';
        break;
      case 7:
        this.vagon.type = 'Цистерна';
        break;
      case 8:
        this.vagon.type = 'Изотермические вагон';
        break;
      case 5:
        this.vagon.type = 'Собственные';
        break;
      case 9 || 3:
        this.vagon.type = 'Прочие';
        break;
      default:
        this.vagon.type = 'Неизвестно';
        break;
    }console.log(this.vagons )
    if(last.toString()==(current[7])){
      console.log(current[7])
      this.vagons.push(new Vagon(this.vagon.name, this.vagon.id, this.vagon.status, this.vagon.type));
      
    }else{
      alert("wrong number")
    }
    last = 0;
    console.log(this.vagons )
  }
  constructor() { }

  ngOnInit(): void {
  }
  deleteVagon(delVagon){
    this.vagons = this.vagons.filter(obj => obj !== delVagon);
    console.log(this.vagons);
  }

  showMassiv(){
    console.log(this.vagons);
  }
  editVagon(edVagon)
  {
    this.vagons = this.vagons.filter(obj => obj == edVagon);
    let summ:number=0;
    let summa:string= "";
    let last:number;
    let curent:any = document.getElementById("nomer");
    console.log(curent.value)
    let current:string =curent.value.toString();
    console.log(this.vagons )
    for(this.i=0;this.i<7;this.i++){
      let per:number=parseInt(current[this.i])
      if(this.i%2==0){
        summ=per*2;
        console.log("число"+summ)
        let d:string = summ.toString()
        summa+=d;
        console.log("число "+summa);
      }else{
        summ= per;
        let d:string = summ.toString()
        summa+=d;
        console.log("число "+summa);
      }
    }
    summ=0;console.log(this.vagons )
    for(this.i=0;this.i<summa.length;this.i++){
      let ker:number = parseInt(summa[this.i])
      summ+=ker;
    }
    this.vagon.id=current;
    console.log("итоговая сумма числом"+summ)
    console.log("строка числом"+summa)
    last=10 - summ%10;
    console.log(last)
    console.log(current[7])
    switch (last) {
      case 2:
        this.vagon.type = 'Крытый грузовой вагон';
        break;
      case 4:
        this.vagon.type = 'Платформа';
        break;
      case 6:
        this.vagon.type = 'Полувагон';
        break;
      case 7:
        this.vagon.type = 'Цистерна';
        break;
      case 8:
        this.vagon.type = 'Изотермические вагон';
        break;
      case 5:
        this.vagon.type = 'Собственные';
        break;
      case 9 || 3:
        this.vagon.type = 'Прочие';
        break;
      default:
        this.vagon.type = 'Неизвестно';
        break;
    }console.log(this.vagons )
    if(last.toString()==(current[7])||(last.toString()=="10"&&current[7]=="0")){
      console.log(current[7])
      
    }else{
      alert("wrong number")
    }
    last = 0;
    console.log(this.vagons )
  
    let mem:any = document.getElementById("nam");
    edVagon.name = mem.value.toString();
    let rem:any = document.getElementById("nomer");
    edVagon.id = parseInt(rem.value);
  }

}
