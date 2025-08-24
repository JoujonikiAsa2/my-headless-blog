import React from "react";

export default function MenuToggle({ onToggle, isOpen, setIsOpen }) {

  const handleToggle = () => {
    setIsOpen(!isOpen);
    onToggle();
  };

  return (
    <div className="menu" onClick={handleToggle}>
      {!isOpen && <svg
        className="w-full h-full menu-icon hover:text-[#687FE5]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 16"
      >
        {/* half lines */}
        <path
          className="menu-icon-half-lines"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h8"
        />
        {/* full lines */}
        <path
          className="menu-icon-full-lines"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16"
        />
      </svg>}

      {
        isOpen && <svg xmlns="http://www.w3.org/2000/svg"
          width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>

      }
    </div>
  );
}
