import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  return (
    <nav className="py-12 font-['Sora']">
      <div className="flex">
        <div className="w-3/12 text-xl font-bold tracking-wider">Rizal</div>
        <div className="w-9/12">
          <ul className="flex space-x-16 justify-end font-semibold text-white/60">
            <Link href="/">
              <li className="hover:text-white">Home</li>
            </Link>
            <Link href="mentorship">
              <li className="hover:text-white">Mentorship</li>
            </Link>
            <Link href="portofolio">
              <li className="hover:text-white">Portofolio</li>
            </Link>
            <Link href="snippet">
              <li className="hover:text-white">Snippet</li>
            </Link>
          </ul>
        </div>
      </div>

      <hr className="mt-10 border-white/10" />
    </nav>
  );
}
