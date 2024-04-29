'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search(){
    const router = useRouter();
    const [searchKey, setSearchKey] = useState("");
    const handleSubmit =async (event:any)=>{
        router.push(`/${searchKey}`);
        setSearchKey('');

    }
    const handleSearchChange = async(event :any)=>{
        setSearchKey(event.target.value);
        
    }
    return (
      
        <div className="text-1xl font-bold mb-2 md:mb-0">
            <input type="text" onChange={handleSearchChange} value={searchKey}></input>
            <button className="bg-pink-300" onClick={handleSubmit}>Search</button>
        </div>
    )
}