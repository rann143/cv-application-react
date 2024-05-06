import Input from './Input'

function ContactForm() {
    return (
        <form className='contact-form'>
        <Input label='name' type='text' />
        <Input label='email' type='email'/>
        <Input label='cell' type='tel' />
        <button type='submit'>Submit</button>
        </form>
    )
}

export {ContactForm}