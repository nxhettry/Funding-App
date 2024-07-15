import React from "react";

export default function Home() {
  return (
    <>
      <div className="min-h-[55vh] flex gap-4 justify-center items-center flex-col text-white">
        <div className="text-3xl flex justify-center items-center font-semibold ">
          Help me gather funds for my project{" "}
          <span className="flex justify-center items-start">
            <img src="donate.jpeg" alt="gif" className="h-20" />
          </span>
        </div>

        <p>
          A crowdfunding platform for newbie developers. Ask your friends and
          other developers for help. Start now!
        </p>
        <div className="flex gap-4">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Start now
            </span>
          </button>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Read more
            </span>
          </button>
        </div>
      </div>
      <div>
        <div className="bg-white opacity-75 h-[2px]"></div>
      </div>
      <div className="w-screen text-white flex flex-col items-center gap-16 py-10">
        <h1 className="text-2xl font-bold">You will be helped!</h1>
        <div className="flex items-center gap-24">
          <div className="flex flex-col gap-6 items-center">
            <img src="coin.jpeg" alt="rotating_coin" className="h-20" />
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm font-bold">Someone will do it for sure</p>
              <p className="text-sm font-medium">
                Don't worry, your friends got you!
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <img src="gift.jpeg" alt="rotating_coin" className="h-20" />
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm font-bold">Someone will do it for sure</p>
              <p className="text-sm font-medium">
                Don't worry, your friends got you!
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <img src="cash.jpeg" alt="rotating_coin" className="h-20" />
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm font-bold">Someone will do it for sure</p>
              <p className="text-sm font-medium">
                Don't worry, your friends got you!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white opacity-75 h-[2px]"></div>
      </div>
      //From here
      <div className="w-screen text-white flex flex-col items-center gap-16 py-10">
        <h1 className="text-2xl font-bold">Why should you donate?</h1>
        <div className="flex flex-col gap-6 items-center">
            <img src="donate.png" alt="rotating_coin" className="h-96" />
            <div className="w-2/5 flex flex-col gap-4 items-center justify-center">
              <p className="text-sm font-bold">Try it &nbsp;  ! &nbsp;  You won't regret</p>
              <p className="text-sm font-normal text-center">Your little support might be a game changer for someone. By contributing small donations, you help others continue developing their projects and ideas. Each contribution, no matter how small, provides the resources needed to keep the platform thriving and innovative. Together, we can create a supportive community that fosters growth and development for everyone.</p>
            </div>
          </div>
      </div>
    </>
  );
}
