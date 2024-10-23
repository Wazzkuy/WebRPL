import { backgroundAbout } from "@/public";
import { BackgroundImg } from "@/components";

export default function About() {
	return (
		<section className="w-full padding-y">
			<div className="w-full flex flex-col bg-background">
				<div className="w-full border-t border-[#21212155] pt-[20px]">
					<div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[30px]">
						<div>
							<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
								Sejarah RPL di SMKN 2 SURABAYA :
							</h3>
						</div>
						<div className="w-[48%] sm:w-full xm:w-full flex justify-between">
							<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-y-[40px]">
								<div className="flex flex-col gap-y-[20px]">
									<p className="paragraph font-NeueMontreal text-secondry">
										Pada awalnya, jurusan yang berhubungan
										dengan komputer di SMKN 2 Surabaya <br />
                                        adalah Sistem Informatika Jaringan dan Aplikasi
										(SIJA) dengan masa ajaran selama 4 tahun.
									</p>
								</div>
								<div className="flex flex-col gap-y-[20px]">
									<p className="paragraph font-NeueMontreal text-secondry">
										Namun seiring berjalannya waktu,
										<br />
										SIJA akhirnya terpecah menjadi 2 jurusan
										<br /> yaitu Teknik Komputer & jaringan (TKJ)
                                        <br /> dan Rekayasa Perangkat Lunak (RPL)
                                        <br /> yang memiliki masa ajaran selama 3 tahun saja.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="padding-x pt-[100px] lg:pt-[80px] md:pt-[60px] sm:pt-[40px] xm:pt-[40px]">
				<BackgroundImg src={backgroundAbout} />
                <p className="paragraph font-NeueMontreal text-secondry">
                    *foto para guru RPL SMKN 2 Surabaya
                </p>
			</div>
		</section>
	);
}
