import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private mockPeople: Person[] = [
    { id: 1, name: 'John Smith', age: 32, sex: 'Male', roomNo: 'A101', city: 'New York' },
    { id: 2, name: 'Sarah Johnson', age: 28, sex: 'Female', roomNo: 'B205', city: 'Los Angeles' },
    { id: 3, name: 'Michael Brown', age: 45, sex: 'Male', roomNo: 'C303', city: 'Chicago' },
    { id: 4, name: 'Emily Davis', age: 34, sex: 'Female', roomNo: 'A102', city: 'Houston' },
    { id: 5, name: 'David Wilson', age: 29, sex: 'Male', roomNo: 'B201', city: 'Phoenix' },
    { id: 6, name: 'Lisa Anderson', age: 41, sex: 'Female', roomNo: 'C304', city: 'Philadelphia' },
    { id: 7, name: 'Robert Martinez', age: 37, sex: 'Male', roomNo: 'A103', city: 'San Antonio' },
    { id: 8, name: 'Jennifer Taylor', age: 26, sex: 'Female', roomNo: 'B202', city: 'San Diego' },
    { id: 9, name: 'William Thomas', age: 52, sex: 'Male', roomNo: 'C301', city: 'Dallas' },
    { id: 10, name: 'Amanda Jackson', age: 31, sex: 'Female', roomNo: 'A104', city: 'San Jose' },
    { id: 11, name: 'James White', age: 44, sex: 'Male', roomNo: 'B203', city: 'Austin' },
    { id: 12, name: 'Maria Garcia', age: 39, sex: 'Female', roomNo: 'C302', city: 'Jacksonville' },
    { id: 13, name: 'Christopher Lee', age: 33, sex: 'Male', roomNo: 'A105', city: 'Fort Worth' },
    { id: 14, name: 'Jessica Harris', age: 27, sex: 'Female', roomNo: 'B204', city: 'Columbus' },
    { id: 15, name: 'Daniel Clark', age: 48, sex: 'Male', roomNo: 'C305', city: 'Indianapolis' },
    { id: 16, name: 'Ashley Lewis', age: 35, sex: 'Female', roomNo: 'A106', city: 'Charlotte' },
    { id: 17, name: 'Matthew Robinson', age: 42, sex: 'Male', roomNo: 'B206', city: 'San Francisco' },
    { id: 18, name: 'Nicole Walker', age: 30, sex: 'Female', roomNo: 'C306', city: 'Seattle' },
    { id: 19, name: 'Joshua Hall', age: 36, sex: 'Male', roomNo: 'A107', city: 'Denver' },
    { id: 20, name: 'Stephanie Allen', age: 25, sex: 'Female', roomNo: 'B207', city: 'Washington DC' },
    { id: 21, name: 'Ryan Mitchell', age: 29, sex: 'Male', roomNo: 'D401', city: 'Boston' },
    { id: 22, name: 'Michelle Thompson', age: 31, sex: 'Female', roomNo: 'D402', city: 'El Paso' },
    { id: 23, name: 'Kevin Parker', age: 40, sex: 'Male', roomNo: 'E501', city: 'Detroit' },
    { id: 24, name: 'Rachel Adams', age: 33, sex: 'Female', roomNo: 'E502', city: 'Nashville' },
    { id: 25, name: 'Brian Cooper', age: 38, sex: 'Male', roomNo: 'A108', city: 'Portland' },
    { id: 26, name: 'Lauren Reed', age: 26, sex: 'Female', roomNo: 'B208', city: 'Oklahoma City' },
    { id: 27, name: 'Tyler Bailey', age: 35, sex: 'Male', roomNo: 'C307', city: 'Las Vegas' },
    { id: 28, name: 'Samantha Ward', age: 29, sex: 'Female', roomNo: 'D403', city: 'Louisville' },
    { id: 29, name: 'Gregory Foster', age: 47, sex: 'Male', roomNo: 'E503', city: 'Baltimore' },
    { id: 30, name: 'Megan Turner', age: 32, sex: 'Female', roomNo: 'A109', city: 'Milwaukee' },
    { id: 31, name: 'Sean Phillips', age: 28, sex: 'Male', roomNo: 'B209', city: 'Albuquerque' },
    { id: 32, name: 'Natalie Campbell', age: 36, sex: 'Female', roomNo: 'C308', city: 'Tucson' },
    { id: 33, name: 'Justin Evans', age: 41, sex: 'Male', roomNo: 'D404', city: 'Fresno' },
    { id: 34, name: 'Brittany Scott', age: 27, sex: 'Female', roomNo: 'E504', city: 'Sacramento' },
    { id: 35, name: 'Aaron Murphy', age: 39, sex: 'Male', roomNo: 'A110', city: 'Long Beach' },
    { id: 36, name: 'Heather Rivera', age: 34, sex: 'Female', roomNo: 'B210', city: 'Kansas City' },
    { id: 37, name: 'Nathan Cook', age: 43, sex: 'Male', roomNo: 'C309', city: 'Mesa' },
    { id: 38, name: 'Vanessa Rogers', age: 30, sex: 'Female', roomNo: 'D405', city: 'Virginia Beach' },
    { id: 39, name: 'Jordan Powell', age: 37, sex: 'Male', roomNo: 'E505', city: 'Atlanta' },
    { id: 40, name: 'Kimberly Long', age: 25, sex: 'Female', roomNo: 'A111', city: 'Colorado Springs' },
    { id: 41, name: 'Carl Hughes', age: 50, sex: 'Male', roomNo: 'B211', city: 'Omaha' },
    { id: 42, name: 'Tiffany Price', age: 28, sex: 'Female', roomNo: 'C310', city: 'Raleigh' },
    { id: 43, name: 'Marcus Watson', age: 33, sex: 'Male', roomNo: 'D406', city: 'Miami' },
    { id: 44, name: 'Crystal Kelly', age: 31, sex: 'Female', roomNo: 'E506', city: 'Oakland' },
    { id: 45, name: 'Derek Richardson', age: 46, sex: 'Male', roomNo: 'A112', city: 'Minneapolis' },
    { id: 46, name: 'Melissa Cox', age: 29, sex: 'Female', roomNo: 'B212', city: 'Tulsa' },
    { id: 47, name: 'Brandon Ward', age: 35, sex: 'Male', roomNo: 'C311', city: 'Cleveland' },
    { id: 48, name: 'Danielle Howard', age: 32, sex: 'Female', roomNo: 'D407', city: 'Wichita' },
    { id: 49, name: 'Todd Ramirez', age: 42, sex: 'Male', roomNo: 'E507', city: 'Arlington' },
    { id: 50, name: 'Andrea Stewart', age: 28, sex: 'Female', roomNo: 'A113', city: 'New Orleans' },
    { id: 51, name: 'Cole Morris', age: 36, sex: 'Male', roomNo: 'B213', city: 'Bakersfield' },
    { id: 52, name: 'Courtney Ross', age: 30, sex: 'Female', roomNo: 'C312', city: 'Tampa' },
    { id: 53, name: 'Blake Peterson', age: 38, sex: 'Male', roomNo: 'D408', city: 'Honolulu' },
    { id: 54, name: 'Jenna Butler', age: 26, sex: 'Female', roomNo: 'E508', city: 'Anaheim' },
    { id: 55, name: 'Lucas Simmons', age: 34, sex: 'Male', roomNo: 'A114', city: 'Aurora' },
    { id: 56, name: 'Paige Foster', age: 27, sex: 'Female', roomNo: 'B214', city: 'Santa Ana' },
    { id: 57, name: 'Ethan Jenkins', age: 31, sex: 'Male', roomNo: 'C313', city: 'St. Louis' },
    { id: 58, name: 'Alexis Perry', age: 33, sex: 'Female', roomNo: 'D409', city: 'Riverside' },
    { id: 59, name: 'Trevor Coleman', age: 40, sex: 'Male', roomNo: 'E509', city: 'Corpus Christi' },
    { id: 60, name: 'Kayla Russell', age: 29, sex: 'Female', roomNo: 'A115', city: 'Lexington' },
    { id: 61, name: 'Caleb Griffin', age: 37, sex: 'Male', roomNo: 'B215', city: 'Pittsburgh' },
    { id: 62, name: 'Jasmine Diaz', age: 25, sex: 'Female', roomNo: 'C314', city: 'Anchorage' },
    { id: 63, name: 'Ian Hayes', age: 44, sex: 'Male', roomNo: 'D410', city: 'Stockton' },
    { id: 64, name: 'Destiny Myers', age: 28, sex: 'Female', roomNo: 'E510', city: 'Cincinnati' },
    { id: 65, name: 'Garrett Ford', age: 35, sex: 'Male', roomNo: 'A116', city: 'St. Paul' },
    { id: 66, name: 'Brooke Hamilton', age: 32, sex: 'Female', roomNo: 'B216', city: 'Toledo' },
    { id: 67, name: 'Mason Graham', age: 39, sex: 'Male', roomNo: 'C315', city: 'Newark' },
    { id: 68, name: 'Haley Sullivan', age: 26, sex: 'Female', roomNo: 'D411', city: 'Greensboro' },
    { id: 69, name: 'Hunter Wallace', age: 41, sex: 'Male', roomNo: 'E511', city: 'Plano' },
    { id: 70, name: 'Shelby Woods', age: 30, sex: 'Female', roomNo: 'A117', city: 'Henderson' },
    { id: 71, name: 'Dustin Cole', age: 34, sex: 'Male', roomNo: 'B217', city: 'Lincoln' },
    { id: 72, name: 'Lindsey West', age: 27, sex: 'Female', roomNo: 'C316', city: 'Buffalo' },
    { id: 73, name: 'Cody Jordan', age: 36, sex: 'Male', roomNo: 'D412', city: 'Jersey City' },
    { id: 74, name: 'Marissa Owens', age: 31, sex: 'Female', roomNo: 'E512', city: 'Chula Vista' },
    { id: 75, name: 'Jake Reynolds', age: 38, sex: 'Male', roomNo: 'A118', city: 'Fort Wayne' },
    { id: 76, name: 'Gabrielle Fisher', age: 29, sex: 'Female', roomNo: 'B218', city: 'Orlando' },
    { id: 77, name: 'Wesley Ellis', age: 43, sex: 'Male', roomNo: 'C317', city: 'St. Petersburg' },
    { id: 78, name: 'Allison Harrison', age: 32, sex: 'Female', roomNo: 'D413', city: 'Chandler' },
    { id: 79, name: 'Dalton Gibson', age: 27, sex: 'Male', roomNo: 'E513', city: 'Laredo' },
    { id: 80, name: 'Cassandra McDonald', age: 35, sex: 'Female', roomNo: 'A119', city: 'Norfolk' },
    { id: 81, name: 'Jared Cruz', age: 40, sex: 'Male', roomNo: 'B219', city: 'Durham' },
    { id: 82, name: 'Amber Marshall', age: 28, sex: 'Female', roomNo: 'C318', city: 'Madison' },
    { id: 83, name: 'Spencer Ortiz', age: 33, sex: 'Male', roomNo: 'D414', city: 'Lubbock' },
    { id: 84, name: 'Erica Gomez', age: 26, sex: 'Female', roomNo: 'E514', city: 'Irvine' },
    { id: 85, name: 'Brent Murray', age: 42, sex: 'Male', roomNo: 'A120', city: 'Winston-Salem' },
    { id: 86, name: 'Katelyn Freeman', age: 30, sex: 'Female', roomNo: 'B220', city: 'Glendale' },
    { id: 87, name: 'Tanner Wells', age: 34, sex: 'Male', roomNo: 'C319', city: 'Garland' },
    { id: 88, name: 'Olivia Webb', age: 29, sex: 'Female', roomNo: 'D415', city: 'Hialeah' },
    { id: 89, name: 'Grant Simpson', age: 37, sex: 'Male', roomNo: 'E515', city: 'Reno' },
    { id: 90, name: 'Sophia Stevens', age: 25, sex: 'Female', roomNo: 'A121', city: 'Chesapeake' },
    { id: 91, name: 'Landon Tucker', age: 39, sex: 'Male', roomNo: 'B221', city: 'Gilbert' },
    { id: 92, name: 'Isabella Porter', age: 31, sex: 'Female', roomNo: 'C320', city: 'Baton Rouge' },
    { id: 93, name: 'Tristan Hunter', age: 36, sex: 'Male', roomNo: 'D416', city: 'Irving' },
    { id: 94, name: 'Chloe Hicks', age: 28, sex: 'Female', roomNo: 'E516', city: 'Scottsdale' },
    { id: 95, name: 'Bryce Crawford', age: 41, sex: 'Male', roomNo: 'A122', city: 'North Las Vegas' },
    { id: 96, name: 'Zoe Henry', age: 27, sex: 'Female', roomNo: 'B222', city: 'Fremont' },
    { id: 97, name: 'Nolan Boyd', age: 33, sex: 'Male', roomNo: 'C321', city: 'Boise' },
    { id: 98, name: 'Avery Mason', age: 30, sex: 'Female', roomNo: 'D417', city: 'Richmond' },
    { id: 99, name: 'Logan Morales', age: 35, sex: 'Male', roomNo: 'E517', city: 'San Bernardino' },
    { id: 100, name: 'Lily Banks', age: 26, sex: 'Female', roomNo: 'A123', city: 'Birmingham' }
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
   * Search people by name, room number, city, or gender
   */
  searchPeople(searchTerm: string): Observable<Person[]> {
    if (!searchTerm.trim()) {
      return this.getAllPeople();
    }

    const filtered = this.mockPeople.filter(person =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.roomNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.sex.toLowerCase().includes(searchTerm.toLowerCase())
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
