import OrangeRoundedButtonMenu from "../../Components/Buttons/OrangeRoundedButtonMenu";
import { Fragment } from "react";
import "./leaderBoard.css";

const LeaderBoard = () => {
	return (
		<Fragment>
			<div className="max-w-7xl my-20 mx-auto pt-[100px] mb-[150px] flex flex-col gap-5 md:gap-8 md:flex-row px-3 md:px-0">
				<div className="px-2 sm:px-6 lg:px-8 w-full">
					<h3 className="flex items-center justify-between mb-10">
						<span className="text-[#fff] text-xl md:text-3xl font-semibold relative before:content-[''] before:absolute before:-bottom-2 before:right-0 before:w-full before:h-1 before:rounded-lg text-underline-profile-gradient">
							Leaderboard
						</span>
					</h3>

					<div className="mb-10 flex flex-col gap-5 md:flex-row justify-between md:items-center">
						<div className="flex items-center gap-6">
							<span
								className={`text-xl cursor-pointer font-bold ${
									true ? "gradient-text" : ""
								}`}
							>
								Fixtures
							</span>
							<span
								className={`text-xl cursor-pointer font-bold ${
									false ? "gradient-text" : ""
								}`}
							>
								Weekly
							</span>
							<span
								className={`text-xl cursor-pointer font-bold ${
									false ? "gradient-text" : ""
								}`}
							>
								Monthly
							</span>
						</div>

						<div className="flex-1 flex justify-end flex-row flex-shrink-0 justify-items-end space-x-1 md:space-x-4 col-span-2">
							<OrangeRoundedButtonMenu title={"This Week"} />
							<div className="flex">
								<span className="inline-flex items-center px-2 md:px-3 rounded-l-md border-2 border-r-0 h-[30px] text-gray-light text-sm">
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="search"
										className="w-4"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<path
											fill="currentColor"
											d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
										></path>
									</svg>
								</span>
								<input
									type="text"
									name="company-website"
									id="company-website"
									className="searchPlayers-input bg-transparent focus:border-gray-light border-2 h-[30px] border-gray-light border-l-0 block w-[88px] md:w-full rounded-none rounded-r-md sm:text-sm text-light md:pb-1"
									placeholder="Search Fixtures"
								/>
							</div>
						</div>
					</div>

					<div className="overflow-x-auto overflow-y-hidden">
						<table className="min-w-full table-fixed dark:divide-gray-700">
							<thead className="bg-gray-100 dark:bg-gray-700">
								<tr>
									<th
										scope="col"
										className="py-3 px-6 text-base font-medium tracking-wider text-left text-gray-light dark:text-gray-400"
									>
										Rank
									</th>
									<th
										scope="col"
										className="py-3 px-6 text-base font-medium tracking-wider text-left text-gray-light dark:text-gray-400"
									>
										Username
									</th>
									<th
										scope="col"
										className="py-3 px-6 text-base font-medium tracking-wider text-left text-gray-light dark:text-gray-400"
									>
										Points
									</th>
									<th
										scope="col"
										className="py-3 px-6 text-base font-medium tracking-wider text-left text-gray-light dark:text-gray-400"
									>
										Rewards
									</th>
									<th scope="col" className="p-4">
										<span className="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody className="bg-transparent divide-y divide-divider-gray-light dark:bg-gray-800 dark:divide-gray-700">
								<tr className="table-row hover:bg-divider-hover-gray dark:hover:bg-divider-hover-gray">
									<td className="py-4 px-6 gradient-text font-bold text-base text-gray-900 whitespace-nowrap dark:text-white text-gradiant">
										1
									</td>
									<td className="py-4 px-6 gradient-text font-bold text-base text-gray-500 whitespace-nowrap dark:text-white text-gradiant">
										Desktop PC
									</td>
									<td className="py-4 px-6 gradient-text font-bold text-base text-gray-900 whitespace-nowrap dark:text-white text-gradiant">
										$1999
									</td>
									<td className="py-4 px-6 gradient-text font-bold text-base text-gray-900 whitespace-nowrap dark:text-white">
										$800
									</td>
									<td className="py-4 px-6 gradient-text font-bold text-base text-right whitespace-nowrap">
										{/* <button
											type="button"
											className="navbar-button mr-2 justify-center hidden py-1 px-3 border border-transparent shadow-sm text-sm rounded-lg text-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											Share
										</button> */}
										<button
											type="button"
											className="table-view-button inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-sm rounded-lg text-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											View Bids
										</button>
									</td>
								</tr>
								<tr className="table-row hover:bg-divider-hover-gray dark:hover:bg-divider-hover-gray">
									<td className="py-4 px-6 gradient-text font-bold text-base font-bold text-gray-900 whitespace-nowrap dark:text-white">
										1
									</td>
									<td className="py-4 px-6 gradient-text font-bold text-base font-bold text-gray-500 whitespace-nowrap dark:text-white">
										Desktop PC
									</td>
									<td className="py-4 px-6 gradient-text font-bold text-base font-bold text-gray-900 whitespace-nowrap dark:text-white">
										$1999
									</td>
									<td className="py-4 px-6 gradient-text font-bold text-base font-bold text-gray-900 whitespace-nowrap dark:text-white">
										$800
									</td>
									<td className="py-4 px-6 gradient-text font-bold text-base font-bold text-right whitespace-nowrap">
										{/* <button
											type="button"
											className="navbar-button mr-2 justify-center hidden py-1 px-3 border border-transparent shadow-sm text-sm rounded-lg text-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											Share
										</button> */}
										<button
											type="button"
											className="table-view-button inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-sm rounded-lg text-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											View Bids
										</button>
									</td>
								</tr>
								<tr className="table-row hover:bg-divider-hover-gray dark:hover:bg-divider-hover-gray">
									<td className="py-4 px-6 gradient-text font-bold text-base text-gray-900 whitespace-nowrap dark:text-white">
										1
									</td>
									<td className="py-4 px-6 gradient-text font-bold text-base text-gray-500 whitespace-nowrap dark:text-white">
										Desktop PC
									</td>
									<td className="py-4 px-6 gradient-text font-bold text-base text-gray-900 whitespace-nowrap dark:text-white">
										$1999
									</td>
									<td className="py-4 px-6 gradient-text font-bold text-base text-gray-900 whitespace-nowrap dark:text-white">
										$800
									</td>
									<td className="py-4 px-6 gradient-text font-bold text-base text-right whitespace-nowrap">
										{/* <button
											type="button"
											className="navbar-button mr-2 justify-center hidden py-1 px-3 border border-transparent shadow-sm text-sm rounded-lg text-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											Share
										</button> */}
										<button
											type="button"
											className="table-view-button inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-sm rounded-lg text-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											View Bids
										</button>
									</td>
								</tr>
								<tr className="table-row hover:bg-divider-hover-gray dark:hover:bg-divider-hover-gray">
									<td className="py-4 px-6 gradient-text font-bold text-base text-gray-900 whitespace-nowrap dark:text-white">
										1
									</td>
									<td className="py-4 px-6 gradient-text font-bold text-base text-gray-500 whitespace-nowrap dark:text-white">
										Desktop PC
									</td>
									<td className="py-4 px-6 gradient-text font-bold text-base text-gray-900 whitespace-nowrap dark:text-white">
										$1999
									</td>
									<td className="py-4 px-6 gradient-text font-bold text-base text-gray-900 whitespace-nowrap dark:text-white">
										$800
									</td>
									<td className="py-4 px-6 gradient-text font-bold text-base text-right whitespace-nowrap">
										{/* <button
											type="button"
											className="navbar-button mr-2 justify-center hidden py-1 px-3 border border-transparent shadow-sm text-sm rounded-lg text-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											Share
										</button> */}
										<button
											type="button"
											className="table-view-button inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-sm rounded-lg text-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											View Bids
										</button>
									</td>
								</tr>
								<tr className="table-row hover:bg-divider-hover-gray dark:hover:bg-divider-hover-gray">
									<td className="py-4 px-6 gradient-text font-bold text-base text-gray-900 whitespace-nowrap dark:text-white">
										1
									</td>
									<td className="py-4 px-6 gradient-text font-bold text-base text-gray-500 whitespace-nowrap dark:text-white">
										Desktop PC
									</td>
									<td className="py-4 px-6 gradient-text font-bold text-base text-gray-900 whitespace-nowrap dark:text-white">
										$1999
									</td>
									<td className="py-4 px-6 gradient-text font-bold text-base text-gray-900 whitespace-nowrap dark:text-white">
										$800
									</td>
									<td className="py-4 px-6 gradient-text font-bold text-base text-right whitespace-nowrap">
										{/* <button
											type="button"
											className="navbar-button mr-2 justify-center hidden py-1 px-3 border border-transparent shadow-sm text-sm rounded-lg text-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											Share
										</button> */}
										<button
											type="button"
											className="table-view-button inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-sm rounded-lg text-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											View Bids
										</button>
									</td>
								</tr>
								<tr className="table-row hover:bg-divider-hover-gray dark:hover:bg-divider-hover-gray"></tr>
							</tbody>
						</table>
					</div>

					<div className="flex justify-center items-center my-7">
						<button
							type="button"
							className="navbar-button mr-2 justify-center py-1 px-3 border border-transparent shadow-sm text-sm rounded-lg text-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Show More
						</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
export default LeaderBoard;
