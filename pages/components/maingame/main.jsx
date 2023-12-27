import classes from "./main.module.css";

import { useEffect, useState } from "react";

import LobbyGame from "./lobbygame/main.jsx";
import JoinGame from "./joingame/main.jsx";
import Header from "../maingameheader/main.jsx";
import PrelobbyGame from "./prelobbygame/main.jsx";

import { motion } from 'framer-motion';

function MainGame() {
  const [status, setStatus] = useState("list"); // prelobby, game, create, list

  return (
    <motion.div
      className={classes.main}
      initial={{ x: -3000, opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -3000, opacity: 1 }}
    >
      <Header
        status={status}
      />
      { status === "game" ? <LobbyGame started={status} id={location.state.id} /> : null }
      { status === "list" ? <JoinGame started={status} /> : null }
      { status === "prelobby" ? <PrelobbyGame started={status} id={location.state.id} /> : null }
    </motion.div>
  )
}

export default MainGame;