import ReactDOM from 'react-dom/client';
import { Home } from './pages/Home';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Home />);
