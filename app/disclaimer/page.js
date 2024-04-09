import Link from "next/link"
const page = () => {
  return (
    <div className="flex flex-col px-12 pt-32">
        <h1 className="text-red-400 sm:text-5xl font-extrabold uppercase sm:px-24">Disclaimer</h1>
        <p className="text-gray-300 py-1 sm:px-24">
        Though every effort is made to provide you accurate information on this website, there may be some inaccuracies. Should you find any, please bring it to our notice by sending an email to <Link href="mailto:info@nesticker.live" className="hover:text-red-400 font-semibold">info@nesticker.live</Link>
        </p>
        <p className="text-gray-300 py-1 sm:px-24">
        You are advised to make appropriate enquires and seek appropriate advice before acting on any advertisements that you may see on this website.  
        </p>
        <p className="text-gray-300 py-1 sm:px-24">
        If you incur any loss as a result of using this website or any content featured here, we accept no responsibility (liability) to you for this
        </p>
        <p className="text-gray-300 py-1 sm:px-24">
        Information on this website may be subject to changes to updates without specific notice. Any changes we may make to this privacy policy will be posted on this page.
        </p>
    </div>
  )
}

export default page