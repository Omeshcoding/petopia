import '@styles/globals.css';
import Provider from '@components/Providers';

export const metadata = {
  title: 'Pawtastic',
  description: 'Pet Care App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
