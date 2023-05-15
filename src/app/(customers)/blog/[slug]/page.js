export const metadata = {
    title: { title },
    description: { description },
}

export default function Post({post}) {
  return (
    <main className="main-about">
      <h1>This is the about page</h1>
      {{ content }}
    </main>
  )
}
