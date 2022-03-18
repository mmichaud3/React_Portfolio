import MainContent from '../../MainContent/MainContent';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faDog, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import '../../styles.css';
library.add(faLinkedinIn, faGithub, faInstagram, faEnvelope, faDog);

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
