import {useState} from "react";

const useFormHook = (init) => {
    const [ formData, setFormData ] = useState({...init});
    return [
        {...formData},
        (evt) => {
            setFormData({
                ...formData,
                [evt.target.name]: evt.target.value
            })
        }
    ]
}

export default useFormHook;