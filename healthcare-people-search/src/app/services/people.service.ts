import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private mockPeople: Person[] = [
    { id: 1, name: 'John Smith', age: 32, sex: 'Male', roomNo: 'A101' },
    { id: 2, name: 'Sarah Johnson', age: 28, sex: 'Female', roomNo: 'B205' },
    { id: 3, name: 'Michael Brown', age: 45, sex: 'Male', roomNo: 'C303' },
    { id: 4, name: 'Emily Davis', age: 34, sex: 'Female', roomNo: 'A102' },
    { id: 5, name: 'David Wilson', age: 29, sex: 'Male', roomNo: 'B201' },
    { id: 6, name: 'Lisa Anderson', age: 41, sex: 'Female', roomNo: 'C304' },
    { id: 7, name: 'Robert Martinez', age: 37, sex: 'Male', roomNo: 'A103' },
    { id: 8, name: 'Jennifer Taylor', age: 26, sex: 'Female', roomNo: 'B202' },
    { id: 9, name: 'William Thomas', age: 52, sex: 'Male', roomNo: 'C301' },
    { id: 10, name: 'Amanda Jackson', age: 31, sex: 'Female', roomNo: 'A104' },
    { id: 11, name: 'James White', age: 44, sex: 'Male', roomNo: 'B203' },
    { id: 12, name: 'Maria Garcia', age: 39, sex: 'Female', roomNo: 'C302' },
    { id: 13, name: 'Christopher Lee', age: 33, sex: 'Male', roomNo: 'A105' },
    { id: 14, name: 'Jessica Harris', age: 27, sex: 'Female', roomNo: 'B204' },
    { id: 15, name: 'Daniel Clark', age: 48, sex: 'Male', roomNo: 'C305' },
    { id: 16, name: 'Ashley Lewis', age: 35, sex: 'Female', roomNo: 'A106' },
    { id: 17, name: 'Matthew Robinson', age: 42, sex: 'Male', roomNo: 'B206' },
    { id: 18, name: 'Nicole Walker', age: 30, sex: 'Female', roomNo: 'C306' },
    { id: 19, name: 'Joshua Hall', age: 36, sex: 'Male', roomNo: 'A107' },
    { id: 20, name: 'Stephanie Allen', age: 25, sex: 'Female', roomNo: 'B207' }
  ];

  constructor() { }

  /**
   * Get all people
   */
  getAllPeople(): Observable<Person[]> {
    return of(this.mockPeople).pipe(
      delay(300) // Simulate API delay
    );
  }

  /**
   * Search people by name or room number
   */
  searchPeople(searchTerm: string): Observable<Person[]> {
    if (!searchTerm.trim()) {
      return this.getAllPeople();
    }

    const filtered = this.mockPeople.filter(person =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.roomNo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return of(filtered).pipe(
      delay(300) // Simulate API delay
    );
  }

  /**
   * Get a person by ID
   */
  getPersonById(id: number): Observable<Person | undefined> {
    const person = this.mockPeople.find(p => p.id === id);
    return of(person).pipe(
      delay(200)
    );
  }
}
