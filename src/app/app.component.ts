import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cesar';
  saltos:number;
  msm1:string;    
  msm2:string;
  letras:string = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  letras2:string;
  alfa:Array<data> = [];
  alfa2:Array<data> = [];
  l:data;
  

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    
      for (let i=0; i < this.letras.length; i++){
        this.l = { id:i, letra:this.letras.charAt(i)};
        this.alfa.push(this.l);
      }
  } 


  NumeroSaltos(){
    this.alfa2 = [];
    this.letras2 = "";
    for (let i=0 + this.saltos; i < this.letras.length; i++){
      this.l = { id:i, letra:this.letras.charAt(i)};
      this.alfa2.push(this.l);
    }
    for(let j = 0; j < this.saltos; j++){
      this.l = { id:j, letra:this.letras.charAt(j)};
      this.alfa2.push(this.l);
    }
    for(let w of this.alfa2){
      this.letras2 = this.letras2 + w.letra;
    }
    
  }

  Encriptar(){
    let texto = "";
    let pos = 0;
    console.log(this.letras2);
    for(let i = 0; i < this.msm1.length; i++){
      pos = this.letras2.indexOf(this.msm1.charAt(i).toUpperCase());
      texto = texto + this.alfa[pos].letra;       
    }
    this.msm2 = texto;
  }



  Desencriptar(){
    let texto = "";
    let pos = 0;
    for(let i = 0; i < this.msm2.length; i++){
      pos = this.letras2.indexOf(this.msm2.charAt(i).toUpperCase());
      texto = texto + this.alfa[pos].letra;       
    }
    this.msm1 = texto;
  }

}

export class ModelComponent {
  val: number;
} 

interface data{
  id:number;
  letra:string;
}