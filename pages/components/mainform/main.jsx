
import classes from "./main.module.css";

import { Button, styled } from '@mui/material';
import { Launch, SportsEsports } from '@mui/icons-material';

const StyledButtonPrimary = styled(Button)({
  background: 'linear-gradient(45deg, #ffab2b 30%, #ffc86f 90%)',
  fontWeight: 'bold',
  padding: '1rem',
  fontSize: '2rem',
  minHeight: '6rem',
  boxShadow: '0 3px 5px 2px rgba(255, 169, 41, .3)',
  transition: "all .1s ease",
  position: "relative",
  borderRadius: '1rem',
  color: "white",
  width: '100%',
  margin: '1rem 0rem 3rem 0rem',
  ":hover": {
    // rotate background gradient
    backgroundPosition: 'left',
    transition: "all .2s ease",
    boxShadow: '0 4px 8px 1px rgba(255, 169, 41, .8)',
    fontSize: '0rem',
    "& .MuiButton-endIcon": {
      transition: "all .2s ease",
      marginLeft: '0rem',
      opacity: "1",
      width: "4rem",
    },
    "& .MuiSvgIcon-root": {
      width: "4rem",
      height: "4rem",
    }
  },
  "& .MuiButton-endIcon": {
    transition: "all .2s ease",
    marginLeft: '0rem',
    opacity: "0",
    margin: "0rem 0rem 0rem 0rem",
    width: "0rem",
  },
  "& .MuiSvgIcon-root": {
    transition: "all .2s ease",
    width: ".5rem",
    height: ".5rem",
  }
});

const StyledButtonSecondary = styled(Button)({
  fontWeight: 'bold',
  padding: '.6rem 2rem',
  fontSize: '1.2rem',
  minHeight: '2rem',
});

function MainForm() {
  const handleJoinGame = (event) => {
    event.preventDefault();
    setTimeout(() => {

    }, 300);
  }

  return (
    <div className={`
      ${classes.form}
      ${classes.animate}
    `}>
      <h1>Welcome 👋</h1>
      <div className={classes.button}>
        <StyledButtonPrimary variant="contained" endIcon={<SportsEsports />} onMouseDown={handleJoinGame}>Play</StyledButtonPrimary>
        <StyledButtonSecondary variant="outlined" color="secondary" endIcon={<Launch />}>Account</StyledButtonSecondary>
      </div>
    </div>
  )
}

export default MainForm;