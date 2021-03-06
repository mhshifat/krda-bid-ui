import { FaCamera, FaChevronDown } from "react-icons/fa";
import "./profile.css";
import ImagePlaceholder from "../../Assets/Ellipse1071.png";
import PlayerImage from "../../Assets/image13.png";
import OrangeRoundedButtonMenu from "../../Components/Buttons/OrangeRoundedButtonMenu";
import Dropdown from "../../Components/Dropdown/Dropdown";
import { Link } from "react-router-dom";

export default function Profile() {
	return (
		<div className="max-w-7xl my-20 mx-auto pt-[100px] mb-[150px] flex flex-col gap-5 md:gap-8 md:flex-row px-3 md:px-0">
			<div className="px-2 sm:px-6 lg:px-8 w-full">
				<Dropdown label="Dashboard">
					<div className="flex flex-col">
						<Link
							className="py-2 text-xl text-[#F3F3F3] font-bold border-b-2 border-[rgba(243,243,243,0.2)] text-dropdown-active-item"
							to="/"
						>
							Home
						</Link>
						<Link
							className="py-2 text-xl text-[#F3F3F3] font-bold border-b-2 border-[rgba(243,243,243,0.2)]"
							to="/"
						>
							My Bids
						</Link>
						<Link
							className="py-2 text-xl text-[#F3F3F3] font-bold border-b-2 border-[rgba(243,243,243,0.2)]"
							to="/"
						>
							My Profile
						</Link>
						<Link className="py-2 text-xl text-[#F3F3F3] font-bold" to="/">
							Logout
						</Link>
					</div>
				</Dropdown>
				<Dropdown label="Filters">
					<div className="flex flex-col">
						<div className="">
							<h3 className="text-2xl font-bold">Week</h3>
							<div className="py-[6px] text-sm font-normal text-dropdown-active-item border-b border-[rgba(243,243,243,0.2)]">
								This Week
							</div>
							<div className="py-[6px] text-sm font-normal">All Time</div>
						</div>
						<div className="h-[2px] bg-[rgba(243,243,243,0.2)] my-4" />
						<div className="">
							<h3 className="text-2xl font-bold">Leagues</h3>
							<div className="py-[6px] text-sm font-normal text-dropdown-active-item border-b border-[rgba(243,243,243,0.2)]">
								All leagues
							</div>
							<div className="py-[6px] text-sm font-normal">La liga</div>
							<div className="py-[6px] text-sm font-normal">Premier League</div>
							<div className="py-[6px] text-sm font-normal">Serie A</div>
						</div>
						<div className="h-[2px] bg-[rgba(243,243,243,0.2)] my-4" />
						<div className="">
							<h3 className="text-2xl font-bold">Sort By</h3>
							<div className="py-[6px] text-sm font-normal text-dropdown-active-item border-b border-[rgba(243,243,243,0.2)]">
								Bid%
							</div>
							<div className="py-[6px] text-sm font-normal">Points</div>
						</div>
					</div>
				</Dropdown>
				<h3 className="flex items-center justify-between mb-10">
					<span className="text-[#fff] text-xl md:text-3xl font-semibold relative before:content-[''] before:absolute before:-bottom-2 before:right-0 before:w-full before:h-1 before:rounded-lg text-underline-profile-gradient">
						Welcome, User !
					</span>
				</h3>

				<div className="flex flex-col md:flex-row gap-5 w-full">
					<div className="bg-[rgba(71,71,71,0.6)] rounded text-[#fff] flex-1 p-6">
						<div className="flex gap-5 md:gap-14">
							<div className="w-[70px] md:w-[150px]">
								<div className="relative">
									<img
										className="w-full aspect-square rounded-full"
										src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"
										alt=""
									/>
									<label className="absolute bottom-1 right-1 cursor-pointer flex justify-center items-center w-[20px] md:w-[40px] aspect-square bg-[#FDBC19] rounded-full text-[rgba(25,25,25,0.8)] text-sm md:text-lg">
										<input type="file" hidden />
										<FaCamera />
									</label>
								</div>
							</div>
							<div className="flex-1">
								<div className="flex flex-col gap-4">
									<div className="flex gap-5 text-base md:text-2xl font-semibold">
										<span className="w-auto md:w-[220px] text-[rgba(243,243,243,0.6)]">
											Full Name:
										</span>
										<span className="flex-1">Lorem Ipsum</span>
									</div>
									<div className="flex gap-5 text-base md:text-2xl font-semibold">
										<span className="w-auto md:w-[220px] text-[rgba(243,243,243,0.6)]">
											User Name:
										</span>
										<span className="flex-1">lorem.ipsum</span>
									</div>
									<div className="flex gap-5 text-base md:text-2xl font-semibold">
										<span className="w-auto md:w-[220px] text-[rgba(243,243,243,0.6)]">
											Email:
										</span>
										<span className="flex-1">lorem.ipsum@mail.com</span>
									</div>
									<div className="flex gap-5 text-base md:text-2xl font-semibold">
										<span className="w-auto md:w-[220px] text-[rgba(243,243,243,0.6)]">
											Wallet ID:
										</span>
										<span className="flex-1">1234567890ABC</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-[rgba(71,71,71,0.6)] rounded text-[#fff] w-full md:w-[250px] p-6">
						<h4 className="text-2xl mb-6 font-semibold">My Earnings</h4>

						<div className="flex flex-col gap-3">
							<div className="flex text-base md:text-xl font-semibold">
								<span className="flex-1 text-[rgba(243,243,243,0.6)]">
									NFTs:
								</span>
								<span className="flex-1">5</span>
							</div>
							<div className="flex text-base md:text-xl font-semibold">
								<span className="flex-1 text-[rgba(243,243,243,0.6)]">
									Points:
								</span>
								<span className="flex-1">100</span>
							</div>
							<div className="flex text-base md:text-xl font-semibold">
								<span className="flex-1 text-[rgba(243,243,243,0.6)]">
									Tokens:
								</span>
								<span className="flex-1 gradient-text font-bold">$100</span>
							</div>
						</div>
					</div>
				</div>

				<h3 className="mt-20 flex items-center justify-between mb-10">
					<span className="text-[#fff] text-xl md:text-3xl font-semibold relative before:content-[''] before:absolute before:-bottom-2 before:right-0 before:w-full before:h-1 before:rounded-lg text-underline-profile-gradient">
						My Ranking
					</span>
				</h3>

				<div className="bg-[rgba(71,71,71,0.6)] p-6 rounded flex gap-10 mb-4">
					<div className="flex items-center justify-between">
						<span
							className={`text-[#fff] text-base md:text-lg font-semibold relative ${
								true
									? "before:content-[''] before:absolute before:-bottom-2 before:right-0 before:w-full before:h-1 before:rounded-lg text-underline-profile-gradient"
									: ""
							}`}
						>
							Weekly Rank
						</span>
					</div>
					<div className="flex items-center justify-between">
						<span
							className={`text-[#fff] text-base md:text-lg font-semibold relative ${
								false
									? "before:content-[''] before:absolute before:-bottom-2 before:right-0 before:w-full before:h-1 before:rounded-lg text-underline-profile-gradient"
									: ""
							}`}
						>
							Monthly Rank
						</span>
					</div>
				</div>

				<div className="bg-[rgba(71,71,71,0.6)] p-6 rounded overflow-x-auto">
					<table className="w-full border-collapse">
						<thead>
							<tr className="border-b border-[rgba(243,243,243,.2)]">
								<th className="text-xl pb-2">Rank</th>
								<th className="text-xl pb-2 w-2/3 text-left px-8">Username</th>
								<th className="text-xl pb-2">Matches</th>
								<th className="text-xl pb-2">Points</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="text-center text-xl font-bold py-5">
									<span className="gradient-text">1</span>
								</td>
								<td className="text-left text-xl font-bold py-5 px-8">
									<span className="gradient-text">John Doe</span>
								</td>
								<td className="text-center text-xl font-bold py-5">
									<span className="gradient-text">12</span>
								</td>
								<td className="text-center text-xl font-bold py-5">
									<span className="gradient-text">210</span>
								</td>
							</tr>
							<tr>
								<td className="text-center text-xl font-bold py-5">
									<span className="gradient-text">1</span>
								</td>
								<td className="text-left text-xl font-bold py-5 px-8">
									<span className="gradient-text">John Doe</span>
								</td>
								<td className="text-center text-xl font-bold py-5">
									<span className="gradient-text">12</span>
								</td>
								<td className="text-center text-xl font-bold py-5">
									<span className="gradient-text">210</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<h3 className="mt-20 flex items-center justify-between mb-10">
					<span className="text-[#fff] text-xl md:text-3xl font-semibold relative before:content-[''] before:absolute before:-bottom-2 before:right-0 before:w-full before:h-1 before:rounded-lg text-underline-profile-gradient">
						Owned NFTs: <strong className="gradient-text">5</strong>
					</span>
					<OrangeRoundedButtonMenu title={"All"} />
					{/* <div className="relative flex w-[80px] h-auto rounded-xl select-bg-gradient text-[#191919] text-base font-bold">
						<select className="appearance-none bg-transparent pl-1 pr-6 py-2 w-full">
							<option value="">All</option>
						</select>
						<FaChevronDown className="absolute top-1/2 right-4 transform -translate-y-2/4" />
					</div> */}
				</h3>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-10">
					{new Array(5).fill("").map((_, idx) => (
						<div key={idx} className="flex flex-col w-full">
							<div
								className="image-placeholder"
								style={{ backgroundImage: `url(${ImagePlaceholder})` }}
							>
								<div className="player-image">
									<img src={PlayerImage} alt="" style={{ marginTop: "30px" }} />
								</div>
							</div>
							<div className="player-information flex flex-col justify-center w-full justify-items-center">
								<div className="flex flex-row justify-between items-center">
									<div className="pt-24 pb-5 px-5 w-full">
										<div className="player-name text-xl md:text-3xl text-center w-full">
											C. Ronaldo
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}