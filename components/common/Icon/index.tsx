import Image from 'next/image';

interface CommonIconProps {
  iconName: string;
  width?: number;
  height?: number;
}

export default function CommonIcon({
  iconName,
  width = 18,
  height = 18,
}: CommonIconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={`/icons/${iconName}.svg`}
      alt={`${iconName}-icon`}
    />
  );
}
