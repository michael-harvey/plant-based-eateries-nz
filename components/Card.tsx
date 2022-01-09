import Image from "next/image";

type CardProps = {
  name: string;
  description: string;
  link: string;
  logo: string;
  type: string;
};

export default function Card({
  name,
  description,
  link,
  logo,
  type,
}: CardProps) {
  return (
    <div className="text-sm leading-6">
      <figure className="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
        <blockquote className="mt-6 text-gray-700 ">
          <p>{description}</p>
          {type === "full" ? <p>Fully vegan</p> : <p>Vegan options</p>}
          <a href={link}>
            <span className="absolute inset-0"></span>
            Website link
          </a>
        </blockquote>
        <figcaption className="flex items-center space-x-4">
          {logo && (
            <Image
              src={logo}
              alt=""
              className="flex-none w-14 h-14 rounded-full object-cover"
              loading="lazy"
              width="100"
              height="100"
            />
          )}
          <div className="flex-auto">
            <div className="text-base text-gray-900 font-semibold">
              <a href={link}>
                <span className="absolute inset-0"></span>
                {name}
              </a>
            </div>
            <div className="mt-0.5">99 Manners Street, Te Aro, Wellington</div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
