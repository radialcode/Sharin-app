import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="p-5 flex justify-between items-center bg-white">
      <Link href="/">
        <Image width={164} height={32} src="/images/svg/logo.svg" alt="Logo" />
      </Link>
      <Image
        className="size-10 rounded-full"
        src="/images/png/profile-image.jpg"
        width={40}
        height={40}
        alt="Profile Image"
      />
    </div>
  );
};

export default Header;
