import { getRtlScrollAxisType, getSupportedInputTypes } from '@angular/cdk/platform';

export class Vagon { 
  constructor(public name: string, public id: string, public status: string, public type: string) {
    this.getVagonType();
  };
  getVagonType(){
    switch (this.id[0]) {
      case "2":
        this.type = 'Крытый грузовой вагон';
        break;
      case "4":
        this.type = 'Платформа';
        break;
      case "6":
        this.type = 'Полувагон';
        break;
      case "7":
        this.type = 'Цистерна';
        break;
      case "8":
        this.type = 'Изотермические вагон';
        break;
      case "5":
        this.type = 'Собственные';
        break;
      case "9" || "3":
        this.type = 'Прочие';
        break;
      default:
        this.type = 'Неизвестно';
        break;
  }
}
}

export const Vagons: Vagon[] = [];
