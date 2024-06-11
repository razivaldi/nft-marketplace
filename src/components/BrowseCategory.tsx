import * as icon from "../assets/categories";

const categories = [
  {
    name: "Art",
    icon: icon.art,
  },
  {
    name: "Collectibles",
    icon: icon.collectibles,
  },
  {
    name: "Music",
    icon: icon.music,
  },
  {
    name: "Photography",
    icon: icon.photography,
  },
  {
    name: "Video",
    icon: icon.video,
  },
  {
    name: "Utility",
    icon: icon.utility,
  },
  {
    name: "Sports",
    icon: icon.sports,
  },
  {
    name: "Virtual Worlds",
    icon: icon.virtualWorld,
  }

]
export default function BrowseCategory() {
  return (
    <section className="px-48 py-20 flex flex-col gap-14">
      <h1 className="font-semibold text-4xl">BrowseCategory</h1>
      <div className="grid grid-cols-4 gap-5">
        {categories.map((category) => (
          <div className="rounded-2xl overflow-hidden">
            <div className="relative -z-10">
              <img className="aspect-square blur-sm" src="https://images.unsplash.com/photo-1621091211034-53136cc1eb32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
              <img className="absolute inset-0 mx-auto my-auto" src={category.icon} alt="" />
            </div>
            <div className="p-5 font-semibold bg-[#3B3B3B]">{category.name}</div>
          </div>
        ))}
      </div>
    </section>)
}
