import React from 'react'
import {Box, Button, Card, CardContent, makeStyles, TextField, Typography} from "@material-ui/core";

const usestyles = makeStyles({
    box:{
      background: "#E8F3FE",
      display:"flex",
     flexDirection: "column",
     justifyContent: "center",
     alignItems: "center",
     paddingTop: "50px",
     margin: "20px 50px 20px 50px"
       
    },
    box2:{
      background: "#ffff",
    },
    child1:{
      color: "#003979",
      marginTop:"10px",
      marginBottom: "10px"
    },
    child2:{
      marginTop:"10px",
      marginBottom: "10px"
    },
    tasks:{
          background: "#ffff",
          display:"flex",
         flexDirection: "row",
         justifyContent: "center",
         alignItems: "center",
         marginTop:"20px",
         marginBottom: "20px",
         color: "#003979",
         padding: "20px 20px 20px 20px"
    },
    yourtask:{
    marginTop: "50px",
    },

    
    btn1:{
      background:"#003979",
      color: "#ffff",  
    },
    btn2:{
      background:"#D60707",
      color: "#ffff",
      marginLeft:"20px"
    
    }
});

export default function task() {
const classes = usestyles();

  return (
   <Card className={classes.box}>
   <CardContent>
        <Card className={classes.box2}>
          <CardContent>
          <Typography className={classes.child1}>Task Manager</Typography>
          <TextField className={classes.child2} id="outlined-basic" label="Task-Title" variant="outlined" required fullWidth />
          <TextField className={classes.child2} id="outlined-basic" label="Task-Description" variant="outlined" required fullWidth />
          </CardContent>
        </Card>

        <Box className={classes.yourtask}>
          <Typography className={classes.child1}>Your Tasks</Typography>
          <Box className={classes.tasks}>
            <Typography className={classes.task1}>1. Completing Assignment on time...</Typography>
            <Button variant='contained' className={classes.btn1}>Completed</Button>
            <Button variant='contained' className={classes.btn2}>Delete</Button>
          </Box>

          <Box  className={classes.tasks}>
            <Typography className={classes.task1}>2. Submitting Assignment to sir...</Typography>
            <Button variant='contained'className={classes.btn1}>Completed</Button>
            <Button variant='contained' className={classes.btn2}> Delete</Button>
          </Box>
        </Box>
        </CardContent>
   </Card>
  )
}
