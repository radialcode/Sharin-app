import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-4 py-4 flex-wrap">
        <p className="text-[#767676] text-sm ">Termini e condizioni</p>
        <Link className="text-[#767676] text-sm " href="/">
          Privacy Policy
        </Link>
        <p className="text-[#767676] text-sm ">Norme sui Cookie</p>
        <p className="text-[#767676] text-sm ">{`© ${new Date().getFullYear()} Sharin Srl`}</p>
      </div>
    </>
  );
};

export default Footer;
