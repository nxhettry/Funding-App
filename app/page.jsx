import React from "react";
import Homebtn from "@/components/Homebtn";
import Convince from "@/components/Convince";

export default function Home() {
  const list = ["coin.jpeg", "gift.jpeg", "cash.jpeg"];
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
          <Homebtn text="Get Started" />
          <Homebtn text="Read More" />
        </div>
      </div>
      <div>
        <div className="bg-white opacity-75 h-[2px]"></div>
      </div>
      <div className="w-screen text-white flex flex-col items-center gap-16 py-10">
        <h1 className="text-2xl font-bold">You will be helped!</h1>
        <div className="flex items-center gap-24">
          {list.map((item, key) => {
            return (
              <Convince
                key={key}
                imageSrc={item}
                title="Someone will do it for sure"
                text="Don't worry, your friends got you!"
              />
            );
          })}
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
            <p className="text-sm font-bold">
              Try it &nbsp; ! &nbsp; You won't regret
            </p>
            <p className="text-sm font-normal text-center">
              Your little support might be a game changer for someone. By
              contributing small donations, you help others continue developing
              their projects and ideas. Each contribution, no matter how small,
              provides the resources needed to keep the platform thriving and
              innovative. Together, we can create a supportive community that
              fosters growth and development for everyone.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
