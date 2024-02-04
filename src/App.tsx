import { Route, Routes } from 'react-router-dom';
import { paths } from './utils/constants';
import { Home, Login } from './containers/Public';

function App() {
  return (
    <h3 className="h-screen w-screen bg-primary">
      <Routes>
        <Route path={paths.HOME} element={<Home />}>
          <Route path={paths.LOGIN} element={<Login />} />
        </Route>
      </Routes>
    </h3>
  );
}

export default App;
