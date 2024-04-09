import Image from 'next/image'
import Link from 'next/link'
const Team =[
    {
        name:"Geetanjali Kaul",
        designation:"Creative Director",
        image:"Geetanjali-Kaul-CEO-and-Creative-Director-G-Caffe.webp",
        social:{
            fb:"https://www.facebook.com/geekaul",
            insta:"https://www.instagram.com/gee_smashing_kaul/",
            twit:"https://twitter.com/TheGappuccino"
        }
    },
    {
        name:"Neeraj Bhushan",
        designation:"Editor In Chief",
        image:"Neeraj-Bhushan-Editor-in-Chief-G-Caffe.webp",
        social:{
            fb:"https://www.facebook.com/neerajbhushansingh",
            insta:"https://www.instagram.com/neerajbhushan_int",
            twit:"https://twitter.com/neerajbhushan"
        }
    },
    {
        name:"Johny Ghosh",
        designation:"Creative Operations Manager",
        image:"Johny-Ghosh-Creative-Operations-Manager-G-Caffe.webp",
        social:{
            fb:"https://www.facebook.com/travellunatic3780",
            insta:"https://www.instagram.com/johny.ghosh/",
            twit:"https://twitter.com/ranadeep80"
        }
    },
    {
        name:"Shruti",
        designation:"Content Manager",
        image:"Shruti-Content-Manager-G-Caffe.webp",
        social:{
            fb:"https://www.facebook.com/profile.php?id=1814926596",
            insta:"https://www.instagram.com/shru.you/",
            twit:"https://twitter.com/nishishruti"
        }
    },
    
]
const TeamMember = () => {
  return (
    <>
        <h2 className='text-red-400 sm:text-5xl font-extrabold text-center'>Meet our team</h2>
        <div className='grid grid-cols-1 md:grid-cols-4 py-5'>
            {
                Team.map((info,index)=>{
                    return <div key={index} className="flex flex-col items-center m-5 p-5 bg-gray-800 rounded-md">
                        <Image src={info.image} alt='img' width={200} height={200} className='rounded-full'/>
                        <h2 className='pt-5 text-lg font-medium text-gray-200'>{info.name}</h2>
                        <h4 className='text-sm text-gray-400 py-1'>{info.designation}</h4>
                        <div className='flex w-20 justify-between'>
                        <Link href={info.social.fb}><Image alt='facebook' src="facebook.svg" width={20} height={20} style={{ filter: 'invert(70%)'}}/></Link>
                        <Link href={info.social.insta}><Image alt='instagram' src="instagram.svg" width={20} height={20} style={{ filter: 'invert(70%)'}}/></Link>
                        <Link href={info.social.twit}><Image alt='twitter' src="twitter.svg" width={20} height={20} style={{ filter: 'invert(70%)'}}/></Link>
                        </div>
                    </div>
                })
            }
        </div>
    </>
  )
}

export default TeamMember