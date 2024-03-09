import './Stats.css'
import React, { useState } from 'react';

function Stats({raceValue, classValue, levelValue}){
    const [strength, setStrength] = useState(null);
        const [dexterity, setDexterity] = useState(null);
        const [constitution, setConstitution] = useState(null);
        const [intelligence, setIntelligence] = useState(null);
        const [wisdom, setWisdom] = useState(null);
        const [charisma, setCharisma] = useState(null);
        const [health, setHealth] = useState(null);

    const clearStats = () => {
        setStrength(null);
        setDexterity(null);
        setConstitution(null);
        setIntelligence(null);
        setWisdom(null);
        setCharisma(null);
        setHealth(null);
    }
    const roll = () => {
        const rolls = [];
        for (let index = 0; index < 6; index++){
            rolls.push(Math.floor(Math.random() * 6) + 1);
        }
        rolls.sort((a,b) => b - a);
        const highest = rolls.slice(0,3);
        let total = 0;
        for (let index = 0; index < 3; index++){
            total += highest[index];
        }
        return total;
    }
    const classStats = () => {

    }
    const healthset = () => {
        const rollHealth = healthroll();
        setHealth([rollHealth]);
    }
    const rollStats = () => {
        clearStats();
        const rollStrength = roll();
        const rollDexterity = roll();
        const rollConstitution = roll();
        const rollIntelligence = roll();
        const rollWisdom = roll();
        const rollCharisma = roll();
        setStrength([rollStrength]);
        setDexterity([rollDexterity]);
        setConstitution([rollConstitution]);
        setIntelligence([rollIntelligence]);
        setWisdom([rollWisdom]);
        setCharisma([rollCharisma]);
        classStats();
        healthset();
    }
    const healthroll = () => {
        const charclass = classValue;
        let max = 0;
        if (charclass == "artificer" || charclass == "bard" || charclass == "cleric" || charclass == "druid" || charclass == "monk" || charclass == "rogue" || charclass == "warlock")
        {
            max = 8;
        }
        else if (charclass == "barbarian")
        {
            max = 12;
        }
        else if (charclass == "fighter" || charclass == "paladin" || charclass == "ranger")
        {
            max = 10;
        }
        else if (charclass == "sorcerer" || charclass == "wizard")
        {
            max = 6;
        }
        let conmod = 0;
        const conValue = parseInt(constitution);
        if (conValue === 1) {
        conmod = -5;
        } 
        else if (conValue >= 2 && conValue <= 3) {
        conmod = -4;
        } 
        else if (conValue >= 4 && conValue <= 5) {
        conmod = -3;
        } 
        else if (conValue >= 6 && conValue <= 7) {
        conmod = -2;
        } 
        else if (conValue >= 8 && conValue <= 9) {
        conmod = -1;
        } 
        else if (conValue >= 10 && conValue <= 11) {
        conmod = 0;
        } 
        else if (conValue >= 12 && conValue <= 13) {
        conmod = 1;
        } 
        else if (conValue >= 14 && conValue <= 15) {
        conmod = 2;
        } 
        else if (conValue >= 16 && conValue <= 17) {
        conmod = 3;
        } 
        else if (conValue >= 18 && conValue <= 19) {
        conmod = 4;
        } 
        else if (conValue === 20) {
        conmod = 5;
        }
        const level = parseInt(levelValue);
        let totalhealth = 0;
        totalhealth = max + conmod; //for 1st level
        if (level > 1){
            for (let index = 0; index < level; index++){
                totalhealth += Math.floor(Math.random() * max) + 1 + conmod;
            }
        }
        return totalhealth;
    }
    return(
        <div>
        <br></br>
        <button onClick={rollStats}>Roll Stats!</button>
        <table>
            <thead>
                <th>Health</th>
                <th>Strength</th>
                <th>Dexterity</th>
                <th>Constitution</th>
                <th>Intelligence</th>
                <th>Wisdom</th>
                <th>Charisma</th>
            </thead>
            <tbody>
                <tr>
                <td>{health}</td>
                <td>{strength}</td>
                <td>{dexterity}</td>
                <td>{constitution}</td>
                <td>{intelligence}</td>
                <td>{wisdom}</td>
                <td>{charisma}</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}
export default Stats;