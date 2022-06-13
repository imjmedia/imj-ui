import React from "react";

interface DropdownProps {
    color?: string;
    options?: any[];
}
const Dropdown = (props: DropdownProps) => {
    const [inputValue, setInputValue] = React.useState("");

    const onChangeHandler = (event: any) => {
        setInputValue(event.target.value);
    };

    function titleCase(text: any) {
        return (text[0].toUpperCase() + text.slice(1).toLowerCase())
    }
    const color = titleCase(props.color);
    var options = props.options;
    if (props.options && props.options.length > 0) {
        return (
            <select onChange={onChangeHandler} name="" id="" value={inputValue} className={'InputSelect InputSelect' + color}>
                {options && options.map((anOption: any) => <option>{anOption}</option>)}
            </select>
        )
    }
    else {
        return (
            <h5 style={{ fontSize: "1.5rem", marginBlock: ".5rem" }}>No hay opciones</h5>
        )
    }
}
export default Dropdown;