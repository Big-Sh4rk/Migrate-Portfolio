import Image from 'next/image'
import {Footer} from "../components/Footer"
import {ServiceTarjet} from "../components/ServiceTarjet"
export default function Home() {
  return (
    <main id='Main' >
      <div className='flex flex-row alig m-10'>
        <article className=' w-1/2 p-5 flex flex-col items-center justify-center '>
          <p className="py-4 pl-8">Discover the power of Migrate Solutions's specialized 
          services. We excel in migrating businesses from outdated 
          technologies to the latest platforms, ensuring a smooth 
          and efficient transition.</p> 

          <p className="py-4 pl-8">Our team building services go beyond recruitment; we 
          curate and formalize dedicated teams, reducing the 
          complexities of building an in-house software team 
          for our clients. Explore our comprehensive suite of 
          solutions, from technology migration to expert team 
          formation, all aimed at delivering projects that align 
          perfectly with your business objectives.</p>
        </article>
        <div className='flex flex-col items-center justify-center  w-1/2'>
          <div>
          <h3 className="items-center justify-center m-2 ">Services</h3>
          </div>
          <ServiceTarjet/>

        </div>
      </div>
      <Footer title='Footer'/>
    </main>
  )
}