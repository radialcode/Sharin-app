import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-4 py-4 flex-wrap">
        <Link href="/" className="text-[#767676] text-sm ">Termini e condizioni</Link>
        <Link className="text-[#767676] text-sm " href="/">
          Privacy Policy
        </Link>
        <Link href="/" className="text-[#767676] text-sm ">Norme sui Cookie</Link>
        <p className="text-[#767676] text-sm ">{`© ${new Date().getFullYear()} Sharin Srl`}</p>
      </div>
    </>
  );
};

export default Footer;
