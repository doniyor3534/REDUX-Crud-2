import HOME from './CRUD_REDUX/HOME';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Add from './CRUD_REDUX/components/Add';
import Edit from './CRUD_REDUX/components/Edit';
import NAvbar from './CRUD_REDUX/components/NAvbar';


function App() {
  return (
    <div className="App">
      <Router>
        <NAvbar/>
        <Routes>
          <Route path='/' exact element={<HOME />} />
          <Route path='/add' element={<Add />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
