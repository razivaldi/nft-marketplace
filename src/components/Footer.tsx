import { FaDiscord, FaInstagram, FaShop, FaTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="px-48 py-20 flex bg-[#3B3B3B] gap-20 justify-between">
      <div className="flex flex-col gap-5">
        <div className="flex gap-3">
          <FaShop className="text-secondary text-3xl" />
          <span className="text-xl font-semibold font-spaceMono">NFT Marketplace</span>
        </div>
        <p>NFT marketplace UI created with Anima for Figma.</p>
        <p>Join our community</p>
        <div className="flex gap-5 text-3xl *:cursor-pointer">
          <FaDiscord />
          <FaYoutube />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
      <div className="flex flex-col gap-5 text-nowrap">
        <h5 className="text-xl font-semibold font-spaceMono">Explore</h5>
        <a href="#">Marketplace</a>
        <a href="#">Rangkings</a>
        <a href="#">Connect a wallet</a>
      </div>

      <div className="flex flex-col gap-5">
        <h5 className="capitalize text-xl font-semibold font-spaceMono">Join Our Weekly Digest</h5>
        <p>Get exclusive promotions & updates straight to your inbox.</p>
        <div className="rounded-2xl bg-white flex gap-5 pl-3 w-fit">
          <input className="bg-white outline-none text-black" placeholder="Enter your email here" type="text" />
          <button className="relative z-10 bg-secondary h-full p-3 rounded-2xl px-10">Subscribe</button>
        </div>
      </div>
    </footer>
  )
}