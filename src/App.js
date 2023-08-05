import './App.css';
import Banner from './banner';
import Header from './header';
import SectionSkil from './section';
import SectionClip from './section-2';
import SectionAi from './section-4';
import Contact from './contact';
import Footer from './footer';



function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <SectionSkil/>
      <SectionClip/>
      <SectionAi/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
