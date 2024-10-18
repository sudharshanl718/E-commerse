import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";

const Search = () => {
    const [keyword, setKeyword] = useState("")
    const navigate = useNavigate()
    const searchHandle = ()=>{
        if(keyword){
            navigate('/search?keyword='+keyword)
        } else {
            navigate('/')
        }
    }
  return (
    <div>
        <div className="hd2">
                <div>
                    <input type="search" placeholder="Enter Product Name ..." onChange={(e)=>setKeyword(e.target.value)}/>
                </div>
                <div>
                    <button onClick={searchHandle}><FaSearch id="i1" /></button>
                </div>
            </div>
    </div>
  )
}  

export default Search