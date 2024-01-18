import Image from 'next/image'
import {Footer} from "../components/Footer"
export default function Home() {
  return (
    <main id='Main'>
      <div className='flex flex-col m-10'>
        <p className='py-5 px-10'>At Migrate Solutions, we are more than just a software factory; we are architects of digital transformation. Our journey began with a passion for simplifying the complex process of technology migration. </p>
        <p className='py-5 px-10'>Today, we stand as experts in seamlessly transitioning businesses to modern technologies while simultaneously offering unparalleled team-building services. Meet the minds behind our success, a team dedicated to innovation, quality, and a client-centric approach. Learn about our commitment to reducing the stress of software development by delivering tailor-made solutions focused on the unique needs of each client.</p>
      </div>
      <Footer title='Footer'/>
    </main>
  )
}