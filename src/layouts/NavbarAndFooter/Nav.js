import { Menu } from "./Menu";
import { Navbar } from "./Navbar";

export const Nav = () => {
  return (
    <div className="fixed-top">
      <Navbar/>
      <Menu/>
    </div>    
  );
}