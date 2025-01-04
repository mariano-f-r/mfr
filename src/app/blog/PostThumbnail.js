import Image from "next/image"
import Link from "next/link"

export default function PostThumbnail({ metadata }) {
  let imageUrl = null;

  if ((""+metadata.image).length > 0) {
    imageUrl = metadata.image
  }

  return (
    <div className="flex max-md:flex-col bg-white bg-opacity-5 justify-between items-center mt-4 rounded-lg">
      <div className="p-8 h-full w-fit flex flex-col">
        <h2 className="font-mono text-xs">{metadata.author} on {metadata.date}</h2>
        <Link href={`blog/${metadata.slug}`} className="text-primary text-2xl font-medium">{metadata.title}</Link>
        <p className="text-xl">{metadata.desc}</p>
        <p className="text-sm font-mono mt-4">{ metadata.tags }</p>
      </div>
      {/* <div className="h-full w-full p-6 lg:self-end max-md:order-first"> */}
        <Image className="relative h-fit p-6 lg:mr-0 max-md:order-first" src={`${imageUrl}`} width={200} height={200} alt="thumbnail for blog"/>
      {/* </div> */}
    </div>
  );
}
