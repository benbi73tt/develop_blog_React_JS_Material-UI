import React, { Component } from 'react';
import { AppBar, Button, Container, IconButton, Toolbar, Typography, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
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
}))
function App(){
  const classes=useStyles();
    return (
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
              <Button color="inherit" variant="outlined">Log in</Button>
            </Box>
            <Button color="secondary" variant="contained">Sign up</Button>
          </Toolbar>
        </Container>
      </AppBar>
    );
}

export default App;
