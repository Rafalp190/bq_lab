import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import MicrolinkCard from '@microlink/react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// You can pass extra props

const Phcalc = () => (
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
          <Grid item xs={8}>
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
                      style={{ marginTop: '4vh' }}
                    >
                      <TextField
                        id="outlined-active"
                        label="pH"
                        value={7.01}
                        margin="normal"
                        variant="outlined"
                        min="0"
                        max="14"
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
                        value={0.002}
                        margin="normal"
                        variant="outlined"
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
                            value={7.01}
                            margin="normal"
                            variant="outlined"
                            min="0"
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
                            value={1000}
                            margin="normal"
                            variant="outlined"
                            min="0"
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
                      pH: 7.01
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={3} />
                  <Grid item xs={2}>
                    <Button variant="contained" color="primary" fullWidth={true}>
                      Submit
                    </Button>
                  </Grid>
                  <Grid item xs={2} />
                  <Grid item xs={2}>
                    <Button variant="contained" color="secondary" fullWidth={true}>
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

export default Phcalc
