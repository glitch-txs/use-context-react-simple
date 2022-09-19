import type { NextPage } from 'next'
import { useContext } from 'react'
import styles from '../styles/Home.module.css'
import { contextType, NameContext } from '../useContext/useContext'

const Home: NextPage = () => {

  //the state variables can be passed like so:
  const contextState: contextType = useContext(NameContext)

  return (
    <div className={styles.container}>
      Fetching data from useContext
    </div>
  )
}

export default Home
