"use client";
import Link from "next/link";
import Image from "next/image";
import { ochiside } from "@/public";
import { Eyes } from "@/components";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
	return (
		<section className="w-full min-h-screen">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x">
						<div>
							<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								Tentang <br />
								<div className="flex items-center gap-[5px]">
									<motion.span
										initial={{ width: 0 }}
										animate={{ width: "auto" }}
										transition={{
											ease: [0.86, 0, 0.07, 0.995],
											duration: 1,
											delay: 1.5,
										}}>
										<Image
											width={120}
											height={50}
											src={ochiside}
											alt="img"
											className="w-auto h-[95px] lg:w-auto lg:h-auto md:w-[100px] md:h-[63px] sm:w-[74px] sm:h-[45px] xm:w-[64px] xm:h-[40px] object-cover xl:mt-[15px] mt-[10px] rounded-[10px]"
										/>
									</motion.span>
									<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
										JURUSAN RPL
									</h1>
								</div>
							</h1>
						</div>
					</div>
					<div className="w-full border-t border-[#21212155] pt-[20px]">
						<div className="w-full flex justify-between  padding-x sm:flex-col xm:flex-col gap-[20px]">
							<div className="w-[10%] sm:w-full xm:w-full">
								<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
									Apa Itu Rekayasa Perangkat Lunak ?
								</h3>
							</div>

							<div className="w-[48%] flex justify-between sm:w-full xm:w-full sm:flex-col xm:flex-col gap-[20px]">
								<div className="w-[50%] flex flex-col gap-y-[40px] sm:w-full xm:w-full">
									<div className="flex flex-col gap-y-[20px]">
										<p className="paragraph font-NeueMontreal text-secondry">
                                        ilmu yang mempelajari pengembangan perangkat lunak, mulai dari pembuatan, pemeliharaan, hingga manajemen organisasi dan kualitasnya.
										</p>
									</div>
                                    <div className="w-[50%] flex flex-col gap-y-[40px] sm:w-full xm:w-full">
									<div className="flex flex-col gap-y-[20px]">
										<p className="paragraph font-NeueMontreal text-secondry">

										</p>
									</div>
									<div className="flex flex-col gap-y-[20px]">
									</div>
								</div>
									<div className="flex flex-col gap-y-[20px]">
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="padding-y"
				data-scroll
				data-scroll-speed="-.1">
				<Eyes className="w-[300px] h-[300px] md:w-[200px] md:h-[200px] sm:w-[150px] sm:h-[150px] xm:w-[150px] xm:h-[150px] sm:flex-col xm:flex-col" />
			</div>
			<div className="padding-x">
				<h1 className="sub-heading font-medium font-NeueMontreal text-secondry">
					Sejarah Rekayasa Perangkat Lunak
					<br className="sm:hidden xm:hidden" />
				</h1>
			</div>
		</section>
	);
}
