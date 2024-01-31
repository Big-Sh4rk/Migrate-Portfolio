import { useState } from "react";

interface StateType {
    name: string,
    company: string,
    email: string,
    description:String
  }

export const useForm = (initialForm:any, validetionsForm:any) => {
    const [form,setForm] = useState(initialForm);
    const [errors,setErrors] = useState<StateType>({name:'',company:'',email: '',description: '' });
    const [loading,setLoading] = useState(false);

    const handleChange= (e:any) => {
        const {name,value}= e.target
        setForm({
            ...form,
            [name]:value
        })
    };
    const handleBlur= (e:any) => {
        handleChange(e)
        const validationErrors = validetionsForm(form);
        let countErrors = Object.keys(validationErrors);


    };
    const handleSubmit= (e:any) => {
        handleChange(e)
        const validationErrors = validetionsForm(form);
        let countErrors = Object.keys(validationErrors);
        setErrors(validationErrors || {});
        if(countErrors.length === 0){
            setLoading(true)
        }
    };
    
    return {
        form,
        errors,
        loading,
        handleChange,
        handleBlur,
        handleSubmit
    }

}