import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  containerClassName?: string;
}
export function LazyImage({ src, alt, className, containerClassName, ...props }: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      // A small delay to prevent flash of skeleton on cached images
      setTimeout(() => setIsLoading(false), 100);
    };
    img.onerror = () => {
      setIsLoading(false); // Stop loading on error
    };
  }, [src]);
  return (
    <div className={cn('relative w-full h-full overflow-hidden', containerClassName)}>
      {isLoading && <Skeleton className="absolute inset-0 w-full h-full" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        className={cn(
          'transition-opacity duration-500 ease-in-out',
          isLoading ? 'opacity-0' : 'opacity-100',
          className
        )}
        {...props}
      />
    </div>
  );
}