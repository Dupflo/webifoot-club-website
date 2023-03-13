import Image from "next/image";
import Fabbro from "../../assets/layout/fabbro.png";
export default function Footer(props: any) {
  return (
    <footer>
      <div className="sponsors flex flex-col items-center justify-center">
        <h1 className={props.arialFont}>Nos Sponsors</h1>
        <Image src={Fabbro} width="550" height="337" alt="sponsor" className="w-[212px]" />
      </div>
      <div className="flex flex-col gap-y-5 text-white">
        <div className="banner">
          <div className="flex gap-x-5">
            <props.Fb size={30} />
            <props.Insta size={30} />
          </div>
          <h1 className={props.arialFont}>Inter Montréal</h1>
        </div>
        <div className="banner">
          <div className="flex flex-col gap-y-2">
            <span className="font-bold">Contactez-nous</span>
            <span className={props.poppinsFont}>intermontreal@gmail.com</span>
            <span className={props.poppinsFont}>(1) 514 514 5140</span>
          </div>
          <Image src={props.logo} width="250" height="251" alt="logo" className="w-[125px]" />
        </div>
      </div>
    </footer>
  );
}
