import { useEffect } from 'react'
import ContactForm from '../components/contact-form'


const Contact = () => {
  useEffect(() => {
    document.title = 'Contact | The Agility'
  }, [])

  return (
    <>
      <ContactForm />

    </>
  )
}

export default Contact