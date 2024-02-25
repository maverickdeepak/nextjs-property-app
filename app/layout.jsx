import '@/assets/styles/globals.css'

export const metadata = {
  title: 'Property Pulse | Find the perfect rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentals, property'
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
