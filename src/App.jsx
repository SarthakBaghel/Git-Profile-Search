import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import InfoCard from './component/InfoCard'

const App = () => {
  

  let [userData,setUserData] = useState({})
  let [user,setUser] = useState('SarthakBaghel')
  
  let inputEl = useRef('')

  function handleSearch(){
    let username = inputEl.current.value
    setUser(username)
  }

  async function getUser(){
    let resp = await axios.get(`https://api.github.com/users/${user}`);
    // console.log(resp,'resp')
    setUserData(resp.data)
  }


  useEffect(()=>{
    getUser();
  },[user])


  return (
    <div className='flex flex-col items-center gap-20 p-4'>
      <div className='flex flex-col items-center gap-4'>
        <div>
          <h1 className='text-2xl text-pretty font-semibold'>GitHub Profile Search</h1>
        </div>
        <div className='flex gap-6 items-center'>
          <div>
            <input className='p-2 bg-slate-200 rounded-lg hover:ring-2 hover:ring-red-300' ref={inputEl} type="text" id='username' placeholder='Enter Username'/>
          </div>
          <div>
            <button className='bg-red-100 p-2 rounded-lg focus:ring-2 focus:ring-red-300' onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
      <div>
        <InfoCard imgURL={userData.avatar_url} repos={userData.public_repos} followers={userData.followers} following={userData.following} />
      </div>
    </div>
  )
}

export default App