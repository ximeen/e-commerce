import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import Image from "next/image";
import {Check, Star} from "lucide-react"
import { Phone } from "@/components/Phone";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl: gap-x-8 lg:pt-24 xl:pt-32 lg:pb-4">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-cente lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image src="/snake-1.png" alt="snake image" className="w-full" width={200} height={200}/>
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">Sua imagem em uma capinha <span className="bg-violet-400 text-white">personalizada</span></h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture suas memórias favoritas com o <span className="font-semibold">seu proprio</span> celular.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="text-violet-400 h-5 w-5 shrink-0"/>
                    Alta qualidade, material durável
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="text-violet-400 h-5 w-5 shrink-0"/>
                    1 ano de garantia
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="text-violet-400 h-5 w-5 shrink-0"/>
                    Ultimos modelos de iphones suportados
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-1.png" alt="image for users" width={100} height={100} />
                  <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-2.png" alt="image for users" width={100} height={100} />
                  <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-3.png" alt="image for users" width={100} height={100} />
                  <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-4.jpg" alt="image for users" width={100} height={100} />
                  <Image className="inline-block h-10 w-10 rounded-full ring-2 object-cover ring-slate-100" src="/users/user-5.jpg" alt="image for users" width={100} height={100} />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5"> 
                    <Star className="h-4 w-4 text-violet-400 fill-violet-400"/>
                    <Star className="h-4 w-4 text-violet-400 fill-violet-400"/>
                    <Star className="h-4 w-4 text-violet-400 fill-violet-400"/>
                    <Star className="h-4 w-4 text-violet-400 fill-violet-400"/>
                  </div>
                <p><span className="font-semibold">1.500</span> Usuarios contentes</p>
                </div>
              </div>
            </div>
          </div>
 
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Image src="/your-image.png" alt="Image the cellphone" height={300} width={300} className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"/>
              <Image src="/line.png" alt="line" height={300} width={300} className="absolute w-20 -left-6 -bottom-6 select-none"/> 
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  )
}
