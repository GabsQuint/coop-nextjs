import Splash from "../components/Splash";

export const metadata = {
  title: "COOP — Games & Podcast",
  description: "COOP é um hub de conteúdo gamer: reviews, entrevistas e podcast semanal.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen text-zinc-100">
        <div aria-hidden className="coop-bg-fixed" />
        <Splash />
        {children}
      </body>
    </html>
  );
}