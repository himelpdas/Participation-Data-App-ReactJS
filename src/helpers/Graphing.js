import {map} from "lodash"
import crypto from 'crypto'

function colorFromID(id){
    let hash = crypto.createHash('sha256')
    hash.update(`${id}`)
    const color = hash.digest('hex').substring(0,6)
    return "#"+color
}

function pieMap(e) {

    const out = {
        title: `${e.id}`,
        value: parseInt(e.hours), color: colorFromID(e.id)
    }
    return out
}

function pieDataFromState(state){
    return map(state, pieMap)
}

export {colorFromID, pieDataFromState}