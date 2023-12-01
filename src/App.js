import './App.css';
import { ThemeProvider } from './Providers';
import { LandingPage } from './pages/Landing';

function App() {
  return (
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
