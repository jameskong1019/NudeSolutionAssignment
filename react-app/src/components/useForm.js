import React, {useEffect, useState} from "react";

const  useForm = (initialFieldValues) => {
   const [values, setValues] = useState(initialFieldValues)

   const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSelectChange = (e, action) => {
        setValues({
            ...values,
            [action.name]: e.id
        })
      }

      const resetForm = () => {
        setValues({
            ...initialFieldValues
        })
    }

    return {
        values,
        setValues,
        handleInputChange,
        handleSelectChange,
        resetForm
    };
}
 
export default useForm;