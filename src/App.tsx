import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';
import {
  Home,
  HomePage,
  Login,
  PostDetails,
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
      <div className="bg-primary min-h-screen">
        <Routes>
          <Route path={paths.HOME} element={<Home />}>
            <Route path={'/'} element={<HomePage />} />
            <Route path={paths.HOME} element={<HomePage />} />
            <Route path={paths.LOGIN} element={<Login />} />
            <Route path={paths.CHO_THUE_CAN_HO} element={<RentalApartment />} />
            <Route path={paths.CHO_THUE_MAT_BANG} element={<RentalSpace />} />
            <Route path={paths.CHO_THUE_PHONG_TRO} element={<RentalRoom />} />
            <Route path={paths.NHA_CHO_THUE} element={<RentalHouse />} />
            <Route
              path={paths.POST_DETAILS_TITLE_ID}
              element={<PostDetails />}
            />
          </Route>
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
