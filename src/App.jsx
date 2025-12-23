
import './App.css'
import {useScroll,motion} from "motion/react"
import Main from './component/Main';

function App() {
  
    const { scrollYProgress } = useScroll()

  return (
    <>
     <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#ff0088",
                }}
            />

    <Main/>
  </>);
}

export default App
