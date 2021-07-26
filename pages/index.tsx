import TextField from "../components/textfield";
import React from "react";
export default function Home() {
  return (
    <div className='container mx-auto'>
      <div>
        <div className='text-center text-4xl mb-5'>
          <p className='text-gray'>Todo</p>
        </div>
        <div>
          <TextField />
        </div>
      </div>
    </div>
  );
}
