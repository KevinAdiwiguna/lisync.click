"use client";
import Button from "../atom/button";
import { FadeInWrapper, FadeInItem } from "@/components/motion/fade-in";

export const JoinCard = () => {
	return (
		<section className="py-32">
			<FadeInWrapper>
				<div className="max-w-4xl mx-auto text-center">
					<FadeInItem>
						<div className="bg-gradient-to-r from-primary/5 to-secondary/5 backdrop-blur-xl rounded-box p-12 border border-base-300 shadow-xl">
							<h2 className="text-4xl md:text-5xl font-semibold mb-6">Mulai Gunakan Lisync Sekarang!</h2>
							<p className="text-lg md:text-xl font-light mb-8 text-gray-600">Bergabunglah bersama ribuan pengguna lainnya yang mempercayai Lisync untuk membuat tautan pendek, QR Code, dan analitik profesional.</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Button color="secondary">Daftar Gratis</Button>
							</div>
						</div>
					</FadeInItem>
				</div>
			</FadeInWrapper>
		</section>
	);
};
