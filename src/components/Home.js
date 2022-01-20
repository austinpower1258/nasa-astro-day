import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <nav>
        <Link to="nasaphoto">Nasa Photo</Link>
      </nav>
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
    </div> 
  );
}

