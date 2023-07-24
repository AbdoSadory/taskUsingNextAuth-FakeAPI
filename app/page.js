import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          The Only <strong>Public</strong> Page
        </p>
        <p>
          Using <strong>NextAuth</strong>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By <strong>Me</strong>
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link href="/products" className={styles.card}>
          <h2>
            Products <span>-&gt;</span>
          </h2>
        </Link>
        <Link href="/products/createProduct" className={styles.card}>
          <h2>
            Add Product <span>-&gt;</span>
          </h2>
        </Link>
      </div>
    </main>
  )
}
