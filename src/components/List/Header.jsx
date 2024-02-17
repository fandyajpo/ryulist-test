import Link from "next/link";

const Header = ({ title, LinkHreft, LinkTitle }) => {
  return (
    <div>
      <header className="text-center flex justify-between items-center p-2 ">
        <h2 className="text-xl font-bold text-gray-500 sm:text-3xl">{title}</h2>

        {LinkHreft && LinkTitle ? (
          <Link
            href={LinkHreft}
            className="underline hover:text-white text-gray-500 transition-all"
          >
            {LinkTitle}
          </Link>
        ) : null}
      </header>
    </div>
  );
};

export default Header;
