import Button from "@/components/atom/button";
import { FeatureCard } from "@/components/atom/feature-card";
import { JoinCard } from "@/components/molecule/join-card";
import { PricingCard } from "@/components/molecule/pricing-card";
import TestimonialCard from "@/components/molecule/testimonial-card";
import { FadeInItem, FadeInWrapper } from "@/components/motion/fade-in";
import { FadeUpItem, FadeUpWrapper } from "@/components/motion/fade-up";

import { features_constant } from "@/constant/features";
import { pricing_plans } from "@/constant/pricing-plan";
import { testimonials_constant } from "@/constant/testimonials";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
	return (
		<>
			<FadeUpWrapper>
				<section className="min-h-[75vh] flex justify-center items-center">
					<div className="max-w-4xl mx-auto grid justify-center items-center text-center pt-20">
						<FadeUpItem>
							<h1 className="text-5xl md:text-6xl font-light my-5">
								Pendekkan Link dengan <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Gaya di lisync.click</span>
							</h1>
						</FadeUpItem>
						<FadeUpItem>
							<p className="text-lg md:text-xl font-light mb-12 leading-relaxed">Ubah link panjang dan membingungkan menjadi URL pendek yang profesional dan mudah diingat bersama lisync.click. Dapatkan tautan merek yang meningkatkan klik dan memberikan analitik bermanfaat.</p>
						</FadeUpItem>
						<FadeUpItem>
							<div className="flex justify-center flex-col sm:flex-row w-full items-center gap-4 mb-16">
								<Link href={"/signin"} className="w-full sm:w-fit">
									<Button className="py-4 px-5 w-full sm:w-fit" color="primary" iconRight={<FaArrowRightLong />}>
										Mulai Gratis Sekarang
									</Button>
								</Link>
								<Button className="py-4 px-5 w-full sm:w-fit" color="outline">
									Lihat Demo
								</Button>
							</div>
						</FadeUpItem>
					</div>
				</section>
			</FadeUpWrapper>
			<section className="py-32" id="features">
				<FadeUpWrapper>
					<div className="grid justify-center items-center text-center mb-20">
						<FadeUpItem>
							<h2 className="text-5xl font-light mb-6">
								Fitur Canggih di <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">lisync.click</span>
							</h2>
						</FadeUpItem>
						<FadeUpItem>
							<p className="text-xl font-light max-w-3xl mx-auto">Semua yang Anda butuhkan untuk membuat, mengelola, dan menganalisis link pendek Anda menggunakan alat profesional dari lisync</p>
						</FadeUpItem>
					</div>
				</FadeUpWrapper>

				<FadeInWrapper>
					<div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
						{features_constant.map((feature, index) => (
							<FadeInItem key={index}>
								<FeatureCard {...feature} />
							</FadeInItem>
						))}
					</div>
				</FadeInWrapper>
			</section>

			<section className="text-center py-32" id="pricing">
				<FadeInWrapper>
					<div className="mb-20">
						<FadeInItem>
							<h1 className="text-4xl md:text-5xl font-semibold mb-4">Harga Paket Lisync</h1>
						</FadeInItem>
						<FadeInItem>
							<p className="text-lg md:text-xl font-light text-gray-600">Pilih paket sesuai kebutuhan Anda. Upgrade atau downgrade kapan saja tanpa batasan.</p>
						</FadeInItem>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
						{pricing_plans.map((plan) => (
							<FadeInItem key={plan.id}>
								<PricingCard title={plan.title} price={`Rp${plan.price.toLocaleString("id-ID")}`} description={plan.description} features={plan.features} buttonLabel={plan.isPremium ? "Mulai Paket Premium" : "Mulai Gratis"} isPopular={plan.isPopular} isPremium={plan.isPremium} limits={plan.limits} />
							</FadeInItem>
						))}
					</div>
				</FadeInWrapper>
			</section>

			<section className="py-32" id="review">
				<FadeInWrapper>
					<div className="text-center mb-20 max-w-3xl mx-auto">
						<FadeInItem>
							<h2 className="text-4xl md:text-5xl font-semibold mb-4">Dipercaya Ribuan Pengguna</h2>
						</FadeInItem>
						<FadeInItem>
							<p className="text-lg md:text-xl font-light text-gray-600">Lihat apa kata pelanggan tentang Lisync.click sebagai layanan pemendek tautan mereka.</p>
						</FadeInItem>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{testimonials_constant.map((t, idx) => (
							<FadeInItem key={idx}>
								<TestimonialCard testimonial={t} />
							</FadeInItem>
						))}
					</div>
				</FadeInWrapper>
			</section>

			<JoinCard />
		</>
	);
}
