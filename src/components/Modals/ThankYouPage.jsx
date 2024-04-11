import React, { useState, useEffect } from "react";

const ThankYouPage = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  //   useEffect(() => {
  //     if (isOpen) {
  //       setIsVisible(true);
  //       setTimeout(() => {
  //         setIsVisible(false);
  //         onClose();
  //       }, 5000);
  //     }
  //   }, [isOpen, onClose]);

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center w-[80] z-50">
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
          <div className="relative bg-white rounded-lg shadow-lg p-6 w-[600px]">
            {" "}
            {/* Increase width by 3 times */}
            <span className="block text-3xl font-bold mb-4 text-center">Thank You</span>{" "}
            {/* Increase font size by 3 times */}
            <div className="text-center">Your application has been submitted!</div>
          </div>
        </div>
      )}
    </>
  );
};
export default ThankYouPage;
