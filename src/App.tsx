import React from 'react';
import './App.css';
import { authRoute,privateRoute } from './router';
import {Routes,BrowserRouter as Router,Route,Navigate} from 'react-router-dom';
import store from './store/store';
import ThemeProvider from './utilities/theme/MuiThemeProvider';
import { Provider} from 'react-redux';
function App() {
  const token=true;
  return (
<Provider store={store}>
<ThemeProvider>
    <Router>
    {token ? (
        privateRoute()
        ) : (    
        authRoute()                    
        )}
  </Router>
 </ThemeProvider>
</Provider>
  );
}

export default App;
