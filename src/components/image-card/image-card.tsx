import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ImageCardProps {
  href: string;
  src: string;
  text: string;
  alt: string;
}

export function ImageCard2({
  href,
  src,
  text,
  alt = 'No Alt Text Available',
}: ImageCardProps) {
  return (
    <Link href={href} className="group">
      <figure className="block relative max-w-sm h-full  transition-all duration-300 cursor-pointer filter  hover:grayscale">
        <Image src={src} alt={alt} fill className="rounded-lg" />
        <figcaption className="absolute px-4 text-lg text-white bottom-6">
          <p>{text}</p>
        </figcaption>
      </figure>
    </Link>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ImageCard({ src, alt, href, text }: ImageCardProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  return (
    <a href={href} className="group relative">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt={alt}
          src={src}
          fill
          onLoadingComplete={() => setIsLoading(false)}
          className={cn(
            'group-hover:opacity-75 duration-700 ease-in-out',
            isLoading
              ? 'grayscale blur-2xl scale-110'
              : 'grayscale-0 blur-0 scale-100'
          )}
        />
      </div>
      <h3 className=" mt-4 absolute px-4 text-lg text-white bottom-6">
        {text}
      </h3>
    </a>
  );
}
