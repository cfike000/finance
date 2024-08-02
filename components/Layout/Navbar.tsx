import { ModeToggle } from "../Themes/ModeToggle"
import Image from "next/image"
import Logo from "@/public/logos/logo.svg"
const Navbar = () => {
  return (
    <div className="h-12 glass w-full border-b-[1px] border-white/20 flex justify-between items-center px-2 absolute top-0 left-0">
      <div className="flex items-center select-none">
        <Image src={Logo} className="h-12 w-12" alt="Cashflow Logo" />
        <span className="font-bold">CASHFLOW</span>
      </div>
      <div className="">
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar
