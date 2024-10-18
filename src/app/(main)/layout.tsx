import Footer from "../page/footer/footer";
import NavigationPrincipal from "../page/navbar/navegacion";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <NavigationPrincipal />
          <main className="flex-grow container mx-auto p-6">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
