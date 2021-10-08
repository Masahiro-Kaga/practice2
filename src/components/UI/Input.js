import React ,{ useRef} from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    const inputRef = useRef();
    const activate = () =>{
        
    }

    return (
        <div
            className={`${classes.control} ${props.isValid === false ? classes.invalid : ""}`}
        >
            <label htmlFor={props.htmlFor}>{props.title}</label>
            <input
                ref = {inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
}

export default Input;