import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes, ReactNode } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement>{
  imgSrc: string,
  dark?: boolean
}

export function Phone({imgSrc ,className, dark=false, ...props}: PhoneProps){
  return(
    <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)}{...props}>
      <Image 
        src={dark ? "/phone-template-dark-edges.png" : "/phone-template-white-edges.png"} 
        alt="Phone image"
        width={300}
        height={300}  
        className="pointer-events-none z-50 select-none"
      />

    <div className="absolute -z-10 inset-0">
      <Image 
        src={imgSrc}
        alt="Overlay image phone"
        width={300}
        height={300}
        className="object-cover"
      />
    </div>
    </div>
  )
}