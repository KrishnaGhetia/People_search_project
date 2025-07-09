import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PeopleSearchComponent } from './components/people-search/people-search.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PeopleSearchComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'healthcare-people-search';
}
