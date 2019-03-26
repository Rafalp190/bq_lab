import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import MicrolinkCard from '@microlink/react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

// You can pass extra props

class Phcalc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ph: '',
      pka: '',
      a: '',
      ha: '',
      message: 'hello',
    }
  }

  handleChange = name => event => {
    console.log(event.target.value)
    if (name === 'ph') {
      console.log('shouldbe here right?')
      if (parseFloat(event.target.value) > 14) {
      console.log("Now im adding a big number")
      this.setState({
        ph: '14',
      });
      } else if (parseFloat(event.target.value) < 0)
      this.setState({
        [name]: '0',
      });
      else {
        this.setState({
          [name]: event.target.value,
        });
      }
    } else {
    this.setState({
      [name]: event.target.value,
    });
    }
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
            <Typography variant="h4">Henderson-Hasselbalch pH Calculator</Typography>
            <Paper
              style={{ padding: '1vh' }}
            >
              <Typography variant="body1">
                Welcome to the Henderson-Hasselbalch ph Calculator.
                This application provides the tools to quickly calculate
                reactive proportions and pH utilizing the Henderson-Hasselbalch equation.
                You can read more about it in the link below.
              </Typography>
            </Paper>
            <MicrolinkCard
              url="https://en.wikipedia.org/wiki/Henderson%E2%80%93Hasselbalch_equation"
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
              src={require('../../static/images/henderson-hasselbalch.png')}
              alt="Formula for henderson-hasselbalch equation"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              spacing={0}
            >
              <Grid item xs={10}>
                <Paper>
                  <Typography
                    variant="h5"
                    style={{ padding: '1vw' }}
                  >
                    pH Calculator
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
                          style={{ marginTop: '4vh', minWidth: '6em' }}
                        >
                          <TextField
                            id="outlined-active"
                            label="pH"
                            value={this.state.ph}
                            margin="normal"
                            variant="outlined"
                            InputProps={{ inputProps: { type: "number", min: 0, max: 14 } }}
                            onChange={this.handleChange('ph')}
                          />
                        </Paper>
                      </Grid>
                      <Grid item xs={1}>
                        <Paper elevation={0}>
                          <Typography><div className="eqnText">=</div></Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={2}>
                        <Paper
                          elevation={0}
                          style={{ marginTop: '4vh' }}
                        >
                          <TextField
                            id="outlined-active"
                            label="pKa"
                            value={this.state.pka}
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange('pka')}
                          />
                        </Paper>
                      </Grid>
                      <Grid item xs={2}>
                        <Paper elevation={0}>
                          <Typography><div className="eqnText">+ log10</div></Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={1}>
                        <Paper elevation={0}>
                          <Typography><div className="eqnText leftParen">(</div></Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={2}>
                        <Grid
                          container
                          spacing={0}
                          direction="column"
                        >
                          <Grid item xs={12}>
                            <Paper elevation={0}>
                              <TextField
                                id="outlined-active"
                                label="[A-]"
                                value={this.state.a}
                                margin="normal"
                                variant="outlined"
                                min="0"
                                onChange={this.handleChange('a')}
                              />
                            </Paper>
                          </Grid>
                          <Grid item xs={12}>
                            <Divider />
                          </Grid>
                          <Grid item xs={12}>
                            <Paper elevation={0}>
                              <TextField
                                id="outlined-active"
                                label="[HA]"
                                value={this.state.ha}
                                margin="normal"
                                variant="outlined"
                                min="0"
                                onChange={this.handleChange('ha')}
                              />
                            </Paper>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={1}>
                        <Paper elevation={0}>
                          <Typography><div className="eqnText rightParen">)</div></Typography>
                        </Paper>
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

export default Phcalc
