import { FaShop } from "react-icons/fa6"
import { GoPerson } from "react-icons/go"

const links = [
  {
    name: "Marketplace",
    path: "/",
  },
  {
    name: "Rangkings",
    path: "/",
  },
  {
    name: "connect a wallet",
    path: "/",
  },
]

export default function Header() {
  return (
    <nav className="flex justify-between px-12 py-5">
      <div className="flex items-center gap-2">
        <FaShop className="text-secondary text-3xl" />
        <span className="text-2xl font-semibold">NFT Marketplace</span>
      </div>
      <div className="flex gap-10 items-center font-semibold">
        {links.map((link) => (
          <a key={link.name} href={link.path}>
            {link.name}
          </a>
        ))}
        <a className="bg-secondary px-4 py-3 rounded-2xl inline-flex items-center gap-1">
          <GoPerson />
          Sign Up
        </a>
      </div>
    </nav>
  )
}
