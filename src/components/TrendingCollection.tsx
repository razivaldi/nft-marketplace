

const collections = [
  {
    id: 1,
    name: "Space Walking",
    artist: "Stranger",
    image: "https://dp12xpm6odzy2.cloudfront.net/assets/image_studio/4f28e4f359164d7a89915d914ecc245b.webp",
    images: [
      "https://dp12xpm6odzy2.cloudfront.net/assets/image_studio/8db051c175eb41409095566eb1760602.webp",
      "https://dp12xpm6odzy2.cloudfront.net/assets/image_studio/79165213120c41279a77849f51223a12.webp",
      "https://dp12xpm6odzy2.cloudfront.net/assets/image_studio/8e5100069c614cad9ac7921038063994.webp"
    ]
  },
  {
    id: 2,
    name: "Space Walking",
    artist: "Stranger",
    image: "https://dp12xpm6odzy2.cloudfront.net/assets/image_studio/4f28e4f359164d7a89915d914ecc245b.webp",
    images: [
      "https://dp12xpm6odzy2.cloudfront.net/assets/image_studio/8db051c175eb41409095566eb1760602.webp",
      "https://dp12xpm6odzy2.cloudfront.net/assets/image_studio/79165213120c41279a77849f51223a12.webp",
      "https://dp12xpm6odzy2.cloudfront.net/assets/image_studio/8e5100069c614cad9ac7921038063994.webp"
    ]
  },
  {
    id: 3,
    name: "Space Walking",
    artist: "Stranger",
    image: "https://dp12xpm6odzy2.cloudfront.net/assets/image_studio/4f28e4f359164d7a89915d914ecc245b.webp",
    images: [
      "https://dp12xpm6odzy2.cloudfront.net/assets/image_studio/8db051c175eb41409095566eb1760602.webp",
      "https://dp12xpm6odzy2.cloudfront.net/assets/image_studio/79165213120c41279a77849f51223a12.webp",
      "https://dp12xpm6odzy2.cloudfront.net/assets/image_studio/8e5100069c614cad9ac7921038063994.webp"
    ]
  },
]
export default function TrendingCollection() {
  return (
    <section className="px-48 py-20 flex flex-col gap-14">
      <div>
        <h1 className="text-4xl font-semibold">Trending Collection</h1>
        <p>Checkout our weekly updated trending collection.</p>
      </div>

      <div className="flex gap-5">
        {collections.map(collection => (
          <div key={collection.id} className="space-y-3">
            <div className="rounded-2xl overflow-hidden">
              <img src={collection.images[0]} alt="" />
            </div>
            <div className="flex *:w-24 *:h-24 *:rounded-2xl justify-between">
              <img src={collection.images[1]} alt="" />
              <img src={collection.images[2]} alt="" />
              <div className="bg-secondary flex items-center justify-center text-xl font-spaceMono font-semibold">1024+</div>
            </div>
            <div>
              <p className="font-semibold text-xl">{collection.name}</p>
              <div className="flex gap-4">
                <img className="rounded-full w-6 h-6" src={collection.image} alt="" />
                <span>{collection.artist}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
