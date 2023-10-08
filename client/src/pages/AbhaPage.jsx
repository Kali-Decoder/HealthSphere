import React from 'react'
import { Link } from 'react-router-dom'
import OTPCard from '../components/OTPCard'
const AbhaPage = () => {
  return (
   <div className='container mx-auto flex justify-center items-center flex-col  h-[80vh]'>
           <div className="font-sans antialiased bg-grey-lightest w-full">
        <div className="w-full bg-grey-lightest" style={{ paddingTop: "2rem" }}>
          <div className="container mx-auto py-8">
            <div className="w-5/6 lg:w-1/2 mx-auto bg-white">
              <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
                Abha Details
              </div>
              <div className="py-4 px-8">
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    for="aadhar_number"
                  >
                    Aadhar Number 
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="aadhar_number"
                    type="number"
                    name="aadhar_number"
                  
                    placeholder="Your Aadhar Number"
                  />
                </div>
                
                <div className="flex items-center justify-between mt-8">
                  <button
                    className="bg-blue hover:bg-blue-dark text-black border font-bold py-2 px-4 rounded"
                    type="submit"
                    
                  >
                   Get Details
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>

       
      </div>
      <OTPCard/>
   </div>
  )
}

export default AbhaPage