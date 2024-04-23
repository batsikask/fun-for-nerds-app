import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-input-box',
  standalone: true,
  imports: [],
  templateUrl: './user-input-box.component.html',
  styleUrl: './user-input-box.component.css'
})
export class UserInputBoxComponent {

  @Output() userInput = new EventEmitter<String>(); 
  @Output() submitted = new EventEmitter<String[]>();

  currentWord: String = '';
  submittedWords: String[] = [];

  onUserInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.currentWord = value;
    this.userInput.emit(value);
  }

  onSubmit() {
    this.submittedWords.push(this.currentWord);
    this.submitted.emit(this.submittedWords);
  }
}
