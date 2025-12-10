"use client";

import Link from "next/link";
import { useState } from "react";
import { BiCopy, BiLink } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";
import Lightbox from "yet-another-react-lightbox";

interface CertificateItemProps {
  title: string;
  issuer: string;
  link: string;
  image: string;
}

export default function CertificateItem({ title, issuer, link, image }: CertificateItemProps) {
  const [open, setOpen] = useState(false);
  const hasPreview = Boolean(image);
  const hasLink = Boolean(link);

  const copyButtonHandler = () => {
    if (hasPreview) {
      navigator.clipboard.writeText(image)
    } else {
      navigator.clipboard.writeText(link)
    }
  }

  return (
    <div className="relative flex justify-between gap-3 items-center p-3 bg-white rounded-xl border border-b-8 border-black">
      <div className="flex items-center gap-3">
        <div className="bg-yellow-500 p-4 rounded-full inline-block text-black border">
          <GrCertificate size={32} />
        </div>
        <div className="text-black font-mono">
          <h1 className="text-lg font-bold">{title}</h1>
          <h2 className="text-sm">{issuer}</h2>
        </div>
      </div>
      <div className="text-black w-1/3  flex justify-end items-center gap-3">
        <div className={`p-2 w-10 h-10 text-center rounded-full border-2 border-black ${hasPreview ? 'hover:bg-yellow-500' : 'opacity-50'} transition-colors duration-500`}>
          <button
            type="button"
            className={`${hasPreview ? 'cursor-pointer' : 'cursor-not-allowed'}`}
            onClick={() => setOpen(true)}
          >
            <BsEye size={20} />
          </button>
        </div>
        <div className="p-2 w-10 h-10 text-center rounded-full border-2 border-black hover:bg-yellow-500 transition-colors duration-500">
          <button onClick={copyButtonHandler} className="cursor-pointer">
            <BiCopy size={20} />
          </button>
        </div>
        <div className={`p-2 w-10 h-10 text-center rounded-full border-2 border-black ${hasLink ? 'hover:bg-yellow-500' : 'opacity-50'} transition-colors duration-500`}>
          <Link href={link} target="_blank" className={`${hasLink ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
            <BiLink size={20} />
          </Link>
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        render={{ buttonPrev: () => null, buttonNext: () => null }}
        slides={[{ src: image }]}
      />
    </div>
  );
}
