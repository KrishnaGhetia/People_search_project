import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, startWith } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Person } from '../../models/person.model';
import { PeopleService } from '../../services/people.service';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkScrollableModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-people-search',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CdkTableModule, CdkScrollableModule],
  templateUrl: './people-search.component.html',
  styleUrls: ['./people-search.component.css']
})
export class PeopleSearchComponent implements OnInit {
  searchControl = new FormControl('');
  
  // Signals for reactive state management
  isLoading = signal(false);
  searchResults = signal<Person[]>([]);
  searchTerm = signal('');
  
  // Computed signals
  hasResults = computed(() => this.searchResults().length > 0);
  showNoResults = computed(() => 
    !this.isLoading() && this.searchTerm().trim() !== '' && !this.hasResults()
  );
  showInitialState = computed(() => 
    !this.isLoading() && this.searchTerm().trim() === ''
  );
  maleCount = computed(() => this.searchResults().filter(p => p.sex === 'Male').length);
  femaleCount = computed(() => this.searchResults().filter(p => p.sex === 'Female').length);

  private searchSubject = new BehaviorSubject<string>('');

  constructor(private peopleService: PeopleService) {
    // Set up reactive search
    this.setupReactiveSearch();
  }

  ngOnInit(): void {
    // Load initial data
    this.loadInitialData();
  }

  private setupReactiveSearch(): void {
    // Watch for search control value changes
    this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(value => {
      const searchValue = value || '';
      this.searchTerm.set(searchValue);
      this.searchSubject.next(searchValue);
    });

    // Set up search subscription
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => {
        this.isLoading.set(true);
        return this.peopleService.searchPeople(term);
      })
    ).subscribe({
      next: (results) => {
        this.searchResults.set(results);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Search error:', error);
        this.isLoading.set(false);
      }
    });
  }

  private loadInitialData(): void {
    this.isLoading.set(true);
    this.peopleService.getAllPeople().subscribe({
      next: (people) => {
        this.searchResults.set(people);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Error loading initial data:', error);
        this.isLoading.set(false);
      }
    });
  }

  onSearchClear(): void {
    this.searchControl.setValue('');
    this.searchTerm.set('');
    this.loadInitialData();
  }

  trackByPersonId(index: number, person: Person): number {
    return person.id;
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }
}
