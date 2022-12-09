import Footer from 'components/Footer';
import PageTitle from 'components/PageTitle';
import { useLocation } from 'react-router-dom';
import Router from 'Router';

function App() {
  const { pathname: pathName } = useLocation();

  return (
    <div className="w-[100%]  flex justify-center items-center">
      <div className="w-[50%] bg-gradient-to-b from-[white] to-[#EAF0FF] h-screen">
        <PageTitle pathName={pathName} />
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
