import './globals.css';
import Form from "@/components/Form";

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet preload" as="style" href="https://unpkg.com/open-props"></link>
      </head>
      <body className="bg-slate-950 text-gray-300">
          <Form />
          <div className="root">{children}</div>
      </body>
    </html>
  );
}
