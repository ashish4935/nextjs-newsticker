import Button from "@/components/Button"
import Image from "next/image"
import Link from "next/link"
const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-12 pt-24">
        <div className="flex flex-col pt-8">
          <div className="flex">
            <Image alt="AgencyLogo" src='GCaffeAgency.jpg' width={50} height={50}/>
            {/* <img src="GCaffeAgency.jpg" alt="AgencyLogo" style={{width:'50px',height:'50px'}}/> */}
          </div>
          <div className="flex flex-col py-6">
            <h1 className="text-red-400 sm:text-5xl font-extrabold uppercase">Agency</h1>
            <p className="text-gray-300 py-1"><Link href="https://www.gcaffe.org/" target="_blank" className="font-bold hover:text-red-400">G Caffe</Link> is a creative agency that brings your story to life through brand management and digital marketing. It brings rich concepts that may help you compete and gain prominent spots.</p>
            <p className="text-gray-300 py-1"><Link href="https://www.gcaffe.org/" target="_blank" className="font-bold hover:text-red-400">G Caffe</Link> understands the importance of knowing what consumers read, watch, hear and buy. The branding agency might help you make your business everything it can be</p>
            <p className="text-gray-300 py-1">With the tagline – Together We Create, <Link href="https://www.gcaffe.org/" target="_blank" className="font-bold hover:text-red-400">G Caffe</Link> is a one-stop place for Branding, Entertainment, Lifestyle, Fashion, PR, Communications, Content, Social Media, Events and Consumer Insight.</p>
            <p className="text-gray-300 py-1">Founded by <Link href="https://gcaffe.wordpress.com/" target="_blank" className="font-bold hover:text-red-400">Geetanjali Kaul</Link>, it is based in National Capital Region, India. Ambitious, caring and diverse people on their inspiring odysseys are part of <Link href="https://www.gcaffe.org/" target="_blank" className="font-bold hover:text-red-400">G Caffe</Link>, writing success stories.</p>
            <Link href='/contact'>
            <Button text={'Know More'}/>
            </Link>
          </div>
        </div>
        <div className="py-8 flex items-center justify-center relative img-parent">
          <Image src='Gcaffe_Agency.webp' alt="Agency" width={500} height={500} className="img-main"/>
          {/* <img src="GCaffe_Agency.webp" alt="Agency" style={{width:'500px',height:'250px'}} className="img-main"/> */}
          <Image src='GCaffe_Work.webp' alt="Bharat Bolega" width={300} height={300} className="absolute top-12 left-0 img-child"/>
          {/* <img src="GCaffe_Work.webp" alt="Agency" style={{width:'300px',height:'150px'}} className="absolute top-12 left-0 img-child"/> */}
          <Image src='GCaffe_Slogan.webp' alt="Bharat Bolega" width={300} height={300} className="absolute bottom-10 right-0 img-child2"/>
          {/* <img src="GCaffe_Slogan.webp" alt="Agency" style={{width:'300px',height:'150px'}} className="absolute bottom-10 right-0 img-child2"/> */}
        </div>
    </div>
  )
}

export default page