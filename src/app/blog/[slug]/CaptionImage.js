import Image from "next/image";

export default function CaptionImage({ image, caption, w, h, float }) {
  if (float == "left") {
    return (
      <div className="float-left clear-right m-4 border rounded-lg overflow-clip border-foreground">
        <Image src={image} alt={caption} width={w} height={h} />
        <p>{caption}</p>
      </div>
    );
  }

  if (float == "right") {
    return (
      <div className="float-right clear-left m-4 border rounded-lg overflow-clip border-foreground">
        <Image src={image} alt={caption} width={w} height={h} />
        <p>{caption}</p>
      </div>
    );
  }

  return (
    <div className="w-full clear-both items-center m-4">
      <Image src={image} alt={caption} width={w} height={h} />
      <p>{caption}</p>
    </div>
  );
}
