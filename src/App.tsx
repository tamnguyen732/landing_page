import { Toaster } from 'react-hot-toast';

import { RootModal } from './components';
import Home from './features/home/pages';

function App() {
  return (
    <>
      <Home />
      <RootModal />
      <Toaster
        toastOptions={{
          style: {
            fontSize: '1.6rem',
          },
        }}
      />
    </>
  );
}

export default App;
