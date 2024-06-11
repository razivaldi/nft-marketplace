import { IoRocketOutline } from "react-icons/io5";

export default function TopCreator() {
  return (
    <section className="px-48 py-20 flex flex-col gap-14">
      <div className="flex justify-between items-end">
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold">Top Creators</h1>
          <p>Checkout Top Rated Creators on the NFT Marketplace</p>
        </div>
        <button className="flex w-fit h-fit border-secondary border-2 rounded-2xl px-8 py-3 font-semibold items-center gap-2">
          <IoRocketOutline className="text-secondary"/>
          View Rangkings
        </button>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="relative rounded-2xl bg-[#3B3B3B] flex flex-col items-center p-5 gap-4">
            <div className="absolute flex items-center justify-center left-5 h-7 w-7 rounded-full bg-[#2B2B2B] font-spaceMono text-center text-[#858584]">
              {index}
            </div>
            <img className="rounded-full w-32 h-32" src="https://dp12xpm6odzy2.cloudfront.net/assets/image_studio/b13605c3ab26478d90154026cb25b4f8.webp" alt="" />
            <div>
              <h5 className="text-md font-semibold text-center">KeepitReal</h5>
              <p className="text-[#858584]">Total Sales:
                <span className="text-white font-spaceMono ml-1">
                  36.99 ETH
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
