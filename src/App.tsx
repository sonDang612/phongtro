import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';
import {
  Home,
  HomePage,
  Login,
  RentalApartment,
  RentalHouse,
  RentalRoom,
  RentalSpace,
} from './containers/Public';
import { paths } from './utils/constants';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-primary">
        <Routes>
          <Route path={paths.HOME} element={<Home />}>
            <Route path={'/'} element={<HomePage />} />
            <Route path={paths.HOME__PAGE} element={<HomePage />} />
            <Route path={paths.LOGIN} element={<Login />} />
            <Route path={paths.CHO_THUE_CAN_HO} element={<RentalApartment />} />
            <Route path={paths.CHO_THUE_MAT_BANG} element={<RentalSpace />} />
            <Route path={paths.CHO_THUE_PHONG_TRO} element={<RentalRoom />} />
            <Route path={paths.NHA_CHO_THUE} element={<RentalHouse />} />
          </Route>
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
