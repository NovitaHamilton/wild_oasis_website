import Link from "next/link";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";

export default function SideNavigation() {
  const navLinks = [
    {
      name: "My Account",
      href: "/account",
      icon: <HomeIcon className="h-5 w-5" />,
    },
    {
      name: "Reservations",
      href: "/account/reservations",
      icon: <CalendarDaysIcon className="h-5 w-5" />,
    },
    {
      name: "Profile",
      href: "/account/profile",
      icon: <UserIcon className="h-5 w-5" />,
    },
  ];
  return (
    <nav className="border-r border-primary-900 h-full">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="flex gap-4 py-3 px-5 text-primary-100 hover:bg-primary-900 transition-colors hover:text-primary-200"
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}
