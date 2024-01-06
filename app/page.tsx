import { CustomerReviews, Footer, Hero, NavBar, PopularProducts, Services, Subscribe, SuperQuality } from "@/components";
import SpecialOffer from "@/components/Services";



const App = () => {
  return (
    <main className='relative'>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
    </main>
  );
};

export default App;