import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
// import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';
import './style.css';





const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        flexGrow: 1,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        // alignItems: 'center',
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column',
    },

   
}

}));
export default function PlaceToVisit() {
    const classes = useStyles();
    const checked = useWindowPosition('header');
   

    return (

        <div id="place-to-visit">
         
            <div className={classes.root}>
              
                        <ImageCard title={[]} checked={checked} />
               
            </div>




        </div>

    );
}