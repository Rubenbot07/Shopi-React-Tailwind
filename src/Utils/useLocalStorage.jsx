import { useEffect } from 'react'

export function useLocalStorage (user) {
  useEffect(() => {
    if (localStorage.getItem(user.email)) {
      console.log('error')
    } else {
      localStorage.setItem(user.email, JSON.stringify(user))
    }
  }, [user.email, user])
}
