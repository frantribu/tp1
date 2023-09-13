'use client';

import { useState } from "react"

export default function Counter(){
    const [count, setCount] =useState(0)
    return(
        <section>
            <h2>El boton fue pulsado {count} veces</h2>
            <button onClick={() => setCount(count + 1)}>

                <a
                class="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
              
                >
                <span
                    class="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent"
                >
                    +1 Click
                </span>
                </a>
            </button>

        </section>
    )
}