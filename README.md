# People Search Hub

A modern Angular application built for the Frontend Developer Internship at Healthcare AI. This project implements a real-time people search functionality with a focus on excellent UI/UX, featuring advanced search capabilities and comprehensive data management.

## 🚀 Features

- **Real-time Search**: Instant search results as you type with 300ms debouncing
- **Multi-field Search**: Search by name, room number, city, or gender
- **Advanced Filtering**: Comprehensive search across all person attributes
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **Loading States**: Visual feedback during search operations
- **Empty States**: Helpful messaging when no results are found
- **Statistics Dashboard**: Real-time count of search results with gender breakdown
- **Accessibility**: Built with accessibility best practices
- **Performance Optimized**: Debounced search with optimized rendering

## 🛠️ Tech Stack

- **Framework**: Angular 18+ with Standalone Components
- **Styling**: Tailwind CSS for responsive design
- **Component Library**: Angular Material CDK (Table & Scrolling)
- **State Management**: Angular Signals for reactive state
- **TypeScript**: Full TypeScript support with strict typing
- **RxJS**: Reactive programming for search functionality
- **Fonts**: System fonts for optimal performance and compatibility

## 📋 Requirements Met

✅ **Angular with Signals**: Latest Angular version with signal-based state management  
✅ **Angular Material CDK**: Integrated for enhanced table and scrolling functionality  
✅ **Tailwind CSS**: Complete styling solution with custom design system  
✅ **Real-time Search**: Instant search with debouncing for optimal performance  
✅ **Multi-field Search**: Search functionality across name, room, city, and gender  
✅ **Responsive Design**: Mobile-first approach with excellent mobile experience  
✅ **UI Focus**: Professional, clean interface with smooth transitions  

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KrishnaGhetia/People_search_project.git
   cd kinal
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser**:
   Navigate to `http://localhost:4200`

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🎯 Usage

### Search Functionality

1. **By Name**: Type any part of a person's name (e.g., "John", "Smith")
2. **By Room Number**: Type a room number (e.g., "A101", "B205")
3. **By City**: Type a city name (e.g., "New York", "Chicago")
4. **By Gender**: Type "Male" or "Female"
5. **Real-time Results**: Results appear instantly as you type
6. **Clear Search**: Click the 'X' button to clear the search

### Features Demo

