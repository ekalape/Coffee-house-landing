import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-choose-fav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choose-fav.component.html',
  styleUrl: './choose-fav.component.scss',

})
export class ChooseFavComponent {

  favOptions = [
    {
      img: "assets/images/coffee-slider-1.png",
      name: "S’mores Frappuccino",
      description: "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.",
      price: 5.50,
    },
    {
      img: "assets/images/coffee-slider-2.png",
      name: "Caramel Macchiato",
      description: "Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.",
      price: 5.0,
    },
    {
      img: "assets/images/coffee-slider-3.png",
      name: "Ice coffee",
      description: "A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.",
      price: 4.50,
    },
  ]
  currentIndex = 0;

  switch(increment: number) {
    const newIndex = this.currentIndex + increment;
    this.currentIndex = (newIndex + this.favOptions.length) % this.favOptions.length;

  }

}
