import React from 'react'
import './ContactForm.css'
function ContactForm(props) {

    return (
        <div className="flex bg-white border-4 rounded-xl mr-20 w-96 p-5">
        <form className="frm">
        {/* <FormControls label="Name" type="text"/>
        <FormControls label="Email" type="email"/>
        <FormControls label="Contact No." type="number"/>
        <FormControls label="Message" type="textarea" rows="4" cols="50"/> */}
        <div className="frm-crtl">
            <label>Name</label>
            <input type="text" />
            </div>
            <div className="frm-crtl">
            <label>Email</label>
            <input type="email" />
            </div>
            <div className="frm-crtl">
            <label>Contact No.</label>
            <input type="number"  />
            </div>
            <div className="frm-crtl">
            <label>Message</label>
            <textarea  rows="4" cols="22" />
            </div>
      </form> 
        </div>
    )
}

export default ContactForm