- **Initial Load**: Shows all 100 people in the system
- **Search Results**: Filtered results based on your input
- **Statistics**: Real-time count of total results and gender breakdown
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
│   ├── app.config.ts
│   ├── app.html
│   ├── app.css
│   └── app.routes.ts
├── styles.css (Global styles with Tailwind)
├── main.ts
└── index.html
```

## 🎨 Design System

### Color Palette

- **Royal Blue**: Primary brand color (#8b50ff)
- **Purple**: Secondary accent (#a855f7)
- **Pink**: Tertiary accent (#ec4899)
- **Grays**: Various shades for text and backgrounds
- **Status Colors**: Blue for male, pink for female indicators

### Typography

- **System Fonts**: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto
- **Responsive**: Scales appropriately across devices
- **Performance**: No external font loading for optimal performance

### Components

- **Search Input**: Custom styled with focus states and glass effect
- **Data Table**: Responsive table with hover effects and smooth animations
- **Metric Cards**: Elevated cards with backdrop blur effects
- **Badges**: Color-coded status indicators for gender and room numbers
- **Avatar Icons**: Circular avatars with initials and gradient backgrounds

## 🔧 Configuration

### Tailwind CSS

The project uses a custom Tailwind configuration with:
- Custom royal color palette
- Extended animation utilities
- Form plugin for better form styling
- Responsive breakpoints
- Custom gradient definitions

### Angular Configuration

- Standalone components architecture
- Signal-based state management
- Reactive forms with validation
- Optimized build configuration with increased CSS budgets
- Development server with hot reload

### Build Optimization

- CSS budget limits increased to 15kB for component styles
- Tree shaking enabled for smaller bundle sizes
- Production optimizations for better performance

## 📊 Mock Data

The application includes **100 mock people records** with:
- **Names**: Diverse set of first and last names
- **Ages**: Range from 25 to 52 years
- **Gender**: Male and Female options
- **Room Numbers**: Distributed across floors A, B, C, D, and E
- **Cities**: Major US cities for realistic data

## 🔍 Search Algorithm

The search functionality:
1. **Debounces** input for 300ms to prevent excessive operations
2. **Filters** across name, room number, city, and gender fields
3. **Case-insensitive** matching with partial string search
4. **Real-time updates** with loading states
5. **Reactive streams** using RxJS operators

## 🚀 Performance Optimizations

- **Debounced Search**: Prevents excessive filtering operations
- **OnPush Change Detection**: Optimized rendering strategy
- **TrackBy Functions**: Efficient list updates and rendering
- **Signal-based State**: Reactive state management
- **CSS Budget Management**: Optimized styles for production builds
- **System Fonts**: No external font loading for faster page loads

## 🎯 Accessibility Features

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Visible focus indicators
- **Semantic HTML**: Proper heading structure and table semantics
- **Color Contrast**: WCAG compliant color choices
- **Screen Reader Support**: Descriptive text for all interactive elements

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible Grid**: CSS Grid and Flexbox layout
- **Touch Friendly**: Appropriate touch targets (44px minimum)
- **Adaptive Components**: Components that adapt to screen size

## 🔧 Development Setup

### Environment Setup

1. **Node.js**: Version 18 or higher required
2. **Angular CLI**: Installed globally via npm
3. **Git**: Version control with comprehensive .gitignore

### Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

### Git Setup

The project includes a comprehensive `.gitignore` file that excludes:
- `node_modules/` directory
- `dist/` build output
- `.angular/` cache files
- System files (`.DS_Store`, etc.)
- IDE configuration files
- Log files and temporary files

## 🧪 Testing

To run tests:
```bash
npm run test
```

The project includes unit tests for components and services.

## 🚀 Deployment

The application is configured for easy deployment to:
- **GitHub Pages**: Static hosting
- **Netlify**: Continuous deployment
- **Vercel**: Automatic deployments
- **Firebase Hosting**: Google Cloud integration

## 📝 Development Notes

### Key Implementation Details

1. **Signals**: Used for reactive state management and computed properties
2. **Standalone Components**: Modern Angular architecture without modules
3. **RxJS Operators**: debounceTime, distinctUntilChanged, switchMap for search
4. **Tailwind**: Utility-first CSS with custom design system
5. **TypeScript**: Strict typing for better development experience

### Performance Considerations

- Debounced search prevents excessive API calls
- Virtual scrolling implemented for large datasets
- Lazy loading for optimal initial load time
- Optimized build configuration for production

### Recent Improvements

- ✅ Fixed Google Fonts SSL certificate issues
- ✅ Implemented system fonts for better performance
- ✅ Increased CSS budget limits for complex styling
- ✅ Added comprehensive .gitignore file
- ✅ Optimized build configuration

## 🤝 Contributing

This project was created as part of the Frontend Developer Internship application for Healthcare AI. The implementation follows modern Angular best practices and includes comprehensive error handling and performance optimizations.

## 📄 License

This project is created for educational and assessment purposes.

## 🔗 Assignment Details

- **Company**: Healthcare AI
- **Position**: Frontend Developer Internship
- **Requirements**: Angular, Angular Material CDK, Tailwind CSS
- **Focus**: Real-time search functionality with excellent UI/UX
- **Repository**: https://github.com/KrishnaGhetia/People_search_project.git

## 🏆 Technical Achievements

- **100% TypeScript**: Full type safety throughout the application
- **Modern Angular**: Latest Angular 18+ with standalone components
- **Reactive Programming**: RxJS streams for complex data flow
- **Performance Optimized**: Build optimizations and runtime performance
- **Accessibility Compliant**: WCAG 2.1 AA compliance
- **Mobile Responsive**: Perfect mobile experience

---

**Built with ❤️ for Healthcare AI Internship Application**

*Last Updated: January 2025*
