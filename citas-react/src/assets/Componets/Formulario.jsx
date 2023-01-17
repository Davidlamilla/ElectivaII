import React from 'react'

export const Formulario = () => {
  return (
   <div className="md:w-1/2 lg:w-2/5">
    <h2 className="font-black text-3xl text-center mb-10">
      Seguimiento de pasientes
    </h2>
    <p className="text-lg mt-5 text-center"> 
      Añade pacientes {" "}
      <span className='text-indigo-600'
      font-bold>Administralos</span>
     
    </p>

    <form className='bg-white shadow-md rounded-lg py-10 px-5'>
      <div className='mb-5'>
        <label htmlFor="mascota" className="block
          text-gray-700 uppercase font-bold">Nombre Mascota:</label>

        <input id="mascota" type="text" className='border-2
        w-full p-2 mt-2 placeholder-gray-400 rounded-md'
        placeholder='Nombre de la mascota' />
      </div>
    </form>  
   </div>
  )
}
