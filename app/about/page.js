import Button from "@/components/Button"
import Image from "next/image"
import Link from "next/link"
const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-12 pt-24">
        <div className="flex flex-col pt-8">
          <div className="flex">
            {/* <Image alt="News Ticker" src='/NewsTicker.jpg'width={30} height={30} /> */}
            <Image alt="About" src='/IndiaNewsTickerLive.jpg' width={50} height={50}/>
          </div>
          <div className="flex flex-col py-6">
            <h1 className="text-red-400 text-5xl font-extrabold uppercase">About</h1>
            <p className="text-gray-300 py-1">What is the source of your daily quotient of News – Radio, TV, Internet or Newspaper? Do you choose the medium for trust or availability?</p>
            <p className="text-gray-300 py-1">We bring you first hand news and for that we have developed this service which brings news and views in the form of a ticker which is scrolling on your screen.</p>
            <p className="text-gray-300 py-1">INT believes in complete honesty and truthfulness of the word news which actually means North East West South. We have thus created this platform to take India ahead.</p>
            <p className="text-gray-300 py-1">Follow News Ticker Live for breaking news from across the world. You deserve options, better options for the news you can trust.</p>
            <Link href='/contact'>
            <Button text={'Contact'}/>
            </Link>
          </div>
        </div>
        <div className="py-8 flex items-center justify-center">
          {/* <Image src='/NewsTicker_About.png' alt="About" width={400} height={400}/> */}
          <img src="/NewsTicker_About.png" alt="About" style={{width:'400px',height:'400px'}}/>
        </div>
    </div>
  )
}

export default About