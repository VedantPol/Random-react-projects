import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Button class="btn btn-default" variant="outline-primary" >choose file</Button>
      <Button class="btn btn-default" variant="outline-success" >upload</Button>{' '}

      <div className="img-preview">

      </div>
    </div>
  );
}

export default App;
