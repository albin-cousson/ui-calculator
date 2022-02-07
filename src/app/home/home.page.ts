import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {

  //@ViewChild('ele') ele: ElementRef<HTMLElement>;

  chiffre = 0;
  signe = '';
  showResultat = false;
  calcul = [];

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  show(ele) {
    this.chiffre = ele;
  }

  showNumber(ele) {
    this.signe = '';
    console.log(typeof this.chiffre == 'number');
    this.chiffre += ele;
    const chiffreConvert = parseFloat(ele);
    this.calcul.push(ele);
  }

  showSigne(ele) {
    this.chiffre = 0;
    this.signe = ele;
    this.calcul.push(ele);
  }

  showCalcul(ele) {
    this.showResultat = true;
    for(const el of this.calcul) {
      console.log(typeof el == 'number');
      console.log(el);
    }
    console.log(this.calcul);
  }

  test() {
    //this.renderer.setStyle(this.ele.nativeElement, 'background', '#d515a0');
    //console.log(this.ele.nativeElement.textContent);
  }

}
