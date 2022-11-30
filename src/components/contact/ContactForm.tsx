
import React, { useState } from 'react'
import { validateEmail, validateText } from '../../assets/scripts/validationContact'
import { contactFormDataType} from '../../models/formModel'
import AlertNoticication from './AlertNoticication'




const ContactForm: React.FC = () => { 
  let currentPage = "Contact Us"
 // window.top.document.title = `${currentPage} || Fixxo` 

 const DEFAULT_VALUES: contactFormDataType =  {name: '', email: '', comments: ''}

  const [formData, setFormData] = useState<contactFormDataType>(DEFAULT_VALUES) 

  const [errors, setErrors] = useState<contactFormDataType>(DEFAULT_VALUES) 
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [failedSubmit, setFailedSubmit] = useState<boolean>(false)

  const handleChange = (e:any) => { 
    const {id, value} = e.target
    setFormData({...formData, [id]: value})

    if(id === 'name')
        setErrors({...errors, [id]: validateText(id, value)})

    if(id === 'email')
    setErrors({...errors, [id]: validateEmail(id, value)})

  }
  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()
    setSubmitted(false)
    setFailedSubmit(false)

    if (formData. name !== '' && formData.email !== '' && formData.comments !== ''){
        if (errors.name === '' && errors.email === '' && errors.comments === '' ){
            const result =  await fetch ('http://localhost:5000/api/products', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)

            })
         
            if(result.status === 200){
                setSubmitted(true)
                setFormData(DEFAULT_VALUES)
            }
            else(setSubmitted(false))
            setFailedSubmit(true)
           
        }

        
    }

  }

  const handleTextAreaChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {

    const {id, value} = e.target
    if(id === 'comments')
    setErrors({...errors, [id]: validateText(id, value , 6)})

  }

/********************************************************************OnKeyUP********************************************************/ 
/* On key up Validation, it tests a regexKey wehen the user klicks a button to chewck if it matches the key. If not, it will set an error message. */ 

const [checkName, setcheckName] = useState('');

const [nameError, setnameError] = useState('');

function isValidName(checkName: string) {
  return /[A-Z].*[A-Z]/.test(checkName);
}

const handleNameChange = (event:any) => { /* Test if the name is not valid*/
   if (!isValidName(event.target.value)) {
      setnameError('Name is invalid');
   } else {
      
      setnameError('');
   }
   if((isValidName(event.target.value))){  /* Test if the name is valid*/
     setnameError('Name is valid');
      
   }

   if(checkName.length <= 0){  /* Remvies text from input element if empty*/
      setnameError('');
   }

   setcheckName(event.target.value);
 };

 const [checkemail, setCheckEmail] = useState('');
 const [errorEmail, setErrorEmail] = useState('');

 function isValidEmail(checkemail: string) {
   return /\S+@\S+\.\S+/.test(checkemail);
 }
 

 const handleEmailChange = (event: any) => { /* Test if the email is not valid*/
   if (!isValidEmail(event.target.value)) {
      setErrorEmail('Email is invalid');
   } 
  
   else {
      setErrorEmail('');
   }

   if((isValidEmail(event.target.value))){ /* Test if the email is valid*/
      setErrorEmail('Email is valid');
   }

   if(checkemail.length <= 0){ /* Removes text from input element if empty*/
      setErrorEmail('');
   }

   setCheckEmail(event.target.value);
 };

   
  return (
    <div className="container">
         
         
            {submitted ? (<AlertNoticication alertType='success' title='Thank you fot your comment' text='We will contact you'/>) : (<></>)}
            {failedSubmit ? (<AlertNoticication alertType='danger' title='Something whent wrong' text='Could not submit'/>) : (<></>)}
               <>
               <div className="contact-input">
                  <h3>Come in Contact with Us</h3>
                  <form className="contact-form" id="form" onSubmit={handleSubmit} noValidate>
                  <div className='input-control'>
                     <input id="name" className={(errors.name ? 'error': '')} style={(errors.name ? {border: '1px solid #FF7373'}: {} )} value={formData.name} onChange={(e) => handleChange(e)}  onKeyUp= {handleNameChange} type="text" placeholder="Your Name" />
                     <div className="errorMessage">{errors.name}</div>
                     {nameError && <span className='nameError'>{nameError}</span>}
                  </div>
                  <div className='input-control'>
                     <input id="email" className={(errors.email ? 'error': '')} style={(errors.email ? {border: '1px solid #FF7373'}: {} )} value={formData.email} onChange={(e) => handleChange(e)} onKeyUp={handleEmailChange} type="email" placeholder="Your Mail" />
                     <div className="errorMessage">{errors.email}</div>
                     {errorEmail && <span className='emailError'>{errorEmail}</span>}
                  </div>
                  <div className="text-area">
                     <textarea id="comments" className={(errors.comments ? 'error': '')} style={(errors.comments ? {border: '1px solid #FF7373'}: {} )} value={formData.comments} onChange={(e) => handleTextAreaChange(e)} placeholder="Comments"></textarea>
                     <div className="errorMessage">{errors.comments}</div>
                  </div>
                     <button className="submit-form"   type="submit" value="submit">Post Comments</button>
                  </form>   
                </div>
               </>
            


         
         
      </div>
  )
  
}

export default ContactForm



