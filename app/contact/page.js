import Button from "@/components/Button"
import Image from "next/image"
import Link from 'next/link';
const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-12 pt-24">
        <div className="flex flex-col pt-8">
          <div className="flex">
            <Image alt="Contact" src='NewsTickerContact.png' width={50} height={50}/>
            {/* <img src="NewsTickerContact.png" alt="contact" style={{width:'50px',height:'50px'}}/> */}
          </div>
          <div className="flex flex-col py-6">
            <h1 className="text-red-400 sm:text-5xl font-extrabold uppercase">Contact</h1>
            <p className="text-gray-300 py-1">Got a story or photo? Send us on <Link href="mailto:gcaffe.neeraj@gmail.com" className="hover:text-red-400">gcaffe.neeraj@gmail.com</Link></p>
            <p className="text-gray-300 py-1">For vacancies, e-mail Human Resources on <Link href="mailto:gcaffe.neeraj@gmail.com" className="hover:text-red-400">gcaffe.neeraj@gmail.com</Link></p>
            <p className="text-gray-300 py-1">If you have a media query, write to <Link href="mailto:gcaffe.neeraj@gmail.com" className="hover:text-red-400">gcaffe.neeraj@gmail.com</Link></p>
            <p className="text-gray-300 py-1"> You can also reach us by post. Write to India News Ticker A 16, Second Floor, Sector 9 Noida.</p>
            <Link href="mailto:gcaffe.neeraj@gmail.com">
              <Button text={"Let's Connect"}/>
            </Link>
          </div>
        </div>
        <div className="py-8 flex items-center justify-center">
          <Image src='NewsTicker_Agency.png' alt="Contact" width={500} height={500}/>
          {/* <img src="NewsTicker_Agency.png" alt="contact" style={{width:'500px',height:'500px'}}/> */}
        </div>
    </div>
  )
}

export default Contact