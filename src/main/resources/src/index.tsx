import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import * as ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
            <App />
    </BrowserRouter>
);

