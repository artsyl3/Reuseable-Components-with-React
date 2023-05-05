import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
    const [selection , setSelection] = useState(null);

    const handleSelection = (option) => {
        setSelection(option)
    }
    
    const options = [
        {label : "red" , value : "red"},
        {label : "green" , value : "green"},
        {label : "blue" , value : "blue"}
    ]
    
    return <Dropdown options={options} value={selection} onChange={handleSelection}/>

}

export default DropdownPage;