import { FiMusic } from "react-icons/fi";
const Nav = () => {
    return ( 

        <div className="max-w-sm mx-auto mt-24 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="/">
                    <img className="rounded-t-lg" src="./image/bg-2.JPEG" alt="loadign-image" />
                </a>
            <div className="p-5 ">
                    <a href="/">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Order Summary</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">You can now listen to millions of songs, <br></br> audiobooks, and podcasts on any device <br></br>anywhere you like!</p>
                   {/* music section design */}
                    <div className="bg-blue-50 rounded-lg flex h-20 ">
                        <p className="rounded-full bg-blue-100 w-12 h-12 p-4 mt-4 ml-3">
                             <FiMusic />
                        </p>
                        <p className="font-bold mt-4 ml-2">
                            Annual Plan <br></br> <span className="font-medium text-gray-500">$59.99/year</span> 
                        </p>
                        <p className="mt-6 ml-28">
                            <a className="cursor-pointer font-semibold pb-6">Change</a>
                        </p>
                    </div>
                    {/* button design */}
                    <button type="submit" class="w-full text-white bg-blue-700 btnh focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-6 block mx-auto">proceed to payment</button>
                    <p className="cursor-pointer text-center mt-4">
                        CancelOrder
                    </p>
            </div>
        </div>

     );
}
 
export default Nav;
