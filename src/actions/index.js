export const UPDATE_SUM = "UPDATE_SUM";
export const CLEAR_SUM = "CLEAR_SUM";
export const QALQ_SUM = "QALQ_SUM";

export function updateSum(value) {

    if (value !== "=" && value!=='C') {
        return {
            type: UPDATE_SUM,
            payload: value
        }
    } else{
        if(value === "="){
            return {
                type: QALQ_SUM
            }
        }else{
            return {
                type: CLEAR_SUM,
                payload: 0
            }
        }
    }
}