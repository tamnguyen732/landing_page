import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';

import { store } from './redux/store';

import { GlobalStyles } from './components';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </Provider>,
);
