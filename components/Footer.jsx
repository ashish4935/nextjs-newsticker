// import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full">
        <hr
    class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-25 dark:opacity-100" />
        <div className="flex flex-col space-y-3 items-center justify-center py-3 text-gray-300">
            {/* LOGO */}
            <Link href="/">
                {/* <Image src="/newsticker.webp" alt='Logo' width={150} height={80}/> */}
                <img src="./newsticker.webp" alt="logo" style={{width:'150px',height:'80px'}} />
            </Link>
            <p className="font-light">© 2024 News Ticker. Powered By <a href="https://gcaffe.com" target="_blank">G Caffe</a></p>
            <div class="flex flex-1 pt-5">
                <p class="pr-3">Privacy Policy</p>
                <div
                    class="h-[25px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
                <p class="pl-3">Disclaimer</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer