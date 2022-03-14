import "./Dropdown.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

export default function Dropdown({ label, children }) {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className="w-max text-base font-bold text-[#191919] relative">
			<div
				className="bg-dropdown rounded-xl w-full relative py-2 pl-4 pr-11 cursor-pointer select-none"
				onClick={() => setShowMenu((value) => !value)}
			>
				{label}
				<span className="flex pointer-events-none absolute top-1/2 right-4 transform -translate-y-1/2">
					{!showMenu ? <FaChevronDown /> : <FaChevronUp />}
				</span>
			</div>
			<div
				className={`bg-dropdown-options text-[#fff] py-3 px-5 rounded-xl min-w-[200px] absolute top-full mt-1 right-0 z-50 transform origin-top-right transition-transform duration-[50ms] ${
					!showMenu ? "scale-0 opacity-0" : "scale-100 opacity-100"
				}`}
			>
				{children}
			</div>
		</div>
	);
}
