import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Collapse } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';





const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    background: 'rgba(0,0,0,0.3)',
    margin: '10px',
    color: '#fff',
    // display: 'flexbox',
    // alignItems: 'flext-start',
    // flexGrow: '1',
  },
  cardpos: {
    display: 'flex',
  },
  media: {
    backgroundImage: '',
  },

  content: {
    color: '#fff',
    fontSize: '10px',
    height: '150px',
  },
  btnfoot: {
    fontColor: '#ffeb3b',
    }, 
  

});

export default function ImageCard({ title, checked }) {
  const classes = useStyles();

  return (






    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <h1 style={{ color: 'limegreen', display: 'flex', justifyContent: 'center', textShadow: '-1px 1px #000' }}>Portfolio</h1>
      <div className={classes.cardpos}>
        
        <Card className={classes.root}>
          <CardActionArea>

            <CardMedia className={classes.media}
              component="img"
              alt="Dahlia Pink"
              height="140"
              image={process.env.PUBLIC_URL + '/assets/dahlia1.jpg'}
              title="Project One"
            />
            <CardContent className={classes.content}>
              <Typography gutterBottom variant="h5" component="h2">
                C-19 Tracker
          </Typography>
              <Typography className={classes.content} variant="body2" color="textSecondary" component="p">
                Using React and MongoDB, the user can check on Covid-19 Status and protocols to the state he/she is traveling to.
          </Typography>
            </CardContent>
          </CardActionArea>
          <div className={classes.btnfoot}>
          <CardActions className={classes.btnfoot}>
            <Button size="small" color="primary" href="https://slsmi285.github.io/c19-tracker/">
              Demo
        </Button>
            <Button size="small" color="primary" href="https://github.com/slsmi285/c19-tracker/">
              Code
        </Button>
          </CardActions>
          </div>
        </Card>



        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media}
              component="img"
              alt="Dahlia Pink"
              height="140"
              image={process.env.PUBLIC_URL + '/assets/dahlia2.jpg'}
              title="Project One"
            />
            <CardContent className={classes.content}>
              <Typography gutterBottom variant="h5" component="h2">
                Cosmic Cocktails
          </Typography>
              <Typography className={classes.content} variant="body2" color="textSecondary" component="p">
                With MongoDB, Passport and NodeJs, this app will be sure to get your interest in a cocktail recipe!
                Users can search for recipes by the cocktail name or by a letter.
          </Typography>
            </CardContent>
          </CardActionArea>
          <div className={classes.btnfoot}>
          <CardActions>
            <Button size="small" color="primary" href="https://slsmi285.github.io/Project2_CosmicCocktails/">
              Demo
        </Button>
            <Button size="small" color="primary" href="https://github.com/slsmi285/Project2_CosmicCocktails">
              Code
        </Button>
          </CardActions>
          </div>
        </Card>
      </div>


    </Collapse>

  )
}