import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './components/pages/home';
import About from './components/pages/about';
import NotFound from './components/pages/notFound';
import User from './components/pages/user';
import NavBar from './components/layout/navbar';
import { GithubProvider } from "./context/github/githubContext";
import { AlertProvider } from "./context/alert/alertContext";
import Alert from './components/layout/alert';
import Footer from './components/layout/footer';

const App = () => {
    return ( 
      <GithubProvider>
        <AlertProvider>

        <Router>
         <div className="flex flex-col justify-between h-screen">
             <NavBar />
 
             <main className="container mx-auto pb-12">
              <Alert />
              <Routes>
                  <Route exact path="/" element={<Home />} />    
                  <Route path="/about" element={<About />} />    
                  <Route path="/user/:login" element={<User />} />    
                  <Route path="/notfound" element={<NotFound />} />    
                  <Route path="/*" element={<NotFound />} />    
                </Routes> 
                               
                </main>

             <Footer/>
         </div>

        </Router>
        </AlertProvider>
        </GithubProvider>

     );
}
 
export default App;