import React from 'react';

interface InputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string,
    name: string,
    className?: string,
    children: React.ReactNode,
    errors?: [],
}


const SelectInput: React.FC<InputProps> = ({
    label = '',
    name = '',
    className = '',
    children = null,
    errors = [],
    ...props
}) => {
    return (
        <div className={className}>
            {label && (
                <label className="form-label" htmlFor={name}>
                    {label}:
                </label>
            )}
            <select
                id={name}
                name={name}
                {...props}
                className={`form-select ${errors.length ? 'error' : ''}`}
            >
                {children}
            </select>
            {errors && <div className="form-error">{errors}</div>}
        </div>
    );
};

export default SelectInput;
