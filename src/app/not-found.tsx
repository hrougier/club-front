import { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'Did you get lost?',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: '404',
    description: 'Did you get lost?'
  }
}

const Custom404 = () => {
  return (
      <section>
        <main>
          <p>You're definitively lost.</p>
        </main>
      </section>
  );
};

export default Custom404;
