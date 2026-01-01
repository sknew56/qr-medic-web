export const metadata = {
  title: "QR Medic",
  description: "Identificación médica digital"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
