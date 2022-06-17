import React from "react";

export default function SuccessMessage() {
  return (
    <div className="flex flex-col items-center bg-green-600/30 mt-[35vh] p-11 rounded-xl shadow-xl shadow-green-100">
      <h3>I got your message!📩</h3>
      <h3>Thank you! I will shortly get back to you!</h3>
    </div>
  );
}
