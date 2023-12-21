import React from "react";

const Header = () => {

  const handleLogout = () => {
    dispatch(
      setTokens({
        accessToken: "",
        refreshToken: "",
        idToken: "",
      })
    );
    navigate("/");
  };

  return (
    <div className="w-full bg-custom-grey p-4 flex justify-between items-center pl-10 pr-10">
      <h2>ModeStart</h2>
      <div className="flex gap-12">
        <p>About</p> 
        <p className="text-custom-red"> Logout</p>
      </div>
    </div>
  );
};

export default Header;
