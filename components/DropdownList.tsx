"use client";

import React, { useState } from 'react'

const DropdownList = () => {

    const [isOpen, setIsOpen] = useState(false);
  return (
      <div className="relative">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      
      </div>

   {isOpen && (
        <ul className="dropdown">
         
            <li
              
             
            >
              {option}
             
                <Image
                  src="/assets/icons/check.svg"
                  alt="check"
                  width={16}
                  height={16}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropdownList