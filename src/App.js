import './App.css';
import { WeatherProvider } from './context/WeatherContext';
import { CityProvider } from './context/CityContext';
import Header from './components/Header';
import Weather from './components/Weather';

function App() {
  return (
    <CityProvider>
      <WeatherProvider>
        <div className='app'>
          <Header/>
          <Weather/>
        </div>
      </WeatherProvider>
    </CityProvider>
  );
}

export default App;
