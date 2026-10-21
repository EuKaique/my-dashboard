import Image, { StaticImageData } from "next/image";

type AvatarProps = {
  name: string;
  imageUrl: StaticImageData;
};

export const Avatar = ({ name, imageUrl }: AvatarProps) => (
  <div className="menu-avatar" title={name}>
    <div className="menu-avatar-image">
      <Image src={imageUrl} alt="" width={38} height={38} />
    </div>
    <div className="menu-avatar-details">
      <p>{name}</p>
      <span>Personal account</span>
    </div>
  </div>
);
