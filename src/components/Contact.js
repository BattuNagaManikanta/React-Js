const Contact=()=>{
    return (
        <div>
            <h1 className="text-3xl font-extrabold">Contact Us</h1>
            <input className="p-2 m-2 border border-black" type="text" placeholder="name"/>
            <input className="p-2 m-2 border border-black" type="text" placeholder="Message"/>
            <button className="p-2 m-2 border border-black">Submit</button>
        </div>
    )
}

export default Contact;