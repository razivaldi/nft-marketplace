import { IoEyeOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react";

const items = [
  "https://s3-alpha-sig.figma.com/img/a6f4/3f93/50c73503d13e1fe1a0e3277804ef1192?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WfwG7Ha3EPdBnGfQnV22T2QDnea~WD~mrP--H6kCvJvnQMT2KCphxXckercVaZl8D~dxLqltUfvRrtHiYllAFaEqGcP84y0FPoijsY3N8urtG7NrM6Ra~J3Tfux0L61OVCgRYERYg9chEqJxkgwV7ly4e1nPdNjucVSKYd-zVmEfiTZf8i9U003mS22oqitcBP4DfR18puA8gUat8U51R~WjjBElOvr6eSVAhcm3aPCxOPmqdXSNHoEqVfwFyvOYrs-ywsgZ3vGedK-~0IbBxWT3LVYO3LujjdfTa1oyMs9lC4qEKW8OJi6jM~7725sqI4hmy8fYtJdJN3hn6DAWiA__",
  "https://s3-alpha-sig.figma.com/img/a792/ddc0/c4e1193ffd08cf4918e6f696bbc8d8fe?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YUZgf9~4odVgEHOl5Q-uqcppYBoT~q1G68FrEfbtilqxHLrwvMWW9y~lAQIU12RYdNMBADQfCO14XZcTj6E7R2BYEsuoMyevH5rxagqGNOXd3dwiP7GsNtibxyoGQCkh25PfBWtTUnHBaYPKcIblVjVF8jGEWBpFRfjE3GRt0MXxn4DBOJ~sRfM1LXFMJfVXYcsuIea3Y28KRNszZvJRtXI4fJWRh5bRmoP8iLkzvKzVtH40uL-TDCouewOFMu0o9hvjcA38wsvGiqpjZya8P2A2tJ3ql8d7AQGK9wjPWrwAUhb7eaJQJ7fj5MRDGlNOI4QIpyvrFqbkWj-NH7ZU6Q__",
  "https://s3-alpha-sig.figma.com/img/e21b/d708/ab5a825e0fedd4f1daf3d715bf9577ae?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MjSIODXnD4SvvLl2Z3KtrD8gS~UKH4GvgVsg2br19BGZpidqUT0dV6RN5bKJ1gQpHufdvCBN7V6~nhBv0eNBJQ2WYFxPzRHUHtJyAiT8O1liZktV2SRu8BDlIbjL-4LslHlR-KTRx4QaA~U9aGG~JCMqQpGuqMzj67E4aHv6gvbJ7eArvIZ-kfKT5Tyk3pRZEG6LdsvVvvIgrgNoJ49vNALBp3NZkGaixWpHlXcYH6ZHH8DZN3SvIZjkza9lCeYErjWCbB~gC0HnVT-M~n1jkRZRzgFCOofiUAmxTTjKShwCrpCIY5m6fOAhXPz3OYKHy92bZEEL7hyg0wJwlOrpkQ__",
]

export default function NFTHighlights() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Change image every 10 seconds (5000 milliseconds)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [items.length]);


  return (
    <section className="w-full h-[40rem] flex flex-col gap-14 overflow-hidden relative justify-end">
      <AnimatePresence>
        {items.map((item, index) => (
          activeIndex === index &&
          <motion.div className="absolute inset-0" key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>
            <img className="w-full h-full object-cover object-center" src={item} alt="" />
          </motion.div>
        ))}
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-[#A259FF]/0 to-[#A259FF]/100"></div>
      <div className="relative z-20 py-20 px-48 flex justify-between items-end">
        <div className="flex flex-col gap-8">
          <div className="flex p-3 gap-3 rounded-full bg-[#3B3B3B] w-fit">
            <img className="w-6 h-6 rounded-full" src="https://dp12xpm6odzy2.cloudfront.net/assets/image_studio/4f28e4f359164d7a89915d914ecc245b.webp" alt="" />
            <span>Shromie</span>
          </div>
          <h2 className="capitalize text-5xl font-semibold">magic mashroom</h2>
          <button className="flex bg-white py-5 px-12 gap-4 text-black rounded-2xl w-fit font-semibold items-center">
            <IoEyeOutline className="text-secondary text-2xl" />
            See NFT
          </button>
        </div>
        <div className="rounded-2xl bg-[#3B3B3B]/50 flex flex-col p-5 font-spaceMono h-fit">
          <p>Auction ends in:</p>
          <div className="flex gap-3">
            <div className="flex flex-col text-center ">
              <span className="font-semibold text-3xl">59</span>
              <span>Hours</span>
            </div>
            <span className="font-semibold text-3xl">:</span>
            <div className="flex flex-col text-center ">
              <span className="font-semibold text-3xl">59</span>
              <span>Minutes</span>
            </div>
            <span className="font-semibold text-3xl">:</span>
            <div className="flex flex-col text-center ">
              <span className="font-semibold text-3xl">59</span>
              <span>Seconds</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
