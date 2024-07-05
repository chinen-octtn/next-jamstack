export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body>
      <header className="p-4 border-b-2">Header</header>
      {children}
      <footer className="p-4 border-t-2">Footer</footer>
    </body>
  )
}
