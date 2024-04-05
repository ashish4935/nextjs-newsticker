import Button from "@/components/Button"
import Image from "next/image"
import Link from "next/link"
const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-12 pt-24">
        <div className="flex flex-col pt-8">
          <div className="flex">
            {/* <Image alt="News Ticker" src='/NewsTicker.jpg'width={30} height={30} /> */}
            <Image alt="RaisinaHillLogo" src='/RaisinaHIll.jpg' width={50} height={50}/>
          </div>
          <div className="flex flex-col py-6">
            <h1 className="text-red-400 text-5xl font-extrabold uppercase">Raisina Hill</h1>
            <p className="text-gray-300 py-1">Raisina Hill is a platform which keeps you updated with news, views and analysis of developments and trends across the world.</p>
            <p className="text-gray-300 py-1">Its newsroom tells the stories people want to hear and listens to the stories people want to tell. Together we voice our opinion and stay alert. </p>
            <p className="text-gray-300 py-1">Our storytellers share their distinctive analysis of news trends. On this website, you can read stories from technology to climate change, economy to foreign policy, floods to terror threats.</p>
            <p className="text-gray-300 py-1">Raisina Hill also dwells upon India’s relations with neighbours and other foreign countries. Founded by Neeraj Bhushan, this news website is powered by G Caffe creative agency.</p>
            <Link href='/contact'>
            <Button text={'Know More'}/>
            </Link>
          </div>
        </div>
        <div className="py-8 flex items-center justify-center relative img-parent">
          <Image src='/RaisinaHill.webp' alt="Raisina Hill" width={500} height={500} className="img-main"/>
          <Image src='/RaisinaHill_2Words.webp' alt="Bharat Bolega" width={250} height={250} className="absolute top-0 left-0 img-child"/>
          <Image src='/RaisinaHill_Podcast.webp' alt="Bharat Bolega" width={250} height={250} className="absolute bottom-0 right-0 img-child2"/>
        </div>
    </div>
  )
}

export default page