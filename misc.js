<Box component="div" elevation={8} square style={{ background: "#9c27b0", height: '65vh', width: '800px', border: "1px solid limegreen", padding: "50px", width: '100%' }}>
<div className={classes.modalfoot}>
<a className={classes.closefoot} onClick={close} >
        &times; 
    Close</a> 
    </div>
<Grid  style={{ marginTop: '30px', marginLeft: '25px' }} container>
<Box component="form" className={classes.form}>
<div>
          {/* <img style={{ height: '40vh', float: 'left', marginRight: '20px', border: '4px double limegreen', hover: 'blue' }} src={profile2} alt="profile image" /> */}
         
        
<Paper elevation={8} square style={{ minHeight: '40vh', width: '300px', backgroundColor: '#cccccc', float: 'right', border: '4px double limegreen' }}>
<div>
  <Card>
  
    <Typography variant="h5" style={{color: "limegreen", textAlign: "center", textTransform: "upperCase", backgroundColor: "#cccccc" }}>Contact Me</Typography>
    <InputField fullWidth={true} label="Name" variant="outlined" inputProps={{ style: { color: "#cccccc" } }} margin="dense" size="large" />
    <br /><br />
    <InputField fullWidth={true} label="Email" variant="outlined" inputProps={{ style: { color: "#cccccc" } }} margin="dense" size="large" />
    <br /><br />
    <InputField fullWidth={true} label="Company" variant="outlined"inputProps={{ style: { color: "#cccccc" } }} margin="dense" size="large" />
    <br /><br />
    
     <Button className={classes.btnSend} variant="outlined" fullWidth={true} endIcon={<SendIcon/>}>
       contact me
     </Button>

</Card>
</div>
</Paper>
    </div>
    
    
    </Box>
    </Grid>
    </Box>
  );
};