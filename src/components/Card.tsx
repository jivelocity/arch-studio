import { cn } from "../lib/utils";

export default function Card({
  title,
  image,
  description = "View All Projects",
  className,
  index,
}: {
  title: string;
  image: string;
  description?: string;
  className?: string;
  index?: string;
}) {
  return (
    <div className="relative group overflow-hidden cursor-pointer w-full lg:h-[560px] h-[240px]">
      {/* card */}
      <Picture image={image} alt={title} className={className} />
      {/* overlay */}
      <div
        className="
            w-full h-full
            bg-gradient-to-t from-black/70 to-transparent
            absolute
            flex justify-end flex-col p-8
            text-white
            "
      >
        <h3 className="font-bold text-4xl max-w-md leading-10">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
      <p className="absolute hidden sm:block text-white/50 font-bold text-[14rem] -right-2 top-6 leading-none">
        {index}
      </p>
    </div>
  );
}

type PictureProps = {
  image: string;
  alt: string;
  className?: string;
};

const Picture = ({ image, alt, className }: PictureProps) => {
  return (
    <picture>
      <source
        media="(max-width: 640px)"
        srcSet={`/assets/portfolio/mobile/${image}`}
      />
      <source
        media="(max-width: 1024px)"
        srcSet={`/assets/portfolio/tablet/${image}`}
      />
      <source
        media="(min-width: 1280px)"
        srcSet={`/assets/portfolio/desktop/${image}`}
      />
      <img
        src={`/assets/portfolio/desktop/${image}`}
        alt={alt}
        className={cn(
          "w-full h-full absolute max-h-[560px] object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out",
          className,
        )}
      />
    </picture>
  );
};
