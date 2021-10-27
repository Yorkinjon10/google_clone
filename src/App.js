import React, {useState} from 'react'
import  Footer from './components/Footer';
import  Navbar from './components/Navbar';
import  Routes from './components/Routes';

const App = () => {
  const [DarkTheme, setDarkTheme] = useState(false);

  return (
    <div className={DarkTheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar DarkTheme={DarkTheme} setDarkTheme={setDarkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  )
}

export default App
