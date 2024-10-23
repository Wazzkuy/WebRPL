import Image from "next/image";
import { principles1, principles2 } from "@/public";

export default function Principles() {
	return (
		<section className="w-full padding-y rounded-t-[20px] bg-background">
			<div>
				<h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry mb-[50px]">
					Apa sih bedanya RPL dan TKJ?
					<br className="sm:hidden xm:hidden" /> Yuk simak penjelasan dibawah
				</h1>
			</div>
			<div className="w-full border-t border-[#21212155]">
				<div className="w-full padding-x mt-[50px] flex justify-between gap-[30px] items-center sm:flex-col xm:flex-col">
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
						<Image
							src={principles1}
							alt="img"
							className="w-full rounded-[15px]"
						/>
						<div className="flex flex-col gap-[20px]">
							<p className="paragraph font-NeueMontreal text-secondry">
								Teknik Komputer dan Jaringan (TKJ) merupakan <br />
								jurusan yang lebih berfokus pada hardawre komputer.
								<br /> Seperti mempelajari sistem operasi komputer,
								<br /> mempelajari jaringan komputer, merakit dan toubleshooting
                                <br /> komputer, dan lain-lain. Meski begitu, jurusan TKJ tetap
                                <br /> mendapatkan pembelajaran coding, meski lebih sedikit jika
                                <br /> dibandingkan dengan jurusan RPL.
							</p>
						</div>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
						<Image
							src={principles2}
							alt="img"
							className="w-full rounded-[15px]"
						/>
						<div className="flex flex-col gap-[20px]">
							<p className="paragraph font-NeueMontreal text-secondry">
								Rekayasa Perangkat Lunak (RPL) merupakan jurusan yang
								<br /> berfokus pada pengembangan perangkat lunak atau software
                                <br /> pada komputer. Seperti pengembangan web, pengembangan aplikasi
                                <br /> mengelola database, membuat program komputer dan lainnya. Jurusan RPL
                                <br /> juga mendapat beberapa materi mengenai hardware komputer walau sangat
                                <br /> sedikit jika dibandingkan dengan jurusan TKJ.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
