import './Stats.css'
import React, { useState } from 'react';

function Stats(){
    const [strength, setStrength] = useState(null);
        const [dexterity, setDexterity] = useState(null);
        const [constitution, setConstitution] = useState(null);
        const [intelligence, setIntelligence] = useState(null);
        const [wisdom, setWisdom] = useState(null);
        const [charisma, setCharisma] = useState(null);

    const clearStats = () => {
        setStrength(null);
        setDexterity(null);
        setConstitution(null);
        setIntelligence(null);
        setWisdom(null);
        setCharisma(null);
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
    };

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
                <td>20</td>
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