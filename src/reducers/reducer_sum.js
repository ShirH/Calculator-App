import {UPDATE_SUM, QALQ_SUM, CLEAR_SUM} from '../actions/index';

export default function (state = 0, action) {
    switch (action.type) {
        case(UPDATE_SUM):
            return state === 0 ? action.payload : state + action.payload;
        case(QALQ_SUM):
            return state + '=' + calculate(state);
        case(CLEAR_SUM):
            return action.payload;
    }

    return state;
}

function calculate(state) { //can use eval insted
    var sum = 0;
    let aPlus = state.split("+");
    for (let i = 0; i < aPlus.length; i++) {
        let aMines = aPlus[i].split("-");
        for (let j = 0; j < aMines.length; j++) {
            let aMultiple = aMines[j].split("x");
            for (let k = 0; k < aMultiple.length; k++) {
                let aDivision = aMultiple[k].split("/");
                if (aDivision.length > 1) {
                    aMultiple[k] = concatWithDivision(aDivision);
                }else{
                    aMultiple[k] =  aDivision[0];
                }
            }
            if (aMultiple.length > 1) {
                aMines[j] = concatWithMultiple(aMultiple);
            }else{
                aMines[j] = aMultiple[0];
            }
        }
        if (aMines.length > 1) {
            aPlus[i] = concatWithMines(aMines);
        }else{
            aPlus[i] = aMines[0];
        }
    }
    if (aPlus.length > 1) {
        sum = concatWithPlus(aPlus);
    }else{
        sum = aPlus[0];
    }
    return sum;
}

function concatWithMultiple(array) {
    let sum;
    array.map(function (val) {
        if (!isNaN(val)) {
            val = parseInt(val);
        }
        sum = sum===undefined ? val:sum * val;
    });
    return sum;
}

function concatWithDivision(array) {
    let sum;
    array.map(function (val) {
        if (!isNaN(val)) {
            val = parseInt(val);
        }
        sum = sum===undefined ? val: sum / val;
    });
    return sum;
}

function concatWithPlus(array) {
    let sum;
    array.map(function (val) {
        if (!isNaN(val)) {
            val = parseInt(val);
        }
        sum = sum===undefined ? val:sum + val;
    });
    return sum;
}

function concatWithMines(array) {
    let sum ;
    array.map(function (val) {
        if (!isNaN(val)) {
            val = parseInt(val);
        }
        sum = sum === undefined ? val : sum - val;
    });
    return sum;
}