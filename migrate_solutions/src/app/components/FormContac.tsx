"use client"

import {Footer} from "../components/Footer"
import { useState } from "react"
import { useForm } from "../Hooks/useForm"
import { error } from "console";
import { stringify } from "querystring";

const initialForm={
    name: "",
    company: "",
    email:"",
    description:""
};
const validationsForm = (form:any) => {
    let errors:any = {};
    let nameRegex = /^[a-zA-Z\s]{2,}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let descriptionRegex = /^.{5,}$/;


    if(!form.name.trim()){
        errors.name ="The 'Name' field is required";
    }else if(!nameRegex.test(form.name.trim())){
        errors.name = "Field accepts only letters and blanks, minimum two characters"
    }
    if(!form.company.trim()){
        errors.company ="The 'Company' field is required";
    }else if(!nameRegex.test(form.name.trim())){
        errors.company = "Field accepts only letters and blanks, minimum two characters"        
    }
    if(!form.email.trim()){
        errors.email ="The 'Email' field is required";
    }else if(!nameRegex.test(form.name.trim())){
        errors.email = "No incorrect email format"        
    }

    

    return errors;
}

interface FooterProps {
    title: string;
   }

export const Form : React.FC<FooterProps> = () => {
  const {
    form,
    errors,
    loading,
    handleChange,
    handleBlur,
    handleSubmit
} = useForm(initialForm,validationsForm);
  return (
      <div className="ContactFormulario">
        <h2 className="text-xl">Would you like to schedule a call?</h2>
        <form className="Formulario" 
            action={loading?("https://formsubmit.co/tlad7.leonardo@gmail.com"):''} 
            method="POST"  
            onBlur={handleBlur}>
            <h2 className="m-2 text-xl">Formulario de contacto</h2>
            <input 
                type="text" 
                className={`m-2 w-1/2 h-10 rounded-lg bg-gray-400 p-5 ${(errors.name=== undefined||errors.name===null||errors.name==='')?('border-2 border-white placeholder-white '):('border-2 border-red-500 placeholder-red-500 bg-gray-200  ')}`} 
                name="name" 
                onChange={handleChange} 
                value={form.name}required
                placeholder={("Full Name")}
            />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
            <input 
                type="text" 
                className={`m-2 w-1/2 h-10 rounded-lg bg-gray-400 placeholder-white p-5 ${(errors.company=== undefined||errors.company===null||errors.company==='')?('border-2 border-white'):('border-2 border-red-500 placeholder-red-500 bg-gray-200')}`} 
                name="company" 
                onChange={handleChange} 
                value={form.company}required
                placeholder={("Company")}
            />
                {errors.company && <p className="text-red-500">{errors.company}</p>}
            <input 
                type="email" 
                className={`m-2 w-1/2 h-10 rounded-lg bg-gray-400 placeholder-white p-5 ${(errors.email=== undefined||errors.email===null||errors.email==='')?('border-2 border-white'):('border-2 border-red-500 placeholder-red-500 bg-gray-200')}`} 
                name="email" 
                onChange={handleChange} 
                value={form.email}required
                placeholder={("Email")}
            />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
            <textarea 
                name="Description" 
                id="Description" 
                className="m-2 w-1/2 h-10 rounded-lg bg-gray-400 placeholder-white p-5" 
                onChange={handleChange}
                placeholder={"Description"}
                >
            </textarea>
            {loading?(<p>Su envio fue realizado</p>):('')
            }
            <button className="ButtonSend" type="submit" onClick={handleSubmit}>SEND</button>
            <input type="hidden" name="_captcha" value="true"></input>
            <input type="hidden" name="_next" value="http://localhost:3000"></input>
        </form>    
      </div>
  )
}