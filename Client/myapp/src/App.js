import logo from './logo.svg';
import './App.css';
import MainpageComp from './Mainpage';
import { Route, Routes, Link } from 'react-router-dom';
import LoginComp from './Login';
import MoviesComp from './Movies';
import SubscriptionsComp from './Subscriptions';
import AllMoviesComp from './AllMovies';
import AddMovieComp from './AddMovie';
import EditMovieComp from './EditMovie';
import AllMembersComp from './AllMembers';
import AddMemberComp from './AddMember';
import EditMemberComp from './EditMember';


function App() {
  return (
    <div className="App">

      <h1>Movies - Subscriptions Website</h1>


      <Routes>
        <Route path="" element={<LoginComp />} />
        <Route path="mainpage" element={<MainpageComp />}>
            <Route path="" element={<MoviesComp />}>

                  <Route path="" element={<AllMoviesComp />}/>
                  <Route path="addMovie" element={<AddMovieComp />}/>
                  <Route path="editMovie/:id" element={<EditMovieComp />}/>
                 
            </Route>

            <Route path="subscriptions" element={<SubscriptionsComp />}>
                  <Route path="" element={<AllMembersComp/>}/>
                  <Route path="addMember" element={<AddMemberComp/>}/>
                  <Route path="editMember/:id" element={<EditMemberComp/>}/>
          
            </Route>

          </Route>

      </Routes>

    </div>
  );
}

export default App;
