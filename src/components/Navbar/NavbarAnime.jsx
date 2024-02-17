import Link from "next/link";

const NavbarAnime = ({ characterAnime, overview, staffAnime }) => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-center items-end">
        <ul className="flex space-x-32">
          <li>
            <Link href={overview}>
              <span className="hover:underline">Overview</span>
            </Link>
          </li>
          <li>
            <Link href="/watch">
              <span className="hover:underline">Watch</span>
            </Link>
          </li>
          <li>
            <Link href={characterAnime}>
              <span className="hover:underline">Characters</span>
            </Link>
          </li>
          <li>
            <Link href={staffAnime}>
              <span className="hover:underline">Staff</span>
            </Link>
          </li>
          <li>
            <Link href="/stats">
              <span className="hover:underline">Stats</span>
            </Link>
          </li>
          <li>
            <Link href="/social">
              <span className="hover:underline">Social</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarAnime;
