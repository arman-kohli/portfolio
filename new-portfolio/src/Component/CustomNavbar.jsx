
import { Button, Navbar } from "flowbite-react";


 function CustomNavbar() {
  return (
   
    <Navbar className="bg-black text-white" >
      <Navbar.Brand >
        <h1>
         <img src="/Img/Ar5.png" className="mr-3 h-6 sm:h-9 rounded-full "   /> 
        </h1>
       
        <span className="self-center whitespace-nowrap  font-semibold dark:text-white text-2xl">Arman Hussain</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="text-white">
        <Navbar.Link className="text-white"  href="#" >
          Home
        </Navbar.Link>
        <Navbar.Link className="text-white" href="#">About</Navbar.Link>
        <Navbar.Link className="text-white" href="#">Services</Navbar.Link>
        <Navbar.Link className="text-white"  href="#">Gallary</Navbar.Link>
        <Navbar.Link className="text-white"    href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  
  );
}
export default CustomNavbar