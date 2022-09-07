import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';
import './styles.css';

export const OurApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default OurApp;
