import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'Mon blog';
  posts = [
    {
      titlePost: 'Mon premier article',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas, ' +
        'lacus et tincidunt mattis, mauris lectus mattis ante, sed ultrices quam est nec tortor. ' +
        'Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam vitae turpis porta, ' +
        'viverra ligula eget, lacinia nisi. Nulla commodo euismod elit, in rutrum lorem rhoncus sed. ' +
        'Morbi ac ex non nisi interdum lobortis sit amet in turpis. Quisque aliquet, turpis at aliquam iaculis, ' +
        'erat urna rhoncus tellus, id blandit sem justo id arcu. Duis posuere turpis ac mauris finibus accumsan.',
      loveIts: 0,
      created_at: Date(),
    },
    {
      titlePost: 'Mon deuxième article',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas, ' +
        'lacus et tincidunt mattis, mauris lectus mattis ante, sed ultrices quam est nec tortor. ' +
        'Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam vitae turpis porta, ' +
        'viverra ligula eget, lacinia nisi. Nulla commodo euismod elit, in rutrum lorem rhoncus sed. ' +
        'Morbi ac ex non nisi interdum lobortis sit amet in turpis. Quisque aliquet, turpis at aliquam iaculis, ' +
        'erat urna rhoncus tellus, id blandit sem justo id arcu. Duis posuere turpis ac mauris finibus accumsan.',
      loveIts: 0,
      created_at: Date(),
    },
    {
      titlePost: 'Mon troisième article',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas, ' +
        'lacus et tincidunt mattis, mauris lectus mattis ante, sed ultrices quam est nec tortor. ' +
        'Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam vitae turpis porta, ' +
        'viverra ligula eget, lacinia nisi. Nulla commodo euismod elit, in rutrum lorem rhoncus sed. ' +
        'Morbi ac ex non nisi interdum lobortis sit amet in turpis. Quisque aliquet, turpis at aliquam iaculis, ' +
        'erat urna rhoncus tellus, id blandit sem justo id arcu. Duis posuere turpis ac mauris finibus accumsan.',
      loveIts: 0,
      created_at: Date(),
    }
  ];
}

