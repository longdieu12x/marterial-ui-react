import React from 'react';
import {
  Typography,
  AppBar, 
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  CssBaseline,
  Grid,
  Toolbar,
  Container
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
function App() {
  return (
    <React.Fragment className="App">
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera/>
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className="">
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, perferendis consequuntur iure aliquid voluptate nesciunt eveniet eaque exercitationem neque soluta
            </Typography>

          </Container>
        </div>
      </main>

    </React.Fragment>
  );
}

export default App;
