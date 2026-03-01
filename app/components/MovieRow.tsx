import Image from 'next/image';

type MovieRowProps = {
  sectionTitle: string;
};

type MovieCardProps = {
  index: number;
};

const MovieCard = ({ index }: MovieCardProps) => {
  return (
    <div className='group relative h-28 min-w-50 transform bg-linear-to-t from-transparent to-black transition duration-200 ease-out hover:z-50 hover:scale-110 sm:h-36 md:h-40 md:min-w-75 lg:h-52 lg:min-w-100'>
      <Image
        src={`/item_${index}.png`}
        alt={`The Witcher ${index}`}
        fill={true}
        key={index}
        className='rounded'
      />
    </div>
  );
};

export function MovieRow({ sectionTitle }: MovieRowProps) {
  return (
    <div className='flex-col space-y-4'>
      <div className='flex'>
        <h2 className='inline-flex items-center text-2xl font-bold'>
          {sectionTitle}
        </h2>
      </div>
      <div className='scrollbar-hide -ml-8 flex space-x-4 overflow-x-scroll p-6'>
        {[1, 2, 3, 4, 5].map((index) => (
          <MovieCard key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
