import React from "react";
import firebase from "firebase";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GoogleLogin from "react-google-login";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from '@material-ui/core/styles';
const client="582911347742-7b7mjvdbj36s98vmv8puq3m7uqp5jvt9.apps.googleusercontent.com";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    backgroundColor:"black"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))
const responseGoogle = (response) => {
    console.log(response);
  }
export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <AppBar position="static" style={{backgroundColor:"#ffb300",
    color:"black",
    
    }}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>ToDoList</Typography>
        
          <GoogleLogin
            clientId={client}
            render={(renderProps) => (
                <Button color="inherit"  
                onClick={renderProps.onClick}
                disabled={renderProps.disabled  }
                
              >
                Login
                
              </Button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={""}
          />
          
        
      </Toolbar>
    </AppBar>
    </div>
  );
}
