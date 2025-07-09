import { LuStar } from "react-icons/lu";
import Image from "next/image";
import  { TestimonialProps } from "@/constant/testimonials";

type Props = {
  testimonial: TestimonialProps;
};

export default function TestimonialCard({ testimonial }: Props) {
  const { name, role, company, content, avatar } = testimonial;

  return (
    <div className="bg-base-100/75 backdrop-blur-xl rounded-box p-8 border border-base-300 shadow-lg shadow-black/5">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, idx) => (
          <LuStar
            key={idx}
            className="h-5 w-5 text-yellow-400 fill-current"
          />
        ))}
      </div>

      <p className="text-base-content/80 font-light mb-6 leading-relaxed">
        “{content}”
      </p>

      <div className="flex items-center gap-3">
        {avatar ? (
          <Image
            src={avatar}
            alt={name}
            width={40}
            height={40}
            className="rounded-full object-cover w-10 h-10"
          />
        ) : (
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
            {name
              .split(" ")
              .map((n: string) => n[0])
              .join("")
              .toUpperCase()}
          </div>
        )}
        <div>
          <p className="font-medium text-base-content/70">{name}</p>
          <p className="text-sm text-base-content/60">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
}
