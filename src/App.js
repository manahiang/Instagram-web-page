
import './App.css';
import Header from './components/header';
import './index.css';
import{BrowserRouter,Routes,Route} from "react-router-dom"
import PageLogin from './components/pageLogin';
import Profile from './components/profile';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='log-out' element={<PageLogin/>}/>
      </Routes>
     </BrowserRouter>
       
    </div>
  );
}
export default App;
