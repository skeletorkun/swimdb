import { Field, Control, Form,  combineForms } from 'react-redux-form'

const initialSwimEvent = {
    competition : 'test'
}

export const formReducer = combineForms({
    swim : initialSwimEvent
});