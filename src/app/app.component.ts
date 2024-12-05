import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // Array of church data
  churches = [
    {
      name: 'Church of St. John',
      description: 'A beautiful church in the heart of the city.',
      image: 'https://example.com/church1.jpg',
      link: '',
    },
    {
      name: 'St. Mary\'s Cathedral',
      description: 'Historic cathedral with stunning architecture.',
      image: 'https://example.com/church2.jpg',
      link: 'https://example.com/church2',
    },
    {
      name: 'Grace Fellowship',
      description: 'A modern church with a welcoming community.',
      image: 'https://example.com/church3.jpg',
      link: 'https://example.com/church3',
    }
  ];
  
  constructor() {}
}
