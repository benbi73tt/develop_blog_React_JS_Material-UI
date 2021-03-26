import React, { Component } from 'react';
import { AppBar, Button, Container, IconButton, Toolbar, Typography, Box, Paper, Grid, 
  CardMedia, CardContent, Card, CardActions, BottomNavigation, BottomNavigationAction,
   DialogTitle, DialogContent, TextField, DialogActions, Dialog, DialogContentText } 
from '@material-ui/core';

import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


import MenuIcon from '@material-ui/icons/Menu';
import PlayCirlceFilledIcon from '@material-ui/icons/PlayCircleFilled';
import LayerIcon from '@material-ui/icons/Layers';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({ //предоставление дефолтных стилей проекту
  root:{
    flexGrow:1
  },
  menuButton:{
    marginRight: theme.spacing(1) //1=8px
  },
  title:{
    flexGrow:1 //коэф увеличения ширины flex по отношению к другим элементам 
  },
  mainFeaturesPost:{
    position:'relative',
    color:theme.palette.common.white,
    marginBottom:theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition:'center'
  },
  overlay:{
    position:'absolute',
    top:0,
    bottom:0,
    right:0,
    left:0,
    backgroundOverlay:"rgba(0,0,0,.3)"
  },
  mainFeaturesPostContent:{
    position:"relative",
    padding:theme.spacing(6),
    marginTop:theme.spacing(8)
  },
  CardMedia:{
    paddingTop:'56.25%',
  },
  CardContent:{
    flexGrow:1
  },
  cardGrid:{
    marginTop: theme.spacing(4)
  }
}))

const cards=[1,2,3,4,5,6,7,8,9];


function App(){
  
  const classes=useStyles();
  const [value, setValue]=React.useState('recents')

  const handleChange=(event, newValue)=>{
    setValue(newValue);
  };

  const [open, setOpen]=React.useState(false);

  const handleClickOpen=()=>{
    setOpen(true);
  }
  const handleClose=()=>{
    setOpen(false);
  }
    return (
      <>
      <AppBar position="fixed"> 
      {/* Панель навигации, испоьзуется для лого, как контекстное меню */}
        <Container fixed>
          <Toolbar>
            <IconButton edge='start' 
            color="inherit" aria-label="menu" className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6"className={classes.title}>Web Develop Blog</Typography>{/*Компонент в котором записываем текст  */}
            <Box mr={3}>
              <Button color="inherit" variant="outlined" onClick={handleClickOpen}>Log in</Button>
              <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Log in</DialogTitle>
                <DialogContent>
                  <DialogContentText>Log in to see </DialogContentText>
                  <TextField
                    autoFocus
                    margin='dense'
                    id='name'
                    label='Email Adress'
                    type='email'
                    fullWidth

                  />
                  <TextField
                    margin='dense'
                    id='pass'
                    label='Password'
                    type='password'
                    fullWidth

                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color='primary'>Cancel</Button>
                  <Button onClick={handleClose} color='primary'>Log in</Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Button color="secondary" variant="contained">Sign up</Button>
          </Toolbar>
        </Container>
      </AppBar>
      
      <main>
        <Paper className={classes.mainFeaturesPost}
        style={{backgroundImage:'url(https://source.unsplash.com/random)'}}>
            <Container fixed>
              <div className={classes.overlay}/>
              <Grid container>
                <Grid item md={6}>
                  <div className={classes.mainFeaturesPostContent}>
                    <Typography
                      component='h1'
                      variant='h3'
                      color='inherit'
                      gutterBottom
                    >
                      Web develop Blog
                    </Typography>
                    <Typography
                      variant='h5'
                      color='inherit'
                      paragraph
                    >
                      Есть люди, которые из года в год приезжают в наш санаторий ♥

                    После прочтения тёплых и искренних мыслей Дмитрия Ратникова о Вите, у вас не останется сомнений, чтобы приехать к нам уже этим летом:
Показать полностью...
                    </Typography>
                    <Button variant='contained' color='secondary'>Learn More</Button>
                  </div>
                </Grid>
              </Grid>
            </Container>
        </Paper>

      <div className={classes.mainContent}>
        <Container maxWidth='md'>
          <Typography variant='h2' align='center' color='textPrimary' gutterBottom>Web developer blog</Typography>
          <Typography variant='h5' align='center' color='textSecondary' paragraph>Ольга Бузова похвасталась своей аудитории тем, что беременна, 
          опубликовав фото вместе со снимками☺Певица накануне рассталась со</Typography>
        </Container>
        <div className={classes.mainBottom}>
          <Grid container spacing={2} justify='center'>
            <Grid item>
              <Button variant='contained' color="primary">Start Now</Button>
            </Grid>
            <Grid item>
              <Button variant='outlined' color="primary">Learn more</Button>
            </Grid>
          </Grid>
        </div>
      </div>

      <Container className={classes.cardGrid} maxWidth='md'>
        <Grid container spaicing={4}>
          {cards.map((card)=>(
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia className={classes.CardMedia}
                image='https://source.unsplash.com/random'
                title='Image title'/>
                <CardContent>
                  <Typography variant='h5' gutterBottom>
                    Blog Post
                  </Typography>
                  <Typography >
                  Лучших представителей отрасли наградили в рамках Дня работника культуры!

Почётной грамотой Губернатора Ульяновской области награждена:

🖼 Маргарита Константиновна Смирнова – заведующая филиалом Музей народного творчества
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' color='primary'>
                    View
                  </Button>
                  <Button size='small' color='primary'>
                    Edit
                  </Button>
                  <LayerIcon/>
                  <PlayCirlceFilledIcon/>
                </CardActions>
              </Card>

            </Grid>
          ))}

        </Grid>

      </Container>
      </main>

      <footer>
        <Typography variant='h6' align='center' gutterBottom>Footer</Typography>
        <BottomNavigation value={value}
        onChange={handleChange}
        className={classes.root}>
          <BottomNavigationAction
            label='Recents'
            value='recents'
            icon={<RestoreIcon/>}
          />
                <BottomNavigationAction
            label='Favorites'
            value='favorites'
            icon={<FavoriteIcon/>}
          />
                <BottomNavigationAction
            label='Nearby'
            value='nearby'
            icon={<LocationOnIcon/>}
          />
                <BottomNavigationAction
            label='Folder'
            value='folder'
            icon={<FolderIcon/>}
          />
          </BottomNavigation>    
          <Typography align='center' color='textSecondary' component='p' variant='subtitle1'>
            Web Developer Blog React js Material UI site
          </Typography>
      </footer>


      </>
    );
}

export default App;
