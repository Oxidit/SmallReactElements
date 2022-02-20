
import React, { useState  } from "react";
 

export default function SignInForm(initialState) {

  const [message, setMessage] = useState();
  
  const [messageError, setMessageError] = useState('');

  const messageValidation = (e) => {
      const tempMessage = (e && e.target && e.target.value) || e;
      setMessage(tempMessage);
      const re = /Ехал Грека через реку/i;
      const isValidmessage = re.test(String(tempMessage).toLowerCase());
      if(!tempMessage){
          setMessageError('Enter a message ')
      } else if(!isValidMessage) {
          setMessageError('Enter a Valid message')
      }
  
  console.log(messageError,"messageError")
  const { t } = useTranslation();
  return (
       <>
          
          <Input
              id={'message'}
              type={'message'}
              onChange={messageValidation}
          />
          <Status>{messageError}</Status>
          
           
          <Button onClick={() => onSubmit()} >
              {t('Sign In')}
          </Button>
          </>)}