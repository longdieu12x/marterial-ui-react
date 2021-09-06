import React from 'react';
import {
  Typography,
  AppBar, 
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  CssBaseline,
  Button,
  Grid,
  Toolbar,
  Container
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon}/>
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm" styled={{ marginTop: '100px' }}>
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, perferendis consequuntur iure aliquid voluptate nesciunt eveniet eaque exercitationem neque soluta
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary"> See my photos</Button>
                  <Button variant="outlined" color="primary"> Secondary Actions</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            { [1,2,3,4,5,6].map((item) => (
                <Grid item xs={12} sm={6} lg={4} key={item}>
                  <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="Image title" />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5">
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card you can use this section to discribe content
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">View</Button>
                      <Button size="small" color="primary">Edit</Button>
                    </CardActions>
                  </Card>
                </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>

      </footer>          
    </React.Fragment>
  );
}

export default App;
