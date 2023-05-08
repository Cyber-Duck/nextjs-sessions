export const metadata = {
  title: 'About',
  description: 'About page',
}

export default function AboutLayout({ children }) {
  return (
    <section className="about-container">
        <div className="content-area">
            {children}
        </div>
        <aside>
            Extra info
        </aside>
    </section>
  )
}
