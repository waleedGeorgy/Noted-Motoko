import PropTypes from "prop-types";

export default function TextInput(props){
    return(
        <input type="text" style={props.style} onFocus={props.onFocus} onChange={props.onChange} value={props.value} name={props.name} placeholder={props.placeholder} required={true} autoFocus={props.autoFocus} />
    );
}

TextInput.propTypes = {
    style: PropTypes.object,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    autoFocus: PropTypes.bool
};