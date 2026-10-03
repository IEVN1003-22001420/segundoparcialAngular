import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-zodiaco',
  styleUrl: './zodiaco.css',
  templateUrl: './zodiaco.html',
})
export class Zodiaco {
  dia:number=0;
  mes:number=0;
  ano:number=0;
  nombre:string='';
  apellido:string='';
  sexo:string='';
  resultado:string='';
  edad:number=0;
  imagen:string='';

  horoscopo(){
    let fecha = new Date();
 
    let anohoy = fecha.getFullYear();
    let meshoy = fecha.getMonth() + 1;
    let diahoy = fecha.getDate();
 
    this.edad = anohoy - this.ano;
 
    if (meshoy < this.mes || (meshoy === this.mes && diahoy < this.dia)) {
      this.edad--;
    }
 
    
   

    if ((this.ano== 1936) || (this.ano==1948) || (this.ano==1960) || (this.ano==1972) || (this.ano==1984) || (this.ano==1996) || (this.ano==2008)  || (this.ano==2020)) {
      this.resultado= "Hola "+ this.nombre + " Tienes " + this.edad + " años y tu signo zodiacal es Rata";
      this.imagen= 'https://hips.hearstapps.com/hmg-prod/images/rata-1606302435.jpg?resize=980:*';
    } else if ((this.ano==1937) || (this.ano==1949) || (this.ano==1961) || (this.ano==1973) || (this.ano==1985) || (this.ano==1997) || (this.ano==2009) || (this.ano==2021)) {
      this.resultado= "Hola "+ this.nombre + " Tienes " + this.edad + " años y tu signo zodiacal es Buey";
      this.imagen= 'https://hips.hearstapps.com/hmg-prod/images/buey-1606302466.jpg?resize=980:*';
    }else if((this.ano==1938) || (this.ano==1950) || (this.ano==1962) || (this.ano==1974) || (this.ano==1986) || (this.ano==1998) || (this.ano==2010) || (this.ano==2022)){
      this.resultado= "Hola "+ this.nombre + " Tienes " + this.edad + " años y tu signo zodiacal es Tigre";
      this.imagen= 'https://hips.hearstapps.com/hmg-prod/images/tigre-1606302484.jpg?resize=980:*';
    }else if((this.ano==1939) || (this.ano==1951) || (this.ano==1963) || (this.ano==1975) || (this.ano==1987) || (this.ano==1999) || (this.ano==2011) || (this.ano==2023)){
      this.resultado= "Hola "+ this.nombre + " Tienes " + this.edad + " años y tu signo zodiacal es Conejo";
      this.imagen= 'https://hips.hearstapps.com/hmg-prod/images/conejo-1606302504.jpg?resize=980:*';
    }else if((this.ano==1940) || (this.ano==1952) || (this.ano==1964) || (this.ano==1976) || (this.ano==1988) || (this.ano==2000) || (this.ano==2012) || (this.ano==2024)){
      this.resultado= "Hola "+ this.nombre + " Tienes " + this.edad + " años y tu signo zodiacal es Dragon";
      this.imagen= 'https://hips.hearstapps.com/hmg-prod/images/dragon-1606302524.jpg?resize=980:*';
    }else if((this.ano==1941) || (this.ano==1953) || (this.ano==1965) || (this.ano==1977) || (this.ano==1989) || (this.ano==2001) || (this.ano==2013) || (this.ano==2025)){
      this.resultado= "Hola "+ this.nombre + " Tienes " + this.edad + " años y tu signo zodiacal es Serpiente";
      this.imagen= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Nq8H4Rm7tLqAORAoNLqrPKvxBrjLji9kTtOGAsUyRw&s=10';
    }else if((this.ano==1942) || (this.ano==1954) || (this.ano==1966) || (this.ano==1978) || (this.ano==1990) || (this.ano==2002) || (this.ano==2014) || (this.ano==2026)){
      this.resultado= "Hola "+ this.nombre + " Tienes " + this.edad + " años y tu signo zodiacal es Caballo";
      this.imagen= 'https://hips.hearstapps.com/hmg-prod/images/caballo-1606302262.jpg?resize=980:*';
    }else if((this.ano==1943) || (this.ano==1955) || (this.ano==1967) || (this.ano==1979) || (this.ano==1991) || (this.ano==2003) || (this.ano==2015)){
      this.resultado= "Hola "+ this.nombre + " Tienes " + this.edad + " años y tu signo zodiacal es Cabra";
      this.imagen= 'https://hips.hearstapps.com/hmg-prod/images/cabra-1606302329.jpg?resize=980:*';
    }else if((this.ano==1944) || (this.ano==1956) || (this.ano==1968) || (this.ano==1980) || (this.ano==1992) || (this.ano==2004) || (this.ano==2016)){
      this.resultado= "Hola "+ this.nombre + " Tienes " + this.edad + " años y tu signo zodiacal es Mono";
      this.imagen= 'https://hips.hearstapps.com/hmg-prod/images/mono-1606302352.jpg?resize=980:*';
    }else if((this.ano==1945) || (this.ano==1957) || (this.ano==1969) || (this.ano==1981) || (this.ano==1993) || (this.ano==2005) || (this.ano==2017)){
      this.resultado= "Hola "+ this.nombre + " Tienes " + this.edad + " años y tu signo zodiacal es Gallo";
      this.imagen= 'https://hips.hearstapps.com/hmg-prod/images/gallo-1606302369.jpg?resize=980:*';
    }else if((this.ano==1946) || (this.ano==1958) || (this.ano==1970) || (this.ano==1982) || (this.ano==1994) || (this.ano==2006) || (this.ano==2018)){
      this.resultado= "Hola "+ this.nombre + " Tienes " + this.edad + " años y tu signo zodiacal es Perro";
      this.imagen= 'https://hips.hearstapps.com/hmg-prod/images/gallo-1606302369.jpg?resize=980:*';
  }else if((this.ano==1947) || (this.ano==1959) || (this.ano==1971) || (this.ano==1983) || (this.ano==1995) || (this.ano==2007) || (this.ano==2019)){
      this.resultado= "Hola "+ this.nombre + " Tienes " + this.edad + " años y tu signo zodiacal es Cerdo";
      this.imagen= 'https://hips.hearstapps.com/hmg-prod/images/cerdo-1606302412.jpg?resize=980:*';
  }
} 
}
