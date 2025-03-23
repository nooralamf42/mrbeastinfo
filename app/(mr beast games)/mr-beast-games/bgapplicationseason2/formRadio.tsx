import React from 'react'

export default function FormRadio({name, names}:{name:string, names?:string[]}) {
  return (
    <div className={`${names ? 'space-y-1' : 'flex space-x-4'}`}>
              {names ? (names.map((namesName:string, id:number)=><label key={id} className="border flex items-center rounded-lg px-6 py-2 cursor-pointer">
                <input
                  required
                  type="radio"
                  name={name}
                  className="mr-2 block"
                />
                <span>{namesName}</span>
              </label>)) : 
              <><label className="flex items-center border rounded-lg px-6 py-2 cursor-pointer">
                <input
                  required
                  type="radio"
                  name={name}
                  className="mr-2"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center border rounded-lg px-6 py-2 cursor-pointer">
                <input
                required
                  type="radio"
                  name= {name}
                  className="mr-2"
                />
                <span>No</span>
              </label></>}
            </div>
  )
}
