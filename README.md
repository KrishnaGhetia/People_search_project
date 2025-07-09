# Healthcare People Search

A modern Angular application built for the Frontend Developer Internship at Healthcare AI. This project implements a real-time people search functionality with a focus on excellent UI/UX.

## 🚀 Features

- **Real-time Search**: Instant search results as you type
- **Dual Search Capability**: Search by both name and room number
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **Loading States**: Visual feedback during search operations
- **Empty States**: Helpful messaging when no results are found
- **Accessibility**: Built with accessibility best practices
- **Performance Optimized**: Debounced search with optimized rendering

## 🛠️ Tech Stack

- **Framework**: Angular 18+ with Standalone Components
- **Styling**: Tailwind CSS for responsive design
- **Component Library**: Angular Material CDK
- **State Management**: Angular Signals for reactive state
- **TypeScript**: Full TypeScript support with strict typing
- **RxJS**: Reactive programming for search functionality

## 📋 Requirements Met

✅ **Angular with Signals**: Latest Angular version with signal-based state management  
✅ **Angular Material CDK**: Integrated for enhanced component functionality  
✅ **Tailwind CSS**: Complete styling solution with custom design system  
✅ **Real-time Search**: Instant search with debouncing for optimal performance  
✅ **Name & Room Search**: Search functionality for both person names and room numbers  
✅ **Responsive Design**: Mobile-first approach with excellent mobile experience  
✅ **UI Focus**: Professional, clean interface with smooth transitions  

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd healthcare-people-search
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run start
   ```

4. **Open your browser**:
   Navigate to `http://localhost:4200`

## 🎯 Usage

### Search Functionality

1. **By Name**: Type any part of a person's name (e.g., "John", "Smith")
2. **By Room Number**: Type a room number (e.g., "A101", "B205")
3. **Real-time Results**: Results appear instantly as you type
4. **Clear Search**: Click the 'X' button to clear the search

### Features Demo

- **Initial Load**: Shows all people in the system
- **Search Results**: Filtered results based on your input
- **No Results**: Helpful message when no matches are found
- **Loading States**: Spinner animations during search operations

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── people-search/
│   │       ├── people-search.component.ts
│   │       ├── people-search.component.html
│   │       └── people-search.component.css
│   ├── models/
│   │   └── person.model.ts
│   ├── services/
│   │   └── people.service.ts
│   ├── app.component.ts
│   └── app.config.ts
├── styles.css (Global styles with Tailwind)
└── main.ts
```

## 🎨 Design System

### Color Palette

- **Primary**: Blue shades for main actions and focus states
- **Secondary**: Gray shades for text and backgrounds
- **Accent**: Pink and blue for gender indicators
- **Neutral**: Grays for borders and subtle elements

### Typography

- **Headings**: Inter Tight font family
- **Body**: Inter font family
- **Responsive**: Scales appropriately across devices

### Components

- **Search Input**: Custom styled with focus states
- **Data Table**: Responsive table with hover effects
- **Cards**: Elevated cards with shadows
- **Buttons**: Multiple variants with hover states
- **Badges**: Status indicators for gender and room numbers

## 🔧 Configuration

### Tailwind CSS

The project uses a custom Tailwind configuration with:
- Custom color palette
- Form plugin for better form styling
- Responsive breakpoints
- Animation utilities

### Angular Configuration

- Standalone components architecture
- Signal-based state management
- Reactive forms with validation
- Optimized build configuration

## 📊 Mock Data

The application includes 20 mock people records with:
- **Names**: Diverse set of first and last names
- **Ages**: Range from 25 to 52 years
- **Gender**: Male and Female options
- **Room Numbers**: Distributed across floors A, B, and C

## 🔍 Search Algorithm

The search functionality:
1. **Debounces** input for 300ms to prevent excessive API calls
2. **Filters** both name and room number fields
3. **Case-insensitive** matching
4. **Partial matches** supported
5. **Real-time updates** with loading states

## 🚀 Performance Optimizations

- **Debounced Search**: Prevents excessive filtering
- **OnPush Change Detection**: Optimized rendering
- **TrackBy Functions**: Efficient list updates
- **Lazy Loading**: Components loaded when needed
- **Tree Shaking**: Unused code eliminated

## 🎯 Accessibility Features

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Visible focus indicators
- **Semantic HTML**: Proper heading structure
- **Color Contrast**: WCAG compliant color choices

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: sm, md, lg, xl breakpoints
- **Flexible Grid**: CSS Grid and Flexbox layout
- **Touch Friendly**: Appropriate touch targets
- **Viewport Optimization**: Proper viewport meta tags

## 🧪 Testing

To run tests:
```bash
npm run test
```

## 🚀 Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📝 Development Notes

### Key Implementation Details

1. **Signals**: Used for reactive state management
2. **Standalone Components**: Modern Angular architecture
3. **RxJS Operators**: Debouncing and switchMap for search
4. **Tailwind**: Utility-first CSS approach
5. **TypeScript**: Strict typing for better development experience

### Performance Considerations

- Debounced search prevents excessive API calls
- Virtual scrolling could be added for large datasets
- Pagination could be implemented for better UX with large datasets
- Caching could be added for frequently searched terms

## 🤝 Contributing

This project was created as part of the Frontend Developer Internship application for Healthcare AI. The implementation follows the requirements specified in the assignment.

## 📄 License

This project is created for educational and assessment purposes.

## 🔗 Assignment Details

- **Company**: Healthcare AI
- **Position**: Frontend Developer Internship
- **Requirements**: Angular, Angular Material CDK, Tailwind CSS
- **Focus**: Real-time search functionality with excellent UI/UX
- **Submission**: GitHub public repository

---

**Built with ❤️ for Healthcare AI Internship Application**
