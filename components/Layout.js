import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Layout = (props) => {
  return (
    <div className="layout">
      <Head>
        <title>Crypto Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <Link href="/">
          <Image src={"/images/img-home.jpg"} width="200px" height="200px" />
        </Link>
      </header>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
