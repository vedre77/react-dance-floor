import React, { useEffect, useState } from 'react';
import Cell from "../Cell/Cell.js";
import './grid.css';

export default function Grid() {
  
  const [colors, setColors] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [current, setCurrent] = useState('');

  function createCells() {
    let colorArray = [];
    for (let i = 0; i < 25; i++) {
        colorArray.push(`(${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.random().toFixed(1)})`);
    }
    setColors(colorArray);
  }

 useEffect(() => {
  setInterval(() => {
    createCells()
  }, 200);
 }, [])

 useEffect(() => {
  if (clicked) return;
  const clickCellHandler = event => {
    event.target.className = 'active'; 
    setClicked(true);
    setCurrent(`${event.target.id}`);
    
  }
  const grid = document.getElementById('floor');
  grid.addEventListener('click', clickCellHandler);
  return () => grid.removeEventListener('click', clickCellHandler);
 }, [clicked]);

 // implement keyboard activity function passed to Cell as prop:
  const moveCell = event => {
    if (event.key === 'ArrowDown' && current) {
      let currentDancing = document.getElementById(current);
      currentDancing.className = 'cell';
      if (['20', '21', '22', '23', '24' ].includes(current)) {
        let next = document.getElementById(Number(current) - 20);
        next.className = 'active';
        setCurrent(`${next.id}`);  
      } else {
        let next = document.getElementById(Number(current) + 5);
        next.className = 'active';
        setCurrent(`${next.id}`);
      }      
    }
    if (event.key === 'ArrowRight' && current) {
      let currentDancing = document.getElementById(current);
      currentDancing.className = 'cell';
      if (['4', '9', '14', '19', '24' ].includes(current)) {
        let next = document.getElementById(Number(current) - 4);
        next.className = 'active';
        setCurrent(`${next.id}`);  
      } else {
        let next = document.getElementById(Number(current) + 1);
        next.className = 'active';
        setCurrent(`${next.id}`);
      }
    }
    if (event.key === 'ArrowLeft' && current) {
      let currentDancing = document.getElementById(current);
      currentDancing.className = 'cell';
      if (['0', '5', '10', '15', '20' ].includes(current)) {
        let next = document.getElementById(Number(current) + 4);
        next.className = 'active';
        setCurrent(`${next.id}`);  
      } else {
        let next = document.getElementById(Number(current) - 1);
        next.className = 'active';
        setCurrent(`${next.id}`);
      }
    }
    if (event.key === 'ArrowUp' && current) {
      let currentDancing = document.getElementById(current);
      currentDancing.className = 'cell';
      if (['0', '1', '2', '3', '4' ].includes(current)) {
        let next = document.getElementById(Number(current) + 20);
        next.className = 'active';
        setCurrent(`${next.id}`);  
      } else {
        let next = document.getElementById(Number(current) - 5);
        next.className = 'active';
        setCurrent(`${next.id}`);
      }
    }
  }

 const displayCells = colors.map((elem, index) => <Cell colors={elem}
                                                        key={index} 
                                                        id={index}
                                                        moveCell={moveCell}/>
 );

  return (
    <div className="grid" id="floor">
      {displayCells}
    </div>
    );
  }
