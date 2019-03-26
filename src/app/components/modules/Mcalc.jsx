import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import MicrolinkCard from '@microlink/react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'

// You can pass extra props
const reactives = [
  {
    value: 0,
    label: 'None',
  },
  {
    value: 18.0,
    label: 'Carbono',
  },
  {
    value: 176.25,
    label: 'Fosfato de Sodio',
  },
]

class Mcalc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      molarity: '',
      solution: '',
      solute: '',
      mass: '',
      reactive: '',
      message: 'hello',
    }
  }

  handleChange = name => event => {
    if (name ==='reactive') {
      this.setState({
        mass: event.target.value,
      });
    }
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={8}
          style={{ padding: '2vw' }}
        >
          <Grid
            item
            xs={12}
            style={{ minHeight: '60px' }}
          />
          <Grid item xs={12}>
            <Typography variant="h4">Molarity Calculator</Typography>
            <Paper
              style={{ padding: '1vh' }}
            >
              <Typography variant="body1">
                Welcome to the Molarity Calculator.
                This application provides the tools to quickly calculate
                reactive proportions based on a specific Molarity. It also provides quick access to reactive proportions
                for commonly used reactives in the biochemistry lab.
                You can read more about Molarity in the link below.
              </Typography>
            </Paper>
            <MicrolinkCard
              url="https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces/mixtures-and-solutions/a/molarity"
              target="_blank"
              style={{ margin: '2vh' }}
            />
            <Paper
              style={{ padding: '1vw' }}
            >
              <Typography variant="body1">
                The following picture shows the structure of the equation as a quick reminder.
              </Typography>
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <img
              className="formulaImage"
              src={require('../../static/images/molarity.png')}
              alt="Formula for henderson-hasselbalch equation"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              spacing={0}
            >
              <Grid item xs={12}>
                <Paper>
                  <Typography
                    variant="h5"
                    style={{ padding: '1vw' }}
                  >
                    M Calculator
                  </Typography>
                  <Paper>
                    <Grid
                      container
                      spacing={0}
                      direction="row"
                    >
                      <Grid item xs={1} />
                      <Grid item xs={2}>
                        <Paper
                          elevation={0}
                          style={{ marginTop: '4vh' }}
                        >
                          <TextField
                            id="outlined-active"
                            label="M"
                            value={this.state.molarity}
                            margin="normal"
                            variant="outlined"
                            min="0"
                            max="14"
                            onChange={this.handleChange('molarity')}
                          />
                        </Paper>
                      </Grid>
                      <Grid item xs={1}>
                        <Paper elevation={0}>
                          <Typography><div className="eqnText">=</div></Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={8}>
                        <Grid
                          container
                          spacing={0}
                          direction="column"
                        > 
                          <Grid item xs={12}>
                            <Grid
                              container
                              spacing={0}
                              direction="row"
                            > 
                              <Grid item xs={4}>
                                <Paper elevation={0}>
                                  <TextField
                                    id="outlined-active"
                                    label="Solute"
                                    value={this.state.solute}
                                    margin="normal"
                                    variant="outlined"
                                    min="0"
                                    InputProps={{
                                      endAdornment: <InputAdornment position="end">g</InputAdornment>,
                                    }}
                                    onChange={this.handleChange('solute')}
                                  />
                                </Paper>
                              </Grid>
                              <Grid item xs={4}>
                                <Paper elevation={0}>
                                  <TextField
                                    id="outlined-active"
                                    label="Molar mass"
                                    value={this.state.mass}
                                    margin="normal"
                                    variant="outlined"
                                    min="0"
                                    InputProps={{
                                      endAdornment: <InputAdornment position="end">g</InputAdornment>,
                                    }}
                                    onChange={this.handleChange('mass')}
                                  />
                                </Paper>
                              </Grid>
                              <Grid item xs={4}>
                                <TextField
                                  select
                                  label="Reactives"
                                  value={this.state.reactive}
                                  onChange={this.handleChange('reactive')}
                                  margin="normal"
                                  variant="outlined"
                                  style={{minWidth: '10em'}}
                                >
                                  {reactives.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                      {option.label}
                                    </MenuItem>
                                  ))}
                                </TextField>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Divider />
                          </Grid>
                          <Grid item xs={12}>
                            <Grid
                              container
                              spacing={0}
                              direction="row"
                            > 
                              <Grid item xs={3} />
                              <Grid item xs={6}>
                                <Paper elevation={0}>
                                  <TextField
                                    id="outlined-active"
                                    label="Solution"
                                    value={this.state.solution}
                                    margin="normal"
                                    variant="outlined"
                                    min="0"
                                    InputProps={{
                                      endAdornment: <InputAdornment position="end">L</InputAdornment>,
                                    }}
                                    onChange={this.handleChange('solution')}
                                  />
                                </Paper>
                              </Grid>
                              <Grid item xs={3} />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                  <Paper>
                    <Grid
                      container
                      spacing={0}
                      direction="row"
                      style={{ padding: '0.5vh' }}
                    >
                      <Grid item xs={12}>
                        <Paper elevation={0}>
                          <Typography
                            variant="overline"
                            align="center"
                          >
                            {this.state.message}
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={3} />
                      <Grid item xs={2}>
                        <Button variant="contained" color="primary" fullWidth>
                          Submit
                        </Button>
                      </Grid>
                      <Grid item xs={2} />
                      <Grid item xs={2}>
                        <Button variant="contained" color="secondary" fullWidth>
                          Reset
                        </Button>
                      </Grid>
                    </Grid>
                  </Paper>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Mcalc
