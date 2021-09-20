import Image from "next/image";

const Logo = () => {
  return (
    <Image
      className="h-8 w-auto sm:h-12"
      src="/images/logo.png"
      alt="Logo"
      width={48}
      height={48}
    />
  );
};

export default Logo;
