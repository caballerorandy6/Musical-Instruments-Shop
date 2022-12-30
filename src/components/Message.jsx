import React from "react";

const Message = ({ children }) => {
  return (
    <div className="text-red-600 text-center font-bold w-full p-2 text-xl">
      {children}
    </div>
  );
};

export default Message;
