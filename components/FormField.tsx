import React from 'react'

const FormField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  as = "input",
  options = [],
}: FormFieldProps) => {
  return (
      <div className="form-field">  
      <label htmlFor={id}>{label}</label>
      
      </div>
  )
}

export default FormField