import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'image-gallery';
  activeIndex: number = 0;

  ngOnInit() {

  }
  flowers: any[] = [
    {
      id: "1",
      path: "../assets/images/dahlia.jpg",
      alt: "image of dahlia",
      caption: "This is a picture of a dahlia"
    },
    {
      id: "2",
      path: "../assets/images/daisy.jpg",
      alt: "image of daisy",
      caption: "This is a picture of a daisy"
    },
    {
      id: "3",
      path: "../assets/images/hydrangea.jpg",
      alt: "image of hydrangea",
      caption: "This is a picture of a hydrangea"
    },
    {
      id: "4",
      path: "../assets/images/lotus.jpg",
      alt: "image of lotus",
      caption: "This is a picture of a lotus"
    },
    {
      id: "5",
      path: "../assets/images/poppy.jpg",
      alt: "image of poppy",
      caption: "This is a picture of a poppy"
    },
    {
      id: "6",
      path: "../assets/images/sakura.jpg",
      alt: "image of sakura",
      caption: "This is a picture of a sakura"
    },
    {
      id: "7",
      path: "../assets/images/sunflower.jpg",
      alt: "image of sunflower",
      caption: "This is a picture of a sunflower"
    },
    {
      id: "8",
      path: "../assets/images/tulip.jpg",
      alt: "image of tulip",
      caption: "This is a picture of a tulip"
    },
    {
      id: "9",
      path: "../assets/images/lilac.jpg",
      alt: "image of lilac",
      caption: "This is a picture of a lilac"
    },
    {
      id: "10",
      path: "../assets/images/rose.jpg",
      alt: "image of rose",
      caption: "This is a picture of a rose"
    }
  ]

  get activeFlower(): any | undefined {
    return this.flowers[this.activeIndex];
  }

  get activeCaption(): string | undefined {
    return this.activeFlower ? this.activeFlower.caption : '';
  }

  setActiveFlower(flower: any): void {
    this.activeIndex = this.flowers.indexOf(flower);
  }

  setActiveIndex(index: number): void {
    this.activeIndex = index;
  }

  goBack(): void {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }
 
  goForward(): void {
    if (this.activeIndex < this.flowers.length - 1) {
      this.activeIndex++;
    }
  }

  isFirstImage(): boolean {
    return this.activeIndex === 0;
  }

  isLastImage(): boolean {
    return this.activeIndex === this.flowers.length - 1;
  }


}

  
