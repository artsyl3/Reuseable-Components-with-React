import React, { useState , useEffect , useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown ({ options , value , onChange}){
    const [isOpen , setIsOpen] = useState(false);
    const divEl = useRef();     
    useEffect(() => {
        const handler  = (event) =>{
            if(!divEl.current.contains(event.target)){
                setIsOpen(false)
            }
        }

        document.addEventListener('click' , handler , true)

        return () => {
           document.removeEventListener('click' , handler);
        }
    } , [])

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleClickOption = (option) => {
        setIsOpen(!isOpen)
        onChange(option); 
        
    }

   
    const renderedOptions = options.map(Option => {
        return (<div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={Option.value} onClick={() => handleClickOption(Option)}>{Option.value}</div>)
    })
    return (<div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between item-center cursor-pointer" onClick={handleClick}>{value?.label || "Select"}
            <GoChevronDown className="text-lg"/></Panel>
            {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
            </div>)
}

export default Dropdown;