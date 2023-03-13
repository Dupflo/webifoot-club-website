import Image from "next/image";
import Link from "next/link";

export default function Navigation(props: any) {
  return (
    <>
      <nav className={props.openFont}>
        <div className="navs">
          <Link href="#" className="underline underline-offset-8">
            Accueil
          </Link>
          <Link href="#">Histoire</Link>
          <Link href="#">Staff</Link>
        </div>
        <div>
          <Image src={props.logo} width="250" height="251" alt="logo" className="w-[90px]" />
        </div>
        <div className="navs">
          <Link href="#">Actualités</Link>
          <Link href="#">Contact</Link>
          <div className="flex gap-x-5">
            <props.Fb size={20} />
            <props.Insta size={20} />
          </div>
        </div>
      </nav>
    </>
  );
}
