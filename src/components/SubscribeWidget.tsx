export default function SubscribeWidget() {
  return (
    <section className="gap-20 px-48 py-20">
      <div className="grid grid-cols-2 bg-[#3B3B3B] rounded-xl overflow-hidden p-14 gap-20">
        <img className="rounded-xl aspect-[3/2] object-cover" src="https://dp12xpm6odzy2.cloudfront.net/assets/image_studio/cda4d732f21f4786a0bfce4bdaa95c15.webp" alt="" />
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-5xl">Join our weekly digest</h3>
          <p>Get exclusive promotions & updates straight to your inbox.</p>
          <div className="rounded-2xl bg-white flex gap-5 pl-3 w-fit mt-10">
            <input className="bg-white outline-none text-black" placeholder="Enter your email here" type="text" />
            <button className="relative z-10 bg-secondary h-full p-3 rounded-2xl px-10">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  )
}