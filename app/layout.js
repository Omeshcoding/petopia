import '@styles/globals.css';
import Provider from '@components/Providers';
import Navbar from '@components/Navbar';

export const metadata = {
  title: 'Pawtastic',
  description: 'Pet Care App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative h-[120vh]">
        <Provider>
          <div className="bg-black absolute bottom-0">
            <Navbar />
          </div>
          {children}
        </Provider>
      </body>
    </html>
  );
}
