// Feedback.js

export default function Feedback() {
    return(
        <div className="signup absolute mt-52 ml-48 
                        w-80 float-left border-2 p-2 
                        rounded-xl shadow-xl text-xl ">
            < label className="bold text-blue-900">Feedback & Queries </label>
            
             <form>
                <div>
                    <label className="text-sm">Select Issue*</label>
                    <br></br>
                    <select className="bg-gray-50 border border-gray-300 
                                        text-blue-900 text-sm rounded-lg 
                                        focus:border-blue-500 w-full p-2.5">
                        <option value="Feedback" >
                            -- Select Your Query --
                        </option>
                        <option value="Feedback" >
                            Feedback
                        </option>
                        <option value="Feedback">
                            Workout Related Queries
                        </option>
                        {/* <option value="Feedback">
                            Payment Related Issue
                        </option>
                        <option value="Feedback">
                            Hiring Related Queries
                        </option> */}
                        <option value="Feedback">
                               Advertise With Us
                        </option>
                    </select>
                    <br></br>
                    <label className="text-sm">Email Address*</label>
                    <br></br>
                    <input className="bg-gray-50 border border-gray-300 
                                        text-sm rounded-lg focus:border-blue-500
                                        w-full p-2.5" 
                            type="email" 
                            placeholder="saeipe-fitness.netlify.app"/>
                    <br></br>
                    <label className="text-sm">
                        Drop Your Query 
                    </label>
                    <br></br>
                    <textarea className="bg-gray-50 border border-gray-300 
                                            text-sm rounded-lg 
                                            focus:border-blue-500 
                                            w-full p-2.5" 
                                rows="4" 
                                cols="25" 
                                maxlength="300" 
                                placeholder="Max Allowed Characters: 300">
                    </textarea>
                    <br></br>
                    <button className="px-8 mx-auto py-2.5 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200"
                            type="button">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
