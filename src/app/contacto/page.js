'use client';

import React, { useRef } from "react";

export default function contacto(){

  const nombreRef= React.useRef();
  const emailRef=React.useRef();
  const mensajeRef=React.useRef();

  const manejoDeSubmit = (e) => {
    e.preventDefault();
    console.log(nombreRef.current.value)
    console.log(emailRef.current.value)
    console.log(mensajeRef.current.value)
  }

  

    return(
        <section>
        <h1 className="pl-3 text-xl font-bold">Contacto</h1>

        <h2 className="pl-3">¡Esta es la pagina para contactarnos!</h2>

        <ul>
        <div class="flow-root rounded-lg border border-gray-100 py-3 shadow-sm max-w-md">
      <dl class="-my-3 divide-y divide-gray-100 text-sm">
    <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
      <dt class="font-medium text-gray-900">Telefono:</dt>
      <dd class="text-gray-700 sm:col-span-2">223-505-1034</dd>
    </div>

    <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
      <dt class="font-medium text-gray-900">Correo electronico:</dt>
      <dd class="text-gray-700 sm:col-span-2">Contacto@gmail.com</dd>
    </div>
  </dl>
</div>
        </ul>

        <form onSubmit={manejoDeSubmit}>
          <label>Nombre:</label>
          <input type="text" placeholder="Nombre" ref={nombreRef}/>

          <label>Correo electronico:</label>
          <input type="email" placeholder="Correo electronico" ref={emailRef}/>

          <label>Mensaje:</label>
          <input type="text" placeholder="Deja tu mensaje aca!" ref={mensajeRef}/>

          <button id="" onClick={() => alert("Datos enviados con exito!")}>Enviar</button>
          
          
        </form>
        </section>
    )
}