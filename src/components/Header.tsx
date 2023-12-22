
import { useNavigate } from "react-router-dom";


const Header = () => {

  const navigate = useNavigate();
  


  return (
    <div className="w-full bg-custom-grey p-4 flex justify-between items-center pl-10 pr-10">
      <h2 onClick={() => navigate('/dashboard')} className="cursor-pointer">ModeStart</h2>
      <div className="flex gap-12">
        <p>About</p> 
        <p className="text-custom-red"> Logout</p>
      </div>
    </div>
  );
};

export default Header;
