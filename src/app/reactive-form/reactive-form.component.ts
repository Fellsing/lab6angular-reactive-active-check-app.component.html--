import { Component, OnInit } from '@angular/core';
import {Vagon} from '../shared/vagon';
import { Vagons } from '../shared/vagons';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  vagons = Vagons;
  types:string[] = ['rabochiy', 'ne rabochiy', 'na remonte'];
  vagon: Vagon = new Vagon('', '', '', '');
  profileVagon: FormGroup;
  ngOnInit(): void {
    this.profileVagon = new FormGroup({
      name: new FormControl(this.vagon.name, [
        Validators.required,
        Validators.maxLength(50)
      ]),
      id: new FormControl(this.vagon.id, [
        Validators.maxLength(8)
      ]),
      status: new FormControl(this.vagon.status),
      type: new FormControl(this.vagon.type)
    });
  }
  // tslint:disable-next-line:typedef
  get name() { return this.profileVagon.get('name'); }

  // tslint:disable-next-line:typedef
  // addWagons(){
  //   this.wagons.push(this.profileWagon.getRawValue());
  // }
  addWagons(){
    let i;
    let sum = 0;
    let summa = '';
    let last: number;
    const curent: any = document.getElementById('id');

    const current: string = curent.value.toString();
    for (i = 0; i < 7; i++){
      // tslint:disable-next-line:radix
      const per: number = parseInt(current[i]);
      if (i % 2 === 0){
        sum = per * 2;

        const a: string = sum.toString();
        summa += a;

      }else{
        sum = per;
        const a: string = sum.toString();
        summa += a;

      }
    }
    sum = 0;
    for (i = 0; i < summa.length; i++){
      // tslint:disable-next-line:radix
      const b: number = parseInt(summa[i]);
      sum += b;
    }

    last = 10 - sum % 10;

    if (last.toString() === (current[7]) || (last.toString() === '10' && current[7] === '0')){
      this.vagon = new Vagon(this.profileVagon.value.name, this.profileVagon.value.id, this.profileVagon.value.status, this.profileVagon.value.type);
      this.vagon.getVagonType();
      this.vagons.push(this.vagon);
    }else{
      alert('wrong number');
    }
  }
  // tslint:disable-next-line:typedef
  deleteWagon(deleteElement){
    this.vagons = this.vagons.filter(obj => obj !== deleteElement);
    console.log(this.vagons);
  }
}
