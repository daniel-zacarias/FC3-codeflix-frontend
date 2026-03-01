import BuggyButton from '@/app/components/BuggyButton';
import { getUserById } from '@/app/settings/settings';
import { notFound } from 'next/navigation';

export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const { name, username, website } = await getUserById(id);
  if (!name) {
    notFound();
  }
  return (
    <div>
      <div className='relative'>
        <h1 className='text-3xl text-white'>User {id}</h1>
        <div className='border border-dashed border-red-500 p-4'>
          <p className='text-white'>Name: {name}</p>
          <p className='text-white'>ID: {id}</p>
          <p className='text-white'>Username: {username}</p>
          <p className='text-white'>Website: {website}</p>
        </div>
      </div>

      <div className='mt-4'>
        <BuggyButton />
      </div>
    </div>
  );
}
