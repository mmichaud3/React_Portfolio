import MainContent from '../../MainContent/MainContent';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './App.css';
library.add(faLinkedinIn);

function App() {
  return (
    <div className='app'>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
