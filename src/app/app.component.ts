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
  rowletras: string = "ABCDE";
  columletras:string = "ABCDE";
  polId:number = 0;
  letras2:string;
  alfa:Array<data> = [];
  alfa2:Array<data> = [];
  letrasSeparadas:Array<data>=[];
  l:data;
  ruta_img:string ='../assets/cesar.png';
  cities: City[];

  selectedCity: City = {name:'CÉSAR',code:'1'};


  constructor(private primengConfig: PrimeNGConfig) {
    this.cities = [
      {name: 'CÉSAR', code: '1'},
      {name: 'POLIBYUS', code: '2'},
  ];
  }

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

    if(this.saltos < 28){
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
    
  }

  Encriptar(){
    let texto = "";
    let pos = 0;
    for(let i = 0; i < this.msm1.length; i++){
      pos = this.letras.indexOf(this.msm1.charAt(i).toUpperCase());
      texto = texto + this.alfa2[pos].letra;       
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


  Desencriptar2(){
    let texto = "";
    let limpio = "";
    let pos = 0;
    let c;
    this.letrasSeparadas=[];

    for(let i = 0; i < this.msm2.length; i++){
      c = this.msm2.charCodeAt(i) * 1;
      
      if(c !== 32 ){
        if( c === 65 || c === 66 || c === 67 || c === 68 || c === 69 
          || c === 97 || c === 98 || c === 99 || c === 100 || c === 101){
          limpio = limpio + this.msm2.charAt(i);
        }
      }
    }

    if(limpio.length%2 === 0){

      
      
      
      for(let i = 0; i < limpio.length; i=i+2){
        this.l = {id:pos, letra:limpio.charAt(i).toUpperCase()+""+limpio.charAt(i+1).toUpperCase()+" "}
        this.letrasSeparadas.push(this.l);
      }
      
      for(let query of this.letrasSeparadas){
        for(let letra of this.alfa2){
          if(query.letra === letra.letra){
            texto = texto + this.alfa[letra.id].letra;     
          }
            
        }       
      }
      this.msm1 = texto;

    }
    
   
  }


  CambiarCifrado(){
    

    if(this.selectedCity.code === "2" ){
      this.alfa2=[]; 
      this.polId=0;
      this.ruta_img = '../assets/polybius.png';
      for(let i = 0 ; i < this.rowletras.length; i++){
        for(let j = 0; j < this.columletras.length; j++){  
            if(this.polId===8 || this.polId===13){
              this.l = { id:this.polId, letra:this.rowletras[i]+""+this.columletras[j]+ " "};
              this.alfa2.push(this.l);
              this.polId = this.polId + 1;
            }
            this.l = { id:this.polId, letra:this.rowletras[i]+""+this.columletras[j]+" "};
            this.alfa2.push(this.l);
            this.polId = this.polId + 1;
        }
      }
    }else{
      this.ruta_img = '../assets/cesar.png';
      this.alfa2=[];
    }
    
    
  }

}













export class ModelComponent {
  val: number;
} 

interface data{
  id:number;
  letra:string;
}

interface City {
  name: string,
  code: string
}