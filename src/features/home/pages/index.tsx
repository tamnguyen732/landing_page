import { MainLayout } from '~/layouts';
import BackgroundShape from '../components/BackgroundShape';
import Banner from '../components/Banner';
import EmployerList from '../components/EmployerList';
import EmployeeList from '../components/EmployeeList';
import Register from '../components/Register';
import JoinFair from '../components/JoinFair';

const Home = () => {
  return (
    <MainLayout>
      <Banner />
      <BackgroundShape />
      <Register />
      <EmployerList />
      <EmployeeList />
      <JoinFair />
    </MainLayout>
  );
};

export default Home;
