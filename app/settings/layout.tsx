export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <h1 className='text-3xl text-white'>Settings</h1>
      </div>
      <div className='mb-4 border border-dashed border-red-500 p-4'>
        {children}
      </div>
    </div>
  );
}
