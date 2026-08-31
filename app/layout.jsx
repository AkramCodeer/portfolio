import "./globals.css";
import "./ai.css";
import "./responsive.css";

export const metadata = {
  title: "AK — Full Stack Developer",
  description:
    "Portfolio of a full stack developer building useful web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
