export const ADD_TO_HMRS_SYSTEM = "ADD_TO_HMRS_SYSTEM"

export function addToHmrsSystem(job){
    return{
        type: ADD_TO_HMRS_SYSTEM,
        payload:job
    }
}