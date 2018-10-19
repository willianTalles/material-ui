import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import CreateDialog from '../Exercises/Dialogs/Create'

export default prosp =>
    <AppBar position="static">
        <Toolbar>
          <Typography component="h2" variant="headline" color="inherit" style={{ flex: 1 }}>
            Exercise Database
          </Typography>
          <CreateDialog/>
        </Toolbar>
      </AppBar>