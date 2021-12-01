import Navbar from './Navbar';
import Left from './Left';
import Right from './Right';
import Footer from './Footer';

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <div className="Content">
        <Left />
        <Right />
      </div>
      <Footer />
    </div>
  );
};

export default App;
