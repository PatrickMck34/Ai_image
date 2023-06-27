import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import {logo } from "./assets"
import {Home, CreatePost, Landing} from "./pages"
import AccountBoxIcon from '@mui/icons-material/AccountBox';


const App = () => {
  return (
  <BrowserRouter>
  <header className="w-full flex justify-between items-center bg-gray-300 sm:px-8 px-4 py-4 border-b-2 border-b-[#fe5d0c]">
    <Link to="/">
      <img src={logo} alt="logo" className="w-28 object-contain" />
    </Link>
    <div className="flex text-2xl  ">
            <div className="text-[#170d04] mr-96 text-5xl " >Binary Artist Forums

            </div>
            <div>
                <button className="rounded-md w-full sm:w-auto px-5   text-center">

               <AccountBoxIcon className="text-[#6a3914]"/>
                </button>
    <Link to="/create-post" className=" bg-[#4649ff] text-white px-4 py-1 rounded-md">Create</Link>
            </div>
            </div>
</header>
<main className="sm:p-8 px-4 py-8 w-full  min-h-[calc (100vh - 73px )]">
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/image" element={<Landing/>}/>
  <Route path="/create-post" element={<CreatePost />} />


</Routes>
</main>
  </BrowserRouter>
  )
}
export default App