import './globals.css';

export const metadata = {
  title: 'Pawtastic',
  description: 'Pet Care App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
