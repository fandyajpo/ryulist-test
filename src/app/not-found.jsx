import Link from "next/link";

const NotFound = () => {
  return (
    <section className="p-20 text-center justify-center flex items-center min-h-screen max-w-xl mx-auto">
      <div className="flex justify-center items-center flex-col gap-4">
        <h1 className="text-7xl font-bold text-color-accent">NOT FOUND</h1>
        <Link
          href={"/"}
          className="text-white hover:text-color-accent text-lg underline "
        >
          Back to home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
