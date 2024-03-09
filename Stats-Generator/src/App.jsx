import { useState } from 'react'
import './App.css'
import './Stats.jsx'
import Stats from './Stats.jsx'

function App() {
  const [races, setRace] = useState("aarakocra")
  const [classes, setClass] = useState("artificer");
  const [levels, setLevel] = useState("1");

  return (
    <>
      <div>
      <h1>Table Top RPG Stats Generator</h1>
      <label htmlFor="race">Select a Race:</label>
      <select name="race" id="race" value={races} onChange={(e) => setRace(e.target.value)}>
        <option value="aarakocra">Aarakocra</option>
        <option value="aasimar">Aasimar</option>
        <option value="bugbear">Bugbear</option>
        <option value="changeling">Changeling</option>
        <option value="dragonborn">Dragonborn</option>
        <option value="dwarf">Dwarf</option>
        <option value="elfdrow">Elf (Drow)</option>
        <option value="elfhigh">Elf (High)</option>
        <option value="elfwood">Elf (Wood)</option>
        <option value="genasiair">Genasi (Air)</option>
        <option value="genasiearth">Genasi (Earth)</option>
        <option value="genasifire">Genasi (Fire)</option>
        <option value="genasiwater">Genasi (Water)</option>
        <option value="gnomedeep">Gnome (Deep)</option>
        <option value="gnomeforest">Gnome (Forest)</option>
        <option value="gnomerock">Gnome (Rock)</option>
        <option value="goblin">Goblin</option>
        <option value="halfelf">Half-Elf</option>
        <option value="halforc">Half-Orc</option>
        <option value="halfling">Halfling</option>
        <option value="human">Human</option>
        <option value="kobold">Kobold</option>
        <option value="orc">Orc</option>
        <option value="tabaxi">Tabaxi</option>
        <option value="tiefling">Tiefling</option>
        <option value="triton">Triton</option>
        <option value="warforged">Warforged</option>
      </select>
      <br></br>
      <label htmlFor="class">Select a Class:</label>
      <select name="class" id="class" value={classes} onChange={(e) => setClass(e.target.value)}>
        <option value="artificer">Artificer</option>
        <option value="barbarian">Barbarian</option>
        <option value="bard">Bard</option>
        <option value="cleric">Cleric</option>
        <option value="druid">Druid</option>
        <option value="fighter">Fighter</option>
        <option value="monk">Monk</option>
        <option value="paladin">Paladin</option>
        <option value="ranger">Ranger</option>
        <option value="rogue">Rogue</option>
        <option value="sorcerer">Sorcerer</option>
        <option value="warlock">Warlock</option>
        <option value="wizard">Wizard</option>
      </select>
      <br></br>
      <label htmlFor="level">Select a Level:</label>
      <select name="level" id="level" value={levels} onChange={(e) => setLevel(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
      </select>
      <Stats raceValue={races} classValue={classes} levelValue={levels}></Stats>
      </div>
    </>
  )
}

export default App
