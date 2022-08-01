import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import { allClubsAct, allUsersAct } from './actions/index';
import LogInPage from './Pages/LogInPage';
import ClubInfo from './Pages/ClubInfo';
import Profile from './Pages/Profile';
import CreateAccount from './Pages/CreateAccount';



function App() {
  const dispatch = useDispatch()

  const url = `http://localhost:4000/allClubs.json`;
  const url2 = `http://localhost:4000/logins.json`;



  useEffect(() => {
    getClubs()
    getUsers()
  }, []);

  // Axios fetch 


  const getClubs = async () => {
    const response = await axios.get(url)
      .catch((err) => {
        console.log("ERROR", err);

      })
    // Skickar datan från API till store
    dispatch(allClubsAct(response.data));
  }


  const getUsers = async () => {
    const response = await axios.get(url2)
      .catch((err) => {
        console.log("ERROR", err);

      })
    // Skickar datan från API till store
    dispatch(allUsersAct(response.data));
  }


  return (
    <main>
      <Router>
        <main>
          <Link to="/"></Link>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/LogIn" element={<LogInPage />} />
            <Route exact path="/ClubInfo" element={<ClubInfo />} />
            <Route exact path="/Profile" element={<Profile />} />
            <Route exact path="/CreateAccount" element={<CreateAccount />} />



          </Routes>
        </main>
      </Router>
    </main>
  );
}

export default App;
