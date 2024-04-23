import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserInputBoxComponent } from './components/user-input-box/user-input-box.component';
import { OddLengthWordsComponent } from './components/odd-length-words/odd-length-words.component';
import { EvenLengthWordsComponent } from './components/even-length-words/even-length-words.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserInputBoxComponent, OddLengthWordsComponent, EvenLengthWordsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fun-for-nerds';

  currentText: String = '';
  oddWordsList: String[] = [];
  evenWordsList: String[] = [];

  onUserInput(text: String) {
    this.currentText = text;
  }

  onSubmit(submittedWords: String[]) {
    let oddWordsList: String[] = [];
    let evenWordsList: String[] = [];
    for(let word of submittedWords) {
      if((word.length % 2) !== 0) {
        oddWordsList.push(word)
      } else {
        evenWordsList.push(word)
      }
    }
    this.oddWordsList = oddWordsList;
    this.evenWordsList = evenWordsList;
  }
}
