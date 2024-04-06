import Link from "next/link"
import Button from "@/components/Button"


const page = () => {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-12 pt-24">
        <div className="flex flex-col pt-8">
          <div className="flex">
            {/* <Image alt="News Ticker" src='/NewsTicker.jpg'width={30} height={30} /> */}
            {/* <Image alt="BBLogo" src='/BharatBolegalogo.jpg' width={50} height={50}/> */}
            <img src="./BharatBolegalogo.jpg" alt="BBLogo" style={{width:'50px',height:'50px'}}/>
          </div>
          <div className="flex flex-col py-6">
            <h1 className="text-red-400 text-5xl font-extrabold uppercase">Bharat Bolega</h1>
            <p className="text-gray-300 py-1">Bharat Bolega is a website which promotes story telling in Hindi, generates awareness, helps them break taboos, and spreads powerful thoughts </p>
            <p className="text-gray-300 py-1">It is devoted exclusively to news, views and analysis of developments around the world. You can be with us if you are bold enough to raise your voice against corruption, terrorism and anarchy.</p>
            <p className="text-gray-300 py-1">We have a dedicated team of journalists, writers, authors, analysts and digital experts with a focus on India-specific social, political and economic trends.</p>
            <p className="text-gray-300 py-1">We also dwell upon our relations with neighbours and other foreign countries. Founded by Neeraj Bhushan, Bharat Bolega is powered by G Caffe creative agency.</p>
            <Link href='/contact'>
            <Button text={'Know More'}/>
            </Link>
          </div>
        </div>
        <div className="relative py-8 flex items-center justify-center img-parent" >
          {/* <Image src='/Bharat_Bolega.webp' alt="Bharat Bolega" width={500} height={500}  className="img-main"/> */}
          <img src="./Bharat_Bolega.webp" alt="Bharat Bolega" style={{width:'500px',height:'350px'}} className="img-main"/>
          {/* <Image src='/BB_Sports.webp' alt="Bharat Bolega" width={300} height={300} className="absolute top-0 left-0 object img-child" /> */}
          <img src="./BB_Sports.webp" alt="Bharat Bolega" style={{width:'300px',height:'150px'}} className="absolute top-0 left-0 object img-child"/>
          {/* <Image src='/BB_Podcast.webp' alt="Bharat Bolega" width={250} height={250} className="absolute bottom-0 right-0 object img-child2" /> */}
          <img src="./BB_Podcast.webp" alt="Bharat Bolega" style={{width:'250px',height:'200px'}} className="absolute bottom-0 right-0 object img-child2"/> 
        </div>
    </div>
  )
}

export default page