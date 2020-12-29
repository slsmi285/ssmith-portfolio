import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
// import Modal from './components/Modal';
// import styled from 'styled-components';
// import GlobalStyle from './components/globalStyle';
import PlaceToVisit from './components/PlaceToVisit';

// const Container = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
   
// `;
// const Button = styled.button`
//     min-width: 100px;
//     padding: 16px;
//     border-radius: 4px;
//     border: none;
//     background: #141414;
//     color: #fff;
//     font-size: 24px;
//     cursor: pointer;
// `;

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/dahlia3.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  
}));
 function App() {
  const classes = useStyles();
  // const [showModal, setShowModal] = useState(false)
  // const openModal = () => {
  //   setShowModal(prev => !prev);
  // };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      {/* <Container>
      <Button onClick={openModal}>Modal Button</Button> */}
      {/* <Modal showModal={showModal} setShowModal={setShowModal} />
      <GlobalStyle /> */}
      {/* </Container> */}
      <PlaceToVisit />

    </div>
  );

}
export default App;