import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Ninja List</h1>
      </div>
      <Link href="/">
        <a className="menu-bar">Home</a>
      </Link>
      <Link href="/about">
        <a className="menu-bar">About</a>
      </Link>
      <Link href="/ninjas">
        <a className="menu-bar">Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
