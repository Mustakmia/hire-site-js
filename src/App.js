import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './App.css';
import Header from './component/Header/Header';
import MyTeams from './component/MyTeams/MyTeams';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="title">
        <h1 className="heading">THIS IS MY DEVELOPER TEAM</h1>
        <h5>You Can Hire For Creating Any Dynamic Web-Site</h5>
        <h2>Total <span className="members">Members</span> 20</h2>
      </div>

      <MyTeams></MyTeams>
    </div>
  );
}

export default App;
// procor jor matha betha niye ata koreci img & icon add korar somoy payne tai number somvob hole full diyen onek sopno niye aceci apnader kace

