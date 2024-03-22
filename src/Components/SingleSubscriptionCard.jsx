import React from "react";
function SingleSubscriptionCard({planName, planCost, numberOfScreens}) {
    return (


        <div class="p-8 w-full m-4 bg-white transition duration-200 hover:scale-105 rounded-xl border-t-4 border-2 border-t-blue-700">
            <div class="mb-15 text-center">
                <p class="text-xl font-medium tracking-wide">
                    {planName}
                </p>
                <div class="flex items-center mb-5 justify-center">
                    <p class="mr-2 text-5xl font-semibold text-black lg:text-6xl">
                        ${planCost}
                    </p>
                    <p class="text-lg">/ month</p>
                </div>
                
            </div>
            <ul class="mb-8 space-y-4 border-t pt-2">
                <li class="flex items-center">
                    <div class="mr-3">
                        <svg
                            class="w-4 h-4 text-teal-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeWidth="2"
                        >
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                points="6,12 10,16 18,8"
                            />
                            <circle
                                cx="12"
                                cy="12"
                                fill="none"
                                r="11"
                                stroke="currentColor"
                            />
                        </svg>
                    </div>
                    <p class="font-medium "> {numberOfScreens} Screens</p>
                </li>
                <li class="flex items-center">
                    <div class="mr-3">
                        <svg
                            class="w-4 h-4 text-teal-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeWidth="2"
                        >
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                points="6,12 10,16 18,8"
                            />
                            <circle
                                cx="12"
                                cy="12"
                                fill="none"
                                r="11"
                                stroke="currentColor"
                            />
                        </svg>
                    </div>
                    <p class="font-medium ">Perk 2</p>
                </li>
                <li class="flex items-center">
                    <div class="mr-3">
                        <svg
                            class="w-4 h-4 text-teal-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeWidth="2"
                        >
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                points="6,12 10,16 18,8"
                            />
                            <circle
                                cx="12"
                                cy="12"
                                fill="none"
                                r="11"
                                stroke="currentColor"
                            />
                        </svg>
                    </div>
                    <p class="font-medium ">Perk 3</p>
                </li>
                <li class="flex items-center">
                    <div class="mr-3">
                        <svg
                            class="w-4 h-4 text-teal-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeWidth="2"
                        >
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                points="6,12 10,16 18,8"
                            />
                            <circle
                                cx="12"
                                cy="12"
                                fill="none"
                                r="11"
                                stroke="currentColor"
                            />
                        </svg>
                    </div>
                    <p class="font-medium ">Perk 4</p>
                </li>
            </ul>
            <button
                type="submit"
                className="inline-flex items-center bg-blue-700 justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md hover:bg-blue-200 focus:shadow-outline focus:outline-none"
            >
                Get Now
            </button>
            {/* <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
            <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
        <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" /> */}
        </div>



    );
}

export default SingleSubscriptionCard;