import { Component } from '@angular/core';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrl: './show-case.component.css'
})
export class ShowCaseComponent {
 reviews = [
    {
      name: 'Amit Sharma',
      date: '12 Aug 2025',
      rating: 5,
      comment: 'Amazing quality! The rice is fresh and aromatic.',
      avatar: 'https://i.pravatar.cc/50?img=1'
    },
    {
      name: 'Priya Singh',
      date: '10 Aug 2025',
      rating: 4,
      comment: 'Good packaging and fast delivery. Will order again!',
      avatar: 'https://i.pravatar.cc/50?img=2'
    },
    {
      name: 'Rahul Verma',
      date: '08 Aug 2025',
      rating: 5,
      comment: 'Authentic taste, feels like homegrown rice.',
      avatar: 'https://i.pravatar.cc/50?img=3'
    }
  ];
}
