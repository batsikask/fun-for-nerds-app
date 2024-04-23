import { Routes } from '@angular/router';
import { UserInputBoxComponent } from './components/user-input-box/user-input-box.component';
import { OddLengthWordsComponent } from './components/odd-length-words/odd-length-words.component';
import { EvenLengthWordsComponent } from './components/even-length-words/even-length-words.component';

export const routes: Routes = [
    { path: 'app-user-input-box', component: UserInputBoxComponent},
    { path: 'app-odd-length-words', component: OddLengthWordsComponent},
    { path: 'app-even-length-words', component: EvenLengthWordsComponent},
];
