import React from "react";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import { SlOptions } from "react-icons/sl";
import FeedCard from "@/components/FeedCard";

interface TwitterSideButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSideButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More",
    icon: <SlOptions />,
  },
];

export default function Home() {
  return (
    <div  >
      <div className="grid grid-cols-12 h-screen w-screen px-44">
        <div className="pt-1 col-span-3">
          <div className="text-3xl hover:bg-gray-600 p-4 transition-all h-fit w-fit rounded-full cursor-pointer">
            <BsTwitter />
          </div>
          <div className="mt-1 text-xl pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  key={item.title}
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full p-2 w-fit cursor-pointer mt-2"
                >
                  <span className="text-2xl pl-2">{item.icon}</span>
                  <span className="pr-2">{item.title}</span>
                </li>
              ))}
            </ul>
            <button className='bg-[#1d9bfa] p-2 rounded-full w-11/12 mt-4 text-md font-semibold'>Post</button>
          </div>
        </div>
        <div className="col-span-6 border-l border-r border-slate-700 h-screen overflow-scroll overflow-x-hidden no-scrollbar">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
