import Image from 'next/image'
import {Footer} from "./components/Footer"
export default function Home() {
  return (
    <main id='Main' >
      <div className='flex flex-col m-10'>
        <p className='py-5 px-10'>Welcome to Migrate Solutions, your trusted partner in software innovation. We specialize in seamlessly migrating businesses from legacy technologies to cutting-edge solutions.</p> 
        <p className='py-5 px-10'>Our mission is to alleviate the challenges of team building by offering comprehensive services that include talent acquisition, team formation, and project development. Explore how we transform ideas into reality, ensuring your software journey is both stress-free and tailored to meet your unique business needs.</p>
        <h2 className='text-xl flex flex-col items-center justify-center py-10'>Some of our customers</h2>
      </div >
      <Footer title='Footer'/>
    </main>
  )
}
