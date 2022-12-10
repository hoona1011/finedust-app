import Footer from 'components/Footer';
import PageTitle from 'components/PageTitle';
import { useLocation } from 'react-router-dom';
import Router from 'Router';

function App() {
  const { pathname: pathName } = useLocation();

  return (
    <div className="w-[100%]  flex justify-center items-center ">
      <div className="w-[100%] max-w-[1024px] min-w-[400px]">
        <div className="bg-gradient-to-t from-[white] to-[#EAF0FF] min-h-screen">
          <PageTitle pathName={pathName} />
          <Router />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
