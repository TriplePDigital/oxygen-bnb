export const Layout = (props: LayoutProps) => {
  return <main className="container mx-auto my-2">{props.children}</main>
}

export type LayoutProps = {
  children: React.ReactNode
}
