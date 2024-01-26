import {Footer} from "../components/Footer"

export default function Home() {
  return (
    <main id='Main'>
      <div className="ContactFormulario">
        <h2>Would you like to schedule a call?</h2>
        <form className="Formulario">
            <label className="m-2">Full Name:</label>
            <input type="text" className="m-2 w-1/2 h-6 rounded-lg bg-gray-400"/>
            <label className="m-2">Company:</label>
            <input type="text" className="m-2 w-1/2 h-6 rounded-lg bg-gray-400"/>
            <label className="m-2">Email:</label>
            <input type="text" className="m-2 w-1/2 h-6 rounded-lg bg-gray-400"/>
            <label className="m-2">Description:</label>
            <input type="text" className={`m-2 w-1/2  rounded-lg bg-gray-400 ${'Description'}`}/>
            <button className="ButtonSend">Send</button>
        </form>    
      </div>
      <Footer title='Footer'/>
    </main>
  )
}