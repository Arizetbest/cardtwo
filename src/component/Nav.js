import { FiMusic } from "react-icons/fi";
const Nav = () => {
    return ( 

        <div className="max-w-sm mx-auto mt-24 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="/">
                    <img className="rounded-t-lg" src="./image/bg-2.JPEG" alt="loading" />
                </a>
            <div className="p-5 ">
                    <a href="/">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">Order Summary</h5>
                    </a>
                    <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">You can now listen to millions of songs, <br></br> audiobooks, and podcasts on any device <br></br>anywhere you like!</p>
                   {/* music section design */}
                    <div className="flex h-20 rounded-lg bg-blue-50 ">
                        <p className="w-12 h-12 p-4 mt-4 ml-3 bg-blue-100 rounded-full">
                             <FiMusic />
                        </p>
                        <p className="mt-4 ml-2 font-bold">
                            Annual Plan <br></br> <span className="font-medium text-gray-500">$59.99/year</span> 
                        </p>
                        <p className="mt-6 ml-28">
                            <span className="pb-6 font-semibold cursor-pointer">Change</span>
                        </p>
                    </div>
                    {/* button design */}
                    <button type="submit" class="w-full text-white bg-blue-700 btnh focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-6 block mx-auto">proceed to payment</button>
                    <p className="mt-4 text-center cursor-pointer">
                        CancelOrder
                    </p>
            </div>
        </div>

     );
}
 
export default Nav;
