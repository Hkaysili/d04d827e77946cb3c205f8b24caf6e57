import Header from "./Components/Header";
import Footer from "./Components/Footer";
import RoutersWrapper from "./Components/Routers";

import './Styles/App.scss';

function App() {
  return (
    <div>
      <main>
        <Header/>
        <RoutersWrapper className="product--operation--frame"/>
      </main> 
      <Footer/>
    </div> 
  );
}

export default App;
