
export const validateText = (elementName: string, value: string, minLenght: number = 2) =>{
    if(value.length == 0)
        return `${elementName} is required`
    else if(value.length < minLenght)
        return `${elementName} must contain atleast ${minLenght} charachters`
    else
        return ''    
    
}

export const validateEmail = (elementName: string, value: string, regEx: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ) => {
    if(value.length == 0)
         return `${elementName} is required`
    else if(!regEx.test(value))
         return `${elementName} must be valid email`
   else
        return ''   
    }
 
 export const validate_name = (value: string) => {
     if (!value)
         return 'A name is required'
     else if (value.length < 2)
         return 'Must be a valid name'
     else
         return null
 }
 
 export const validate_email = (value: string) => {
     const regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
     
     if (!value)
         return 'An email address is required'
     else if (!regex_email.test(value))
         return 'Must be a valid email address'
     else
         return null
 }
 
 export const validate_comments = (value:string) => {
     if (!value)
         return 'A comment is required'
     else if (value.length < 5)
         return 'Your comment must be at least 5 characters long'
     else
         return null
 }