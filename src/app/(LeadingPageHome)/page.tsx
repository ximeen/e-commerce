import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import Image from "next/image";
import {ArrowRight, Check, Star} from "lucide-react"
import { Phone } from "@/components/Phone";
import { Icons } from "@/components/Icons";
import { Reviews } from "@/components/Reviews";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

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
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">Sua imagem em uma case <span className="bg-violet-600 text-white"> personalizada </span></h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Leve suas memórias favoritas no <span className="font-semibold">seu proprio</span> celular.
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
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400"/>
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400"/>
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400"/>
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400"/>
                  </div>
                <p><span className="font-semibold">1.500</span> Usuarios contentes</p>
                </div>
              </div>
            </div>
          </div>
 
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Image src="/your-image.png" alt="Image the cellphone" height={300} width={300} className="absolute w-40 lg:w-52 left-60 -top-20 select-none hidden sm:block lg:hidden xl:block"/>
              <Image src="/line.png" alt="line" height={300} width={300} className="absolute w-20 -left-6 -bottom-6 select-none"/> 
              <Phone className="w-64" imgSrc="/testimonials/3.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tighter text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900 ">O que nossos <span className="relative px-2">clientes <Icons.undeline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6  text-violet-400"/> </span> dizem</h2>
            <Image src={"/snake-2.png"} alt="cobra" width={200} height={200} className="w-24 order-0 lg:order-2"/>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2 ">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400"/>
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400"/>
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400"/>
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400"/>
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400"/>
              </div>
              <div className="text-lg leading-8">
                <p>&quot;A capinha é bem durável e recebi elogios pelo design. Tenho a capinha a uns 2 meses e a<span className="bg-slate-800 text-white"> imagem esta bem limpa</span> outras com 1 mês já fica com uma imagem apagada ou amarelada, amei esta capinha ❤️ &quot;</p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  src={"/users/user-1.png"}
                  alt="Image the one user" 
                  width={200} 
                  height={200} 
                  className="rounded-full h-12 w-12 object-cover" />
                  <div className="flex flex-col">
                    <p className="font-semibold">Jonatan</p>
                    <div className="flex gap-1.5 items-center text-zinc-600">
                      <Check className="h-4 w-4 stoke-[3px] text-green-400"/>
                      <p>Compra verificada</p>
                    </div>
                  </div>
              </div>
            </div>

            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2 ">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400"/>
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400"/>
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400"/>
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400"/>
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400"/>
              </div>
              <div className="text-lg leading-8">
                <p>&quot;Estou apaixonada por essa capinha! <span className="bg-slate-800 text-white">A qualidade do material é visível e a durabilidade é ótima</span>. Já recomendei para várias amigas. Com certeza a melhor capinha personalizada que já comprei! &quot;</p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  src={"/users/user-2.png"}
                  alt="Image the one user" 
                  width={200} 
                  height={200} 
                  className="rounded-full h-12 w-12 object-cover" />
                  <div className="flex flex-col">
                    <p className="font-semibold">Gabi</p>
                    <div className="flex gap-1.5 items-center text-zinc-600">
                      <Check className="h-4 w-4 stoke-[3px] text-green-400"/>
                      <p>Compra verificada</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <div className="pt-16">
          <Reviews />
        </div>
      </section>
      
      <section>
      <MaxWidthWrapper className="py-24">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="order-1 mt-2 tracking-tighter text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900 ">Faça o upload da sua foto e pegue sua <span className="relative px-2 bg-violet-600 text-white">case</span> agora!!</h2>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
            <Image 
            className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
            src={"/arrow.png"}
            alt=""
            width={150}
            height={150}
            />
            <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10">
              <Image 
                className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full "
                src={"/horse.jpg"}
                alt=""
                width={400}
                height={400}
              />
            </div>

            <Phone className="w-60" imgSrc="/horse_phone.jpg"/>
          </div>
        </div>

        <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
          <li className="w-fit">
            <Check className="h-5 w-5 text-green-600 inline mr-1.5"/>
            Silicone de alta qualidade
          </li>
          <li className="w-fit">
            <Check className="h-5 w-5 text-green-600 inline mr-1.5"/>
            Revestimento resistente a arranhões e impressões digitais
          </li>
          <li className="w-fit">
            <Check className="h-5 w-5 text-green-600 inline mr-1.5"/>
            Compatível com carregamento por indução
          </li>
          <li className="w-fit">
            <Check className="h-5 w-5 text-green-600 inline mr-1.5"/>
            1 ano de garantia da impressão
          </li>
          <div className="flex justify-center">
            <Link className={buttonVariants({size: "lg", className: "mx-auto mt-8"})} href="/configure/upload" >
              Crie sua case agora <ArrowRight className="h-4 w-4 ml-1.5"/>
            </Link>
          </div>
        </ul>
      </MaxWidthWrapper>
      </section>
    </div>
  )
}
