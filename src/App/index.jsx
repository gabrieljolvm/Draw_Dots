import { useEffect, useRef, useState } from 'react'
import './style.css'

function App() {
  const [dot, setDot] = useState([])
  const [edittedDots, setEdittedDots] = useState([]);

  const createPoint = (e) => {
    setDot([...dot, {
      id: dot.length,
      X: e.clientX,
      Y: e.clientY
    }])
  }

  const undoPoint = (e) => {
    e.stopPropagation();
    if (dot.length !== 0) setEdittedDots([...edittedDots, dot.at(-1)]);
    setDot(dot.filter((dots)=> dots !== dot.at(-1)));
  }

  const redoPoint = (e) => {
    e.stopPropagation();
    if(edittedDots.length !== 0) setDot([...dot, edittedDots.at(-1)])
    setEdittedDots(edittedDots.filter((dots)=> dots !== edittedDots.at(-1)));
    
  }


  return (
    <div id="window" onClick={createPoint}>
      <button className='undo' onClick={undoPoint}>Desfazer</button>
      <button className='redo' onClick={redoPoint}>Refazer</button>
      {dot.map((infos) => {

        return (
          <div className="dots" key={infos.id}
            style={{
              left: infos.X,
              top: infos.Y
            }}></div>
        )
      })}
    </div>
  );
};

export default App
