export const metadata = {
  title: "Pensacola Property Network | Pensacola Real Estate",
  description:
    "Pensacola Property Network — Archie & Paul Warren with Southern Realty Gulf Coast LLC. Helping buyers find homes in Pensacola, Gulf Breeze, Navarre, and Perdido Key."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
