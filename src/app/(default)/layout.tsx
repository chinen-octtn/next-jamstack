export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body>
      <header>Header</header>
      {children}
      <footer>Footer</footer>
    </body>
  )
}
