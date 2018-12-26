import { combineReducers } from 'redux'

import DashBoardReducer from '../dashboard/dashBoardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    dashboard: DashBoardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer
})
export default rootReducer

