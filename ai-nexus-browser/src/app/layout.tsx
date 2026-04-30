import './globals.css';

export const metadata = {
  title: 'AI NEXUS Browser',
  description: 'The World\'s First Exclusive AI Navigator'
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
