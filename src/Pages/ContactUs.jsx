import React from "react";
import Card from "../components/ContactUs/Card";
import Feedback from "../components/ContactUs/Feedback";

function ContactUs() {
       
      return (
        <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>

        <> 
        <div className="contactus" >
          <div >
            <div>
            <Card></Card>
            <Feedback></Feedback>
            </div>
          </div>
        </div>
        </>
        </main>

      );
    }
    
    export default ContactUs;