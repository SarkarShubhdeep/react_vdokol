import 'bootstrap/dist/css/bootstrap.min.css'
import { ReactPropTypes } from 'react';
import './universal.css';
const Button = (props) => {
    return (
        <>
            <button onClick={props.onClick} className={props.class}>{props.text}</button>
        </>
    )
}




export default Button
