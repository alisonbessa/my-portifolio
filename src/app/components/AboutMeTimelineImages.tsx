import Image from 'next/image';

type Props = {
  images?: string[];
  title: string;
};

export default function AboutMeTimelineImages({ images, title }: Props) {
  if (!images || images.length === 0) return null;
  return (
    <div className="grid grid-cols-2 gap-4 mb-2">
      {images.map((img) => (
        <div key={img} className="relative w-full aspect-square">
          <Image
            src={img}
            alt={title}
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 50vw, 200px"
          />
        </div>
      ))}
    </div>
  );
}
