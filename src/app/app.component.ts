import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carousel';
  images = [
    {
      imageSrc:
        'https://picsum.photos/id/42/3456/2304',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'https://picsum.photos/id/70/3011/2000',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'https://picsum.photos/id/76/367/267',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'https://picsum.photos/id/84/367/267',
      imageAlt: 'nature1',
    }



  ]
}
