import { createContext, useContext, useReducer } from 'react';

interface IGlobalState {
    orderItems: [],
    employeeName: string,
    reservationNumber: string,
    roomNumber: string
};

interface IContextState {
    state: IGlobalState,
    dispatchGlobal: ({type}:{type:string}) => void;
}

interface IContextDispatchAtction {
    type:string, 
    payload:any
}

export const GlobalContext = createContext([]);

const globalState = {
    orderItems: [],
    employeeName: '',
    reservationNumber: '',
    roomNumber: ''
};

const reducer = (state:any, action:{type:string, payload:any}) => {
    switch (action.type) {
        case ('setEmployeeName'):
            return {
                ...state,
                employeeName: action.payload
            }
        case ('setReservationNumber'):
            return {
                ...state,
                reservationNumber: action.payload
            }
        case ('setRoomNumber'):
            return {
                ...state,
                roomNumber: action.payload
            }
        default: return state;
    }
}

const GlobalProvider = (props:any) => {
    const [state, dispatchGlobal] = useReducer(reducer, globalState);

    return (
        <GlobalContext.Provider value={[state, dispatchGlobal]} {...props}/>
    )
};

export default GlobalProvider;

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}