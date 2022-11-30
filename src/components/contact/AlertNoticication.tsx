import React from 'react'

interface AlertNoticicationType {
    alertType: string,
    title: string,
    text: string,

}


const AlertNoticication: React.FC<AlertNoticicationType> = ({alertType ='Warning', title, text}) => {
  return (
    <div>
    <div className={`alert alert-${alertType} text-center`} role='alert'>
            <h3>{title}</h3>
            <p>{text}</p>
        </div> 


    </div>
  )
}

export default AlertNoticication