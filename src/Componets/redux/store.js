import {legacy_createStore} from "redux"
import basicreducer from "./reducer"

const store = legacy_createStore(basicreducer)
export default store