import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mon blog';
  posts = [
    {
      titlePost: 'Mon premier article',
      content: 'contenu de mon article',
      loveIts: 0,
      created_at: new Date(),
    },
    {
      titlePost: 'Mon deuxième article',
      content: 'contenu de mon article',
      loveIts: 0,
      created_at: new Date(),
    },
    {
      titlePost: 'Mon troisième article',
      content: 'contenu de mon article',
      loveIts: 0,
      created_at: new Date(),
    }
  ];
}

