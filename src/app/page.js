// import Image from 'next/image'
// import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Script from 'next/script.js';
import HomePage from './Pages/home/psge';

export default function Home() {
  return (
    <>
     <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
      <HomePage /> 
      
  
    </>
  )
}
