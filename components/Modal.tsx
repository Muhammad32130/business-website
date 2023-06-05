export default function modal({modal, setmodal}:any){
    return(

        <div className='absolute_modal '>
        <div className="modal_main">
            <div className="modal_bg" onClick={()=>{setmodal(false)}}></div>
        <div className={`modal_row ${modal && 'grow'}`}>
        <form className="form_main" action="/">
            <h2>
            Contact Us to get a quick quote for your business!
            </h2>
            <input required className="input_form" type="email" name="email" placeholder="Email" />
            <input required className="input_form" type="text" name="name" placeholder="Name" />
            <textarea required className="text-area" name="message" placeholder="Details about the website"></textarea>
            <button  className="submit_btn" type="submit">Send</button>
        </form>

        </div>
        </div>
    </div>
        )
}