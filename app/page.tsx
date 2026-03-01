import Header from './components/Header';
import { Banner } from './components/Banner';
import { MovieRow } from './components/MovieRow';

export default function Home() {
  return (
    <div className='relative h-full bg-linear-[to_bottom,rgba(20,20,20,0)_0%,rgba(20,20,20,0.15)_15%,rgba(20,20,20,0.35)_29%,rgba(20,20,20,0.58)_44%,#141414_68%,#141414_100%] lg:h-[140vh]'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <Banner />
        <MovieRow sectionTitle='Featured' />
        <MovieRow sectionTitle='Top Rated' />
        <MovieRow sectionTitle='Popular' />
      </main>
    </div>
  );
}
