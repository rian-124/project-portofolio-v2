'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BiCopy, BiLink } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";
import useSWR from "swr";
import { useLayoutRef, useNavContext } from "~/context/LayoutRefContext";
import { getCertificatesWithLimit } from "~/service/firebase/firebaseService";
import { loadingAnimationPageOut } from "~/utils/loadingAnimation";
import CertificateItem from "../components/CertificateItem";


export default function EducationHighlight() {
  const { setCurrentNavLabel } = useNavContext();
  const router = useRouter();
  const { layoutRef } = useLayoutRef();
  const myName = ["AFRIAN", "FAHRURROZI"];
  const { data: certificates, isLoading } = useSWR('certificates', () => getCertificatesWithLimit());

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setCurrentNavLabel("certificates");
    loadingAnimationPageOut({
      layoutRef,
      onComplete: () => {
        router.push("/education/certificates");
      },
    });
  };

  return (
    <section className="md:px-10 px-5">
      <div className="text-center md:p-10 p-5 font-mono font-bold text-yellow-500">
        <h1 className="md:text-4xl text-2xl">POLITEKNIK NEGERI INDRAMAYU</h1>
        <p className="font-normal text-white">
          2022 - present | D4 Software Engineer
        </p>
      </div>
      <div className="md:flex md:flex-row flex flex-col gap-5">
        <div className="space-y-5 md:w-[45%] w-full md:pr-10">
          <div className="flex justify-between gap-5">
            <div className="md:w-[200px] w-[250px] h-[25rem] grayscale hover:grayscale-0 rounded-md hover:w-full transition-all duration-500 overflow-hidden relative">
              <Image
                src={"/image/education/education-2.jpg"}
                alt="education-1"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-col space-y-9">
              {myName[0].split("").map((name, index) => (
                <p
                  key={index}
                  className="text-3xl font-bold shadow-2xl font-mono"
                >
                  {name}
                </p>
              ))}
            </div>
            <div className="md:w-[200px] w-[250px] h-[29rem] grayscale hover:grayscale-0 rounded-md hover:w-full transition-all duration-500 relative">
              <Image
                src={"/image/education/education-1.jpg"}
                alt="education-1"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-col space-y-3">
              {myName[1].split("").map((name, index) => (
                <p key={index} className="text-3xl font-bold font-mono">
                  {name}
                </p>
              ))}
            </div>
            <div className="md:w-[200px]  w-[250px] h-[32rem] grayscale hover:grayscale-0 rounded-md hover:w-full transition-all duration-500 relative">
              <Image
                src={"/image/education/education-3.jpg"}
                alt="education-1"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <div className="space-y-5">
            { certificates?.map((certificate, index) => (
              <CertificateItem key={index} title={certificate.title} issuer={certificate.issuer} link={certificate.link} image={certificate.preview} />
            )) }
            <div className="bg-yellow-500 text-black border border-b-8 rounded-md text-3xl text-center py-2 px-5">
              <Link
                href={"/education/certificates"}
                onClick={(e) => handleClick(e)}
                className=""
              >
                Want to see more?💁‍♂️
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
