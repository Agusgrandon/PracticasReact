import React from "react";
import { useState } from "react";

export default function ItemCount({inicial}) {
    const [clicks, setClicks] = useState(inicial);
    return (
        <div>
            <span>{clicks}</span>
            <button onClick={() => setClicks(clicks + 1)}>Agregar al carrito</button>
        </div>
    )
  }