import { ArrowUpRightIcon } from "@heroicons/react/24/solid"

const Button = ({text}) => {
  return (
    <button className="text-red-400 py-2 w-40">
        <span className="flex text-lg font-medium">{text} 
        <ArrowUpRightIcon className="arrowBtn h-5 w-5 ps-1 mt-1"/></span>
    </button>
  )
}

export default Button