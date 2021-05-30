import './App.css';
import { Grid, Paper } from '@material-ui/core';
import Ordklassar from './components/Ordklassar'
import Substantiv from './components/Substantiv'
import Menu from './interface/Menu'
import { BrowserRouter } from 'react-router-dom'

import logo from './images/ivaraasenmain.png';
import ornament from './images/nn.png';

const padding = {
  padding: "10px"
}

function App() {
  return (
    <BrowserRouter>
      <div className="App" id="home">
        <Menu></Menu>
        <Grid item xs={12} className="header" >
          <h1 className="header-title">Краткая грамматика<br></br> новонорвежского</h1>
          <img className="ivar-logo" alt="ivar aasen" src={logo}></img><br></br>
          <img className="ornament" alt="ornament" src={ornament}></img>
        </Grid>
        <Grid direction="row" container
          justify="center"
          alignItems="baseline" spacing={0} alignContent="center" style={padding}>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Paper elevation={3} square><Ordklassar /></Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Paper elevation={3} square><Substantiv /></Paper>
          </Grid>
        </Grid>
      </div>
    </BrowserRouter>
  );
}

export default App;
