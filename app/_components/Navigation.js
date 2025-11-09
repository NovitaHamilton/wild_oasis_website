import Link from "next/link";

const linkStyles = "hover:text-accent-400"

export default function Navigation() {
    return (
        <nav className="relative z-10 text-xl">
        <ul className="flex gap-16 items-center">
            <li><Link href="/" className={linkStyles}>Home</Link></li>
            <li><Link href="/about" className={linkStyles}>About</Link></li>
            <li><Link href="/cabins" className={linkStyles}>Cabins</Link></li>
            <li><Link href="/account" className={linkStyles}>My Account</Link></li>
        </ul>
        </nav>
    );
}

