import BuggyButton from '@/app/components/BuggyButton';
import { getUserData } from '@/app/settings/settings';

export default async function page() {
  const userData = await getUserData();
  return (
    <div>
      <div className='relative'>
        <h1 className='text-3xl text-white'>User</h1>
        <p className='text-white'>{userData.name}</p>
        <p className='text-white'>{userData.email}</p>
      </div>

      <div className='mt-4'>
        <BuggyButton />
      </div>
    </div>
  );
}
