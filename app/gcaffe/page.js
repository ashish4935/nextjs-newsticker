import Button from "@/components/Button"
import Image from "next/image"
import Link from "next/link"
const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-12 pt-24">
        <div className="flex flex-col pt-8">
          <div className="flex">
            {/* <Image alt="News Ticker" src='/NewsTicker.jpg'width={30} height={30} /> */}
            {/* <Image alt="GCaffeLogo" src='/GCaffeAgency.jpg' width={50} height={50}/> */}
            <img src="/GCaffeAgency.jpg" alt="GCaffeLogo" style={{width:'50px',height:'50px'}}/>
          </div>
          <div className="flex flex-col py-6">
            <h1 className="text-red-400 text-5xl font-extrabold uppercase">G Caffe</h1>
            <p className="text-gray-300 py-1">G Caffe brings rich concepts to help you grow. This is a branding platform of creative agency G Caffe. It delivers reliable information and relevant stories on trends and happening.</p>
            <p className="text-gray-300 py-1">This website believes in business of branding. The idea is to inform, entertain, and inspire through multi-platform content. </p>
            <p className="text-gray-300 py-1">It publishes stories on advertising, marketing, branding, fashion, health, travel, food, music and movies with engaging infographics.</p>
            <p className="text-gray-300 py-1">G Caffe understands the importance of knowing and sharing with you how to get what you want. Founded by Geetanjali Kaul, this website is powered by G Caffe creative agency.</p>
            <Link href='/contact'>
            <Button text={'Know More'}/>
            </Link>
          </div>
        </div>
        <div className="py-8 flex items-center justify-center relative img-parent">
          {/* <Image src='/GCaffe.webp' alt="GCaffe" width={500} height={500} className="img-main"/> */}
          <img src="/GCaffe.webp" alt="GCaffe" style={{width:'500px',height:'300px'}} className="img-main"/>
          {/* <Image src='/GCaffe_Archives.webp' alt="GCaffe" width={300} height={300} className="absolute top-0 left-0 img-child"/> */}
          <img src="/GCaffe_Archives.webp" alt="GCaffe" style={{width:'300px',height:'120px'}} className="absolute top-0 left-0 img-child"/>
          {/* <Image src='/GCaffe_Articles.webp' alt="GCaffe" width={250} height={250} className="absolute bottom-0 right-0 img-child2"/> */}
          <img src="/GCaffe_Articles.webp" alt="Raisina Hill" style={{width:'250px',height:'200px'}} className="absolute bottom-0 right-0 img-child2"/>
        </div>
    </div>
  )
}

export default page