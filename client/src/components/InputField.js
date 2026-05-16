import React from "react";

const InputField = ({ label, type = 'text', name, value, onChange, placeholder }) => {
    return (
        <div className="input-field">
        <label htmlFor={name}>{label}</label>
        <input
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required
        />
        </div>
    );
    }

export default InputField;