import './Stats.css'
import React, { useState } from 'react';

function Stats({raceValue, classValue, levelValue, class2Value, level2Value}){
    const [strength, setStrength] = useState(null);
        const [dexterity, setDexterity] = useState(null);
        const [constitution, setConstitution] = useState(null);
        const [intelligence, setIntelligence] = useState(null);
        const [wisdom, setWisdom] = useState(null);
        const [charisma, setCharisma] = useState(null);
        const [health, setHealth] = useState(null);
        const [strmod, setStrengthmod] = useState(null);
        const [dexmod, setDexteritymod] = useState(null);
        const [constmod, setConstitutionmod] = useState(null);
        const [intmod, setIntelligencemod] = useState(null);
        const [wismod, setWisdommod] = useState(null);
        const [chrmod, setCharismamod] = useState(null);
        const [mod1, setMod1] = useState(null);
        const [mod2, setMod2] = useState(null);
        const [temp, setTemp] = useState(null);
    const clearStats = () => {
        setStrength(null);
        setDexterity(null);
        setConstitution(null);
        setIntelligence(null);
        setWisdom(null);
        setCharisma(null);
        setHealth(null);
        setStrengthmod(null);
        setDexteritymod(null);
        setConstitutionmod(null);
        setIntelligencemod(null);
        setWisdommod(null);
        setCharismamod(null);
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
        const detStrength = sort(strength)
    }
    const sort = (value) => {
        let modifier = 0;
        if (value === 1) {
        modifier = "-5";
        } 
        else if (value >= 2 && value <= 3) {
        modifier = "-4";
        } 
        else if (value >= 4 && value <= 5) {
        modifier = "-3";
        } 
        else if (value >= 6 && value <= 7) {
        modifier = "-2";
        } 
        else if (value >= 8 && value <= 9) {
        modifier = "-1";
        } 
        else if (value >= 10 && value <= 11) {
        modifier = "+0";
        } 
        else if (value >= 12 && value <= 13) {
        modifier = "+1";
        } 
        else if (value >= 14 && value <= 15) {
        modifier = "+2";
        } 
        else if (value >= 16 && value <= 17) {
        modifier = "+3";
        } 
        else if (value >= 18 && value <= 19) {
        modifier = "+4";
        } 
        else if (value === 20) {
        modifier = "+5";
        }
        return modifier;
    }
    const rollStats = () => {
        clearStats();
        const rollStrength = roll();
        const rollDexterity = roll();
        const rollConstitution = roll();
        const rollIntelligence = roll();
        const rollWisdom = roll();
        const rollCharisma = roll();
        const rollHealth = healthroll(rollConstitution);
        setStrength([rollStrength]);
        setDexterity([rollDexterity]);
        setConstitution([rollConstitution]);
        setIntelligence([rollIntelligence]);
        setWisdom([rollWisdom]);
        setCharisma([rollCharisma]);
        setHealth([rollHealth]);
        classStats();
        checkStats(rollStrength, rollDexterity, rollConstitution, rollIntelligence, rollWisdom, rollCharisma);
    }
    const checkStats = (rollStrength, rollDexterity, rollConstitution, rollIntelligence, rollWisdom, rollCharisma) => {
        const detStrength = sort(rollStrength);
        const detDexterity = sort(rollDexterity);
        const detConstitution = sort(rollConstitution);
        const detIntelligence = sort(rollIntelligence);
        const detWisdom = sort(rollWisdom);
        const detCharisma = sort(rollCharisma);
        setStrengthmod([detStrength]);
        setDexteritymod([detDexterity]);
        setConstitutionmod([detConstitution]);
        setIntelligencemod([detIntelligence]);
        setWisdommod([detWisdom]);
        setCharismamod([detCharisma]);
    }
 const swap = () => {
    if (mod1 != mod2){
    let tempMod = mod1;
    setMod1(mod2);
    setMod2(tempMod);
    let tempValue;
    let detStr;
    if (tempMod != null && mod1 != null && mod2 != null){
    switch (mod1) {
        case 'strength':
            tempValue = strength;
            setStrength(getValue(mod2));
            setValue(mod2, tempValue);
            detStr = sort(tempValue);
            setStrengthmod([detStr]);
            break;
        case 'dexterity':
            tempValue = dexterity;
            setDexterity(getValue(mod2));
            setValue(mod2, tempValue);
            detStr = sort(tempValue);
            setDexteritymod([detStr]);
            break;
        case 'constitution':
            tempValue = constitution;
            setConstitution(getValue(mod2));
            setValue(mod2, tempValue);
            detStr = sort(tempValue);
            setConstitutionmod([detStr]);
            break;
        case 'intelligence':
            tempValue = intelligence;
            setIntelligence(getValue(mod2));
            setValue(mod2, tempValue);
            checkStats();
            break;
        case 'wisdom':
            tempValue = wisdom;
            setWisdom(getValue(mod2));
            setValue(mod2, tempValue);
            checkStats();
            break;
        case 'charisma':
            tempValue = charisma;
            setCharisma(getValue(mod2));
            setValue(mod2, tempValue);
            checkStats();
            break;
        default:
            break;
    }
}
    }
}

const getValue = (modifier) => {
    switch (modifier) {
        case 'strength':
            return strength;
        case 'dexterity':
            return dexterity;
        case 'constitution':
            return constitution;
        case 'intelligence':
            return intelligence;
        case 'wisdom':
            return wisdom;
        case 'charisma':
            return charisma;
        default:
            return null;
    }
}

const setValue = (modifier, value) => {
    switch (modifier) {
        case 'strength':
            setStrength(value);
            break;
        case 'dexterity':
            setDexterity(value);
            break;
        case 'constitution':
            setConstitution(value);
            break;
        case 'intelligence':
            setIntelligence(value);
            break;
        case 'wisdom':
            setWisdom(value);
            break;
        case 'charisma':
            setCharisma(value);
            break;
        default:
            break;
    }
}
    const healthroll = (constitution) => {
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
        const charclass2 = class2Value;
        let max2 = 0;
        if (charclass2 == "artificer" || charclass2 == "bard" || charclass2 == "cleric" || charclass2 == "druid" || charclass2 == "monk" || charclass2 == "rogue" || charclass2 == "warlock")
        {
            max2 = 8;
        }
        else if (charclass2 == "barbarian")
        {
            max2 = 12;
        }
        else if (charclass2 == "fighter" || charclass2 == "paladin" || charclass2 == "ranger")
        {
            max2 = 10;
        }
        else if (charclass2 == "sorcerer" || charclass2 == "wizard")
        {
            max2 = 6;
        }
        const level2 = parseInt(level2Value)
        if (level2 != 0){
        totalhealth += max2 + conmod; //for 1st level
            if (level2 > 1){
            for (let index = 0; index < level2; index++){
                totalhealth += Math.floor(Math.random() * max2) + 1 + conmod;
            }
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
            <tbody>
                <tr>
                    <td className="blank"></td>
                    <td>{strmod}</td>
                    <td>{dexmod}</td>
                    <td>{constmod}</td>
                    <td>{intmod}</td>
                    <td>{wismod}</td>
                    <td>{chrmod}</td>
                </tr>
            </tbody>
        </table>
        <br></br>
        <button onClick={swap}>Swap these Stats:</button>
        <label htmlFor="mod1">Select Modifier 1:</label>
      <select name="mod1" id="mod1" value={mod1} onChange={(e) => setMod1(e.target.value)}>
        <option value="strength">Strength</option>
        <option value="dexterity">Dexterity</option>
        <option value="constitution">Constitution</option>
        <option value="intelligence">Intelligence</option>
        <option value="wisdom">Wisdom</option>
        <option value="charisma">Charisma</option>
      </select>
      <label htmlFor="mod2">Select Modifier 2:</label>
      <select name="mod2" id="mod2" value={mod2} onChange={(e) => setMod2(e.target.value)}>
        <option value="strength">Strength</option>
        <option value="dexterity">Dexterity</option>
        <option value="constitution">Constitution</option>
        <option value="intelligence">Intelligence</option>
        <option value="wisdom">Wisdom</option>
        <option value="charisma">Charisma</option>
      </select>
        </div>
    )
}
export default Stats;