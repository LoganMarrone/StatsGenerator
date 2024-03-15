/* eslint-disable react/prop-types */
import './Stats.css'
import { useState } from 'react';

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
        const [asi, setAsi] = useState("0");
        const [mod3, setMod3] = useState(strength);
        const [mod4, setMod4] = useState(strength);
        const [amount1, setAmount1] = useState("1");
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

    const raceStats = (rollStrength, rollDexterity, rollConstitution, rollIntelligence, rollWisdom, rollCharisma) => {
        const racial = raceValue;
        let racemod1;
        let racemod2;
        let racemod3;
        let racemod4;
        let racemod5;
        let racemod6;
        switch (racial){
            case 'aarakocra':
                racemod1 = rollDexterity + 2;
                racemod2 = rollWisdom + 1;
                setDexterity(racemod1);
                setWisdom(racemod2);
                setDexteritymod(sort(racemod1));
                setWisdommod(sort(racemod2));
                break;
            case 'aasimar':
                racemod1 = rollCharisma + 2;
                setCharisma(racemod1);
                setCharismamod(sort(racemod1));
                break;
            case 'bugbear':
                racemod1 = rollStrength + 2;
                racemod2 = rollDexterity + 1;
                setStrength(racemod1);
                setDexterity(racemod2);
                setStrengthmod(sort(racemod1));
                setDexteritymod(sort(racemod2));
                break;
            case 'changeling':
                racemod1 = rollCharisma + 2;
                setCharisma(racemod1);
                setCharismamod(sort(racemod1));
                    switch (mod1) {
                        case 'strength':
                            racemod2 = rollStrength + 1;
                            setStrength(racemod2);
                            setStrengthmod(sort(racemod2));
                            break;
                        case 'dexterity':
                            racemod2 = rollDexterity + 1;
                            setDexterity(racemod2);
                            setDexteritymod(sort(racemod2));
                            break;
                        case 'constitution':
                            racemod2 = rollConstitution + 1;
                            setConstitution(racemod2);
                            setConstitutionmod(sort(racemod2));
                            break;
                        case 'intelligence':
                            racemod2 = rollIntelligence + 1;
                            setIntelligence(racemod2);
                            setIntelligencemod(sort(racemod2));
                            break;
                        case 'wisdom':
                            racemod2 = rollWisdom + 1;
                            setWisdom(racemod2);
                            setWisdommod(sort(racemod2));
                            break;
                        default:
                                break;
    }
                break;
            case 'dragonborn':
                racemod1 = rollStrength + 2;
                racemod2 = rollCharisma + 1;
                setStrength(racemod1);
                setCharisma(racemod2);
                setStrengthmod(sort(racemod1));
                setCharismamod(sort(racemod2));
                break;
            case 'dwarf':
                racemod1 = rollConstitution + 2;
                setConstitution(racemod1);
                setConstitutionmod(sort(racemod1));
                break;
            case 'elfdrow':
                racemod1 = rollDexterity + 2;
                racemod2 = rollCharisma + 1;
                setDexterity(racemod1);
                setCharisma(racemod2);
                setDexteritymod(sort(racemod1));
                setCharismamod(sort(racemod2));
                break;
            case 'elfhigh':
                racemod1 = rollDexterity + 2;
                racemod2 = rollIntelligence + 1;
                setDexterity(racemod1);
                setIntelligence(racemod2);
                setDexteritymod(sort(racemod1));
                setIntelligencemod(sort(racemod2));
                break;
            case 'elfwood':
                racemod1 = rollDexterity + 2;
                racemod2 = rollWisdom + 1;
                setDexterity(racemod1);
                setWisdom(racemod2);
                setDexteritymod(sort(racemod1));
                setWisdommod(sort(racemod2));
                break;
            case 'genasiair':
                racemod1 = rollConstitution + 2;
                racemod2 = rollDexterity + 1;
                setConstitution(racemod1);
                setDexterity(racemod2);
                setConstitutionmod(sort(racemod1));
                setDexteritymod(sort(racemod2));
                break;
            case 'genasiearth':
                racemod1 = rollConstitution + 2;
                racemod2 = rollStrength + 1;
                setConstitution(racemod1);
                setStrength(racemod2);
                setConstitutionmod(sort(racemod1));
                setStrengthmod(sort(racemod2));
                break;
            case 'genasifire':
                racemod1 = rollConstitution + 2;
                racemod2 = rollIntelligence + 1;
                setConstitution(racemod1);
                setIntelligence(racemod2);
                setConstitutionmod(sort(racemod1));
                setIntelligencemod(sort(racemod2));
                break;
            case 'genasiwater':
                racemod1 = rollConstitution + 2;
                racemod2 = rollWisdom + 1;
                setConstitution(racemod1);
                setWisdom(racemod2);
                setConstitutionmod(sort(racemod1));
                setWisdommod(sort(racemod2));
                break;
            case 'gnomedeep':
                racemod1 = rollIntelligence + 2;
                racemod2 = rollDexterity + 1;
                setIntelligence(racemod1);
                setDexterity(racemod2);
                setIntelligencemod(sort(racemod1));
                setDexteritymod(sort(racemod2));
                break;
            case 'gnomeforest':
                racemod1 = rollIntelligence + 2;
                racemod2 = rollDexterity + 1;
                setIntelligence(racemod1);
                setDexterity(racemod2);
                setIntelligencemod(sort(racemod1));
                setDexteritymod(sort(racemod2));
                break;
            case 'gnomerock':
                racemod1 = rollIntelligence + 2;
                racemod2 = rollConstitution + 1;
                setIntelligence(racemod1);
                setConstitution(racemod2);
                setIntelligencemod(sort(racemod1));
                setConstitutionmod(sort(racemod2));
                break;
            case 'goblin':
                racemod1 = rollDexterity + 2;
                racemod2 = rollConstitution + 1;
                setDexterity(racemod1);
                setConstitution(racemod2);
                setDexteritymod(sort(racemod1));
                setConstitutionmod(sort(racemod2));
                break;
            case 'halfelf':
                racemod1 = rollCharisma + 2;
                setCharisma(racemod1);
                setCharismamod(sort(racemod1));
                    switch (mod1) {
                        case 'strength':
                            racemod2 = rollStrength + 1;
                            setStrength(racemod2);
                            setStrengthmod(sort(racemod2));
                            break;
                        case 'dexterity':
                            racemod2 = rollDexterity + 1;
                            setDexterity(racemod2);
                            setDexteritymod(sort(racemod2));
                            break;
                        case 'constitution':
                            racemod2 = rollConstitution + 1;
                            setConstitution(racemod2);
                            setConstitutionmod(sort(racemod2));
                            break;
                        case 'intelligence':
                            racemod2 = rollIntelligence + 1;
                            setIntelligence(racemod2);
                            setIntelligencemod(sort(racemod2));
                            break;
                        case 'wisdom':
                            racemod2 = rollWisdom + 1;
                            setWisdom(racemod2);
                            setWisdommod(sort(racemod2));
                            break;
                        default:
                                break;
    }
                        switch (mod2) {
                        case 'strength':
                            racemod2 = rollStrength + 1;
                            setStrength(racemod2);
                            setStrengthmod(sort(racemod2));
                            break;
                        case 'dexterity':
                            racemod2 = rollDexterity + 1;
                            setDexterity(racemod2);
                            setDexteritymod(sort(racemod2));
                            break;
                        case 'constitution':
                            racemod2 = rollConstitution + 1;
                            setConstitution(racemod2);
                            setConstitutionmod(sort(racemod2));
                            break;
                        case 'intelligence':
                            racemod2 = rollIntelligence + 1;
                            setIntelligence(racemod2);
                            setIntelligencemod(sort(racemod2));
                            break;
                        case 'wisdom':
                            racemod2 = rollWisdom + 1;
                            setWisdom(racemod2);
                            setWisdommod(sort(racemod2));
                            break;
                        default:
                                break;
    }
                break;
            case 'halforc':
                racemod1 = rollStrength + 2;
                racemod2 = rollConstitution + 1;
                setStrength(racemod1);
                setConstitution(racemod2);
                setStrengthmod(sort(racemod1));
                setConstitutionmod(sort(racemod2));
                break;
            case 'halfling':
                racemod1 = rollDexterity + 2;
                setDexterity(racemod1);
                setDexteritymod(sort(racemod1));
                break;
            case 'human':
                racemod1 = rollStrength + 1;
                racemod2 = rollDexterity + 1;
                racemod3 = rollConstitution + 1;
                racemod4 = rollIntelligence + 1;
                racemod5 = rollWisdom + 1;
                racemod6 = rollCharisma + 1;
                setStrength(racemod1);
                setDexterity(racemod2);
                setConstitution(racemod3);
                setIntelligence(racemod4);
                setWisdom(racemod5);
                setCharisma(racemod6);
                setStrengthmod(sort(racemod1));
                setDexteritymod(sort(racemod2));
                setConstitutionmod(sort(racemod3));
                setIntelligencemod(sort(racemod4));
                setWisdommod(sort(racemod5));
                setCharismamod(sort(racemod6));
                break;
            case 'kobold':
                racemod1 = rollDexterity + 2;
                setDexterity(racemod1);
                setDexteritymod(sort(racemod1));
                break;
            case 'orc':
                racemod1 = rollStrength + 2;
                racemod2 = rollConstitution + 1;
                setStrength(racemod1);
                setConstitution(racemod2);
                setStrengthmod(sort(racemod1));
                setConstitutionmod(sort(racemod2));
                break;
            case 'tabaxi':
                racemod1 = rollDexterity + 2;
                racemod2 = rollCharisma + 1;
                setDexterity(racemod1);
                setCharisma(racemod2);
                setDexteritymod(sort(racemod1));
                setCharismamod(sort(racemod2));
                break;
            case 'tiefling':
                racemod1 = rollCharisma + 2;
                racemod2 = rollIntelligence + 1;
                setCharisma(racemod1);
                setIntelligence(racemod2);
                setCharismamod(sort(racemod1));
                setIntelligencemod(sort(racemod2));
                break;
            case 'triton':
                racemod1 = rollStrength + 1;
                racemod2 = rollConstitution + 1;
                racemod3 = rollCharisma + 1;
                setStrength(racemod1);
                setConstitution(racemod2);
                setCharisma(racemod3);
                setStrengthmod(sort(racemod1));
                setConstitutionmod(sort(racemod2));
                setCharismamod(sort(racemod3));
                break;
            case 'warforged':
                racemod1 = rollConstitution + 2;
                setConstitution(racemod1);
                setConstitutionmod(sort(racemod1));
                    switch (mod1) {
                        case 'strength':
                            racemod2 = rollStrength + 1;
                            setStrength(racemod2);
                            setStrengthmod(sort(racemod2));
                            break;
                        case 'dexterity':
                            racemod2 = rollDexterity + 1;
                            setDexterity(racemod2);
                            setDexteritymod(sort(racemod2));
                            break;
                        case 'charisma':
                            racemod2 = rollCharisma + 1;
                            setCharisma(racemod2);
                            setCharismamod(sort(racemod2));
                            break;
                        case 'intelligence':
                            racemod2 = rollIntelligence + 1;
                            setIntelligence(racemod2);
                            setIntelligencemod(sort(racemod2));
                            break;
                        case 'wisdom':
                            racemod2 = rollWisdom + 1;
                            setWisdom(racemod2);
                            setWisdommod(sort(racemod2));
                            break;
                        default:
                                break;
    }
                break;
            default:
                break;
        }
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
        raceStats(rollStrength, rollDexterity, rollConstitution, rollIntelligence, rollWisdom, rollCharisma);
        checkStats(rollStrength, rollDexterity, rollConstitution, rollIntelligence, rollWisdom, rollCharisma);
        const lvl = levelValue;
        const lvl2 = level2Value;
        ABI(lvl, lvl2);
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
    if (tempMod != null && mod1 != null && mod2 != null){
    switch (mod1) {
        case 'strength':
            tempValue = strength;
            setStrength(getValue(mod2));
            setValue(mod2, tempValue);
            setStrengthmod(sort(getValue(mod2)));
            break;
        case 'dexterity':
            tempValue = dexterity;
            setDexterity(getValue(mod2));
            setValue(mod2, tempValue);
            setDexteritymod(sort(getValue(mod2)));
            break;
        case 'constitution':
            tempValue = constitution;
            setConstitution(getValue(mod2));
            setValue(mod2, tempValue);
            setConstitutionmod(sort(getValue(mod2)));
            break;
        case 'intelligence':
            tempValue = intelligence;
            setIntelligence(getValue(mod2));
            setValue(mod2, tempValue);
            setIntelligencemod(sort(getValue(mod2)));
            break;
        case 'wisdom':
            tempValue = wisdom;
            setWisdom(getValue(mod2));
            setValue(mod2, tempValue);
            setWisdommod(sort(getValue(mod2)));
            break;
        case 'charisma':
            tempValue = charisma;
            setCharisma(getValue(mod2));
            setValue(mod2, tempValue);
            setCharismamod(sort(getValue(mod2)));
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
            setStrengthmod(sort(value));
            break;
        case 'dexterity':
            setDexterity(value);
            setDexteritymod(sort(value));
            break;
        case 'constitution':
            setConstitution(value);
            setConstitutionmod(sort(value));
            break;
        case 'intelligence':
            setIntelligence(value);
            setIntelligencemod(sort(value));
            break;
        case 'wisdom':
            setWisdom(value);
            setWisdommod(sort(value));
            break;
        case 'charisma':
            setCharisma(value);
            setCharismamod(sort(value));
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

    const ABI = (lvl, lvl2) => {
        if (lvl >= 4 || lvl2 >= 4){
            let amount = 0;
            amount = Math.floor(lvl / 4);
            let amount2 = 0;
            amount2 = Math.floor(lvl2 / 4);
            let totalamount = amount + amount2;
            setAsi(totalamount);
            if (totalamount > 0){
                var show = document.getElementById('ASI');
                show.style.display = "block";
            }
            else{
                show.style.display = "none";
            }
        }
        }

    const determine = () => {
        var show = document.getElementById('ASI');
        var one = document.getElementById('ASI2');
        var two = document.getElementById('ASI3');
        let amounts = amount1;
        if (amounts == 1){
            show.style.display = "none";
            one.style.display = "block";
            two.style.display = "block";
        }
        else if (amounts == 2){
            show.style.display = "none";
            one.style.display = "block";
        }
    }

    const add = () => {
        let deplete = asi;
        deplete = deplete - 1;
        console.log(deplete);
        let amounts = amount1;
        let tempValue = 0;
        var one = document.getElementById('ASI2');
        var two = document.getElementById('ASI3');
        const str = strength;
        const dex = dexterity;
        const cst = constitution;
        const int = intelligence;
        const wis = wisdom;
        const chr = charisma;
        if (amounts == 1){
            one.style.display = "none";
            two.style.display = "none";
            if (mod3 != mod4){
                switch (mod3) {
                case 'strength':
                tempValue = parseInt(str) + 1;
                setStrength(tempValue);
                setValue(mod3, tempValue);
                setStrengthmod(sort(tempValue));
                break;
                case 'dexterity':
            tempValue = parseInt(dex) + 1;
                setDexterity(tempValue);
                setValue(mod3, tempValue);
                setDexteritymod(sort(tempValue));
            break;
                case 'constitution':
            tempValue = parseInt(cst) + 1;
                setConstitution(tempValue);
                setValue(mod3, tempValue);
                setConstitutionmod(sort(tempValue));
            break;
                case 'intelligence':
            tempValue = parseInt(int) + 1;
                setIntelligence(tempValue);
                setValue(mod3, tempValue);
                setIntelligencemod(sort(tempValue));
            break;
                case 'wisdom':
            tempValue = parseInt(wis) + 1;
                setWisdom(tempValue);
                setValue(mod3, tempValue);
                setWisdommod(sort(tempValue));
            break;
                case 'charisma':
            tempValue = parseInt(chr) + 1;
                setCharisma(tempValue);
                setValue(mod3, tempValue);
                setCharismamod(sort(tempValue));
            break;
                default:
            break;
                }
            switch (mod4) {
                case 'strength':
                tempValue = parseInt(str) + 1;
                setStrength(tempValue);
                setValue(mod4, tempValue);
                setStrengthmod(sort(tempValue));
                break;
                case 'dexterity':
            tempValue = parseInt(dex) + 1;
                setDexterity(tempValue);
                setValue(mod4, tempValue);
                setDexteritymod(sort(tempValue));
            break;
                case 'constitution':
            tempValue = parseInt(cst) + 1;
                setConstitution(tempValue);
                setValue(mod4, tempValue);
                setConstitutionmod(sort(tempValue));
            break;
                case 'intelligence':
            tempValue = parseInt(int) + 1;
                setIntelligence(tempValue);
                setValue(mod4, tempValue);
                setIntelligencemod(sort(tempValue));
            break;
                case 'wisdom':
            tempValue = parseInt(wis) + 1;
                setWisdom(tempValue);
                setValue(mod4, tempValue);
                setWisdommod(sort(tempValue));
            break;
                case 'charisma':
            tempValue = parseInt(chr) + 1;
                setCharisma(tempValue);
                setValue(mod4, tempValue);
                setCharismamod(sort(tempValue));
            break;
                default:
            break;
                }
                }
            else{
            one.style.display = "block";
            two.style.display = "block";
            }
        }
        else if (amounts == 2){
        one.style.display = "none";
                switch (mod3) {
                case 'strength':
                tempValue = parseInt(str) + 2;
                setStrength(tempValue);
                setValue(mod3, tempValue);
                setStrengthmod(sort(tempValue));
                break;
                case 'dexterity':
            tempValue = parseInt(dex) + 2;
                setDexterity(tempValue);
                setValue(mod3, tempValue);
                setDexteritymod(sort(tempValue));
            break;
                case 'constitution':
            tempValue = parseInt(cst) + 2;
                setConstitution(tempValue);
                setValue(mod3, tempValue);
                setConstitutionmod(sort(tempValue));
            break;
                case 'intelligence':
            tempValue = parseInt(int) + 2;
                setIntelligence(tempValue);
                setValue(mod3, tempValue);
                setIntelligencemod(sort(tempValue));
            break;
                case 'wisdom':
            tempValue = parseInt(wis) + 2;
                setWisdom(tempValue);
                setValue(mod3, tempValue);
                setWisdommod(sort(tempValue));
            break;
                case 'charisma':
            tempValue = parseInt(chr) + 2;
                setCharisma(tempValue);
                setValue(mod3, tempValue);
                setCharismamod(sort(tempValue));
            break;
                default:
            break;
                }
        }
        setAsi(deplete);
        if (deplete != 0){
            var repeat = document.getElementById('ASI');
            repeat.style.display = "block";
        }
        else {
            repeat.style.display = "none";
        }

    }    

    return(
        <div id="body">
        <br></br>
        <button onClick={rollStats}>Roll Stats!</button>
        <table>
            <thead>
            <tr>
                <th>Health</th>
                <th>Strength</th>
                <th>Dexterity</th>
                <th>Constitution</th>
                <th>Intelligence</th>
                <th>Wisdom</th>
                <th>Charisma</th>
                </tr>
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
      <div id="ASI">
        <br></br>
        <h3>Currenty you have {asi} Ability Score Improvements</h3>
        <div>
        <button onClick={determine}>Press to select:</button>
        <label htmlFor="amount1">Select Modifier:</label>
      <select name="amount1" id="amount1" value={amount1} onChange={(e) => setAmount1(e.target.value)}>
        <option value="1">+1;+1</option>
        <option value="2">+2</option>
      </select>
      </div>
        </div>
        <div id="ASI2">
        <br></br>
        <h3>Currenty you have {asi} Ability Score Improvements</h3>
        <div>
        <button onClick={add}>Add these Stat(s):</button>
        <br></br>
        <label htmlFor="mod3">Select Modifier:</label>
      <select name="mod3" id="mod3" value={mod3} onChange={(e) => setMod3(e.target.value)}>
        <option value="strength">Strength</option>
        <option value="dexterity">Dexterity</option>
        <option value="constitution">Constitution</option>
        <option value="intelligence">Intelligence</option>
        <option value="wisdom">Wisdom</option>
        <option value="charisma">Charisma</option>
      </select>
      <div id="ASI3">
      <label htmlFor="mod4">Select Modifier:</label>
      <select name="mod4" id="mod4" value={mod4} onChange={(e) => setMod4(e.target.value)}>
        <option value="strength">Strength</option>
        <option value="dexterity">Dexterity</option>
        <option value="constitution">Constitution</option>
        <option value="intelligence">Intelligence</option>
        <option value="wisdom">Wisdom</option>
        <option value="charisma">Charisma</option>
      </select>
      </div>
      </div>
        </div>
        </div>
    )
}
export default Stats;