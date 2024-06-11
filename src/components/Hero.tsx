import { IoRocketOutline } from "react-icons/io5";

const stats = [
  {
    name: "240K+",
    desc: "Total Sale ",
  },
  {
    name: "100K+",
    desc: "Auctions",
  },
  {
    name: "240K+",
    desc: "Artists",
  },
];

export default function Hero() {
  return (
    <section className="px-48 py-20 flex gap-8">
      <div className="flex flex-col flex-1 gap-6">
        <h1 className="font-semibold text-6xl">Discover digital art & Collect NFTs</h1>
        <span className="text-xl">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</span>
        <button className="rounded-2xl bg-secondary flex w-fit px-8 py-3 font-semibold items-center gap-2">
          <IoRocketOutline />
          Get Started
        </button>
        <div className="flex gap-10">
          {stats.map(stat => (
            <div className="flex flex-col">
              <span className="text-3xl font-semibold">{stat.name}</span>
              <span>{stat.desc}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <div className="rounded-2xl overflow-hidden">
          <div className="relative object-cover max-h-96">
            <img className="w-full h-full object-cover" src="https://dp12xpm6odzy2.cloudfront.net/assets/image_studio/4f28e4f359164d7a89915d914ecc245b.webp" alt="" />
          </div>
          <div className="p-5 relative z-10 bg-[#3B3B3B]">
            <span className="font-semibold text-xl">Space Walking</span>
            <div className="flex items-center gap-3 space-y-2">
              <img className="rounded-full w-6 h-6" src="https://dp12xpm6odzy2.cloudfront.net/assets/image_studio/44ed3ae1bdf74799be4a5d99aa687c01.webp" alt="" />
              <span>Stranger</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
