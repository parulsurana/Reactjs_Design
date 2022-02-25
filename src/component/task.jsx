import React, { useState } from 'react'
import {Box, Button, Card, CardContent, makeStyles, TextareaAutosize, TextField, Typography} from "@material-ui/core";
import DateMomentUtils from '@date-io/moment'; // choose your lib
import {
  DatePicker,
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

const usestyles = makeStyles((theme) => ({
    box:{
      background: "#E8F3FE",
      display:"flex",
     flexDirection: "column",
      justifyContent: "center",
     alignItems: "center",
      paddingTop: "50px",
     margin: "100px 50px 20px 500px",
     width: "50%",
     borderRadius : "20px",
     boxShadow : "2px 1px 1px rgba(0,0,0,0.2)",
     [theme.breakpoints.down("md")]: {
			margin: "100px 50px 20px 300px",
      padding : "20px 10px 20px 10px"
		},
    [theme.breakpoints.down("sm")]: {
			margin: "100px 50px 20px 50px",
		},
       
    },
    box2:{
      background: "#ffff",
      borderRadius : "10px",
      boxShadow : "2px 1px 1px rgba(0,0,0,0.2)",
     
    },
    ibox:{
      display:"flex",
      flexDirection: "column",
    },
    child1:{
      color: "#003979",
      marginTop:"10px",
      marginBottom: "10px",
      fontWeight : "bold",
      fontSize: "30px"
    },
    child2:{
      marginTop:"10px",
      marginBottom: "10px",
    },
    child3:{
      marginTop:"10px"
    },
    child4:{
      color: "#003979",
      marginTop:"10px",
      marginBottom: "10px",
      fontWeight : "bold",
      fontSize: "30px"
    },
    tasks:{
          background: "#ffff",
          display:"flex",
          // flexDirection: "flex-end",
        //  justifyContent: "center",
        //  alignItems: "center",
         marginTop:"20px",
         marginBottom: "20px",
         color: "#003979",
         padding: "20px 10px 20px 20px",
         [theme.breakpoints.down("sm")]: {
          display:"flex",
          flexDirection: "column",
          margin: "10px 0 10px 0",
          

        },
        [theme.breakpoints.down("md")]: {
          display:"flex",
          flexDirection: "column",
          margin: "10px 0 10px 0"
        },
    },
      yourtask:{
      marginTop: "50px",
      },
      task1:{
      marginRight : "50px"
      },
    
    btn1:{
      background:"#003979",
      color: "#ffff",
      [theme.breakpoints.down("md")]: {
        display:"flex",
       alignItems: "center",
        margin: "10px 0 10px 0"
      },  
      [theme.breakpoints.down("sm")]: {
        display:"flex",
       alignItems: "center",
        margin: "10px 0 10px 0"
      }, 
    },
    btn2:{
      background:"#D60707",
      color: "#ffff",
      marginLeft:"20px"
    
    }

}));

export default function Task() {
const classes = usestyles();
const [value, setValue] = useState(new Date());

const handleChange = (newValue) => {
  setValue(newValue);
};

  return (
   <Card className={classes.box}>
   <CardContent>
     <Box  >
        <Card className={classes.box2}>
          <CardContent className={classes.ibox}>
          <Typography className={classes.child1}>Task Manager</Typography>
          <TextField 
              className={classes.child2}
              id="outlined-basic"  
              label="Task-Title"
                variant="outlined" 
                required  />
              <TextField
                id="outlined-basic"  
                variant="outlined"
                label="Task-Description"  
                placeholder='Task-Description'
                className={classes.child2}    
                 multiline
                rows={5}
                required
              />
          <MuiPickersUtilsProvider utils={DateMomentUtils}>
              <KeyboardDatePicker
                 className={classes.child3}   
                variant="inline"
                inputVariant="outlined"
                label="Date"
                placeholder="Date"
                format="MM/dd/yyyy"
                value={value}
               
                InputAdornmentProps={{ position: "end" }}
                onChange={handleChange}
               />  
             </MuiPickersUtilsProvider>
          </CardContent>
        </Card>
     </Box>

        <Box className={classes.yourtask}>
          <Typography className={classes.child4}>Your Tasks</Typography>
          <Box className={classes.tasks}>
            <Typography className={classes.task1}>1. Completing Assignment on time...</Typography>
            <Button variant='contained' className={classes.btn1}>Completed</Button>
            <Button variant='contained' className={classes.btn2}>Delete</Button>
          </Box>

          <Box  className={classes.tasks}>
            <Typography className={classes.task1}>2. Submitting Assignment to sir...........</Typography>
            <Button variant='contained'className={classes.btn1}>Completed</Button>
            <Button variant='contained' className={classes.btn2}> Delete</Button>
          </Box>
        </Box>


        </CardContent>
   </Card>
  )
}
