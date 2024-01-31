import { IoIosRestaurant } from "react-icons/io";
import { IoLogoInstagram,IoLogoWhatsapp } from "react-icons/io";
const Navbar = () => {
  return (
    <section className='flex justify-between px-2 py-4 md:px-10 md:py-6 bg-black text-white'>
      <div>
        <h1 className='text-xl md:text-2xl font-bold font-sans flex gap-2 items-center'>Mohamad Ajaj <span><IoIosRestaurant/></span></h1>
      </div>
      <div>
        <ul className='flex gap-5'>
            <li className='flex gap-2 items-center cursor-pointer text-lg'><span><IoLogoInstagram className="text-3xl hidden md:flex"/></span>Instagram</li>
            <li className='flex gap-2 items-center cursor-pointer text-lg'><span><IoLogoWhatsapp className="text-2xl text-green-400 hidden md:flex" /></span>Whatsapp</li>
        </ul>
      </div>
    </section>
  )
}

export default Navbar
