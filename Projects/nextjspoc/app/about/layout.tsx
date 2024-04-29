export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  })
  {
    return(
        <>
        <nav>
          <h1>
            My nav bar about
          </h1>
        </nav>
          {children}
        </>
    )
}