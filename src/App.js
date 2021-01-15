import './App.css';
import { Grid, Paper } from '@material-ui/core';
import Ordklassar from './components/Ordklassar'
import Substantiv from './components/Substantiv'
import Menu from './interface/Menu'
import { BrowserRouter } from 'react-router-dom'

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
          <h2 className="nynorsk">Nynorsk på russisk</h2>
        </Grid>
      <Grid direction="row" container 
        justify="center"
        alignItems="baseline" spacing={3} alignContent="center" style={padding}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Paper elevation={3}  square><Ordklassar /></Paper>
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
