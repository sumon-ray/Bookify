import { Button } from "@mui/material";

const PremiumBoard = () => {
  return (
    <div className="bottom-5 absolute text-white bg-gradient-to-tl from-[#364957B3] to-[#364957] p-4 max-w-[145px] rounded-md text-center space-y-2">
      <h1 className="text-lg font-bold">Bookify pro</h1>
      <p className="text-xs">Get access to all <br />
        features on tetumbas</p>
      <Button variant="contained" size="small" className="bg-white text-black text-xs">Get pro</Button>
    </div>
  ); 
};

export default PremiumBoard;
 