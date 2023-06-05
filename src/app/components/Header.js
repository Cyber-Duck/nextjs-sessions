import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
      <header>
        <div className="main-head">
        <Link
            href="/"
          >
            <Image
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority/>
          </Link>
          <p><Link href="/">Home</Link><Link href="/about/">About us</Link></p>
        </div>
      </header>
    )
  }