import './App.css';
import { Grid, Paper } from '@material-ui/core';
import Ordklasser from './components/Ordklasser'
import Substantiv from './components/Substantiv'
import Adverb from './components/Adverb'

const padding = {
  padding: "10px"
}

function App() {
  return (
    <div className="App">
      <Grid item xs={12} className="header" >
          <h1 className="header-title">Краткая грамматика<br></br> новонорвежского</h1>
        </Grid>
      <Grid direction="row" container 
        justify="center"
        alignItems="baseline" spacing={3} alignContent="center" style={padding}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Paper elevation={3}  square><Ordklasser /></Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Paper elevation={3} square><Substantiv /></Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Paper elevation={3} square><Adverb /></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
