import { getAppSettings } from './settings';

export default async function Settings() {
  const { theme, language } = await getAppSettings();
  return (
    <div className='relative'>
      <h1 className='text-3xl text-white'>Settings</h1>
      <div className='border border-dashed border-red-500 p-4'>
        <p className='text-white'>Theme: {theme}</p>
        <p className='text-white'>Language: {language}</p>
      </div>
    </div>
  );
}
