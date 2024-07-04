import { useState, useEffect } from 'react'

export function useLocalStorage (user) {
  const [userData, setUserData] = useState({})

  useEffect(() => {
    if (localStorage.getItem(user.email)) {
      console.log('error')
    } else {
      localStorage.setItem(user.email, JSON.stringify(user))
      setUserData()
    }
  }, [user.email, user])
  return userData
}
