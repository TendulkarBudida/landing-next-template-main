"use client";

import { CheckIcon } from "lucide-react";
import { Container } from "../container";
import { motion } from "framer-motion";

export function PricingComponent() {
  return (
    <Container>
      <motion.section
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: "easeIn", delay: 0.3 }}
        className="overflow-hidden py-16 text-primary lg:pb-32"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            <p className="text-sm lg:text-md text-brand font-bold text-center mb-2">
              Pricing
            </p>
            <h1 className="tracking-tight text-3xl md:text-4xl lg:text-6xl text-center font-bold mb-4 text-primary">
              AV <span className="text-brand glow font-serif">membership</span> plans that scale with you.
            </h1>
            <p className="text-lg text-primary-text px-4">
              Choose the perfect plan for your AV professional journey, from individual access to enterprise solutions.
            </p>
          </div>

          <div className="-m-6 grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 ">
            <div className="w-full p-6 ">
              <div className="h-full transform-gpu rounded-2xl border border-grey/20 bg-white transition duration-500 hover:-translate-y-2 shadow-lg">
                <div className="border-b border-grey/20 p-12 ">
                  <div className="pr-9">
                    <h4 className="mb-6 text-6xl tracking-tighter">Individual</h4>
                    <p className="mb-2 text-xl font-semibold tracking-tight">
                      Free
                    </p>
                    <p className="tracking-tight text-sm">
                      Perfect for AV professionals getting started with our community and basic tools.
                    </p>
                  </div>
                </div>
                <div className="p-12 pb-11">
                  <ul className="-m-1.5 mb-11 text-sm">
                    <FeatureItem>Community Access</FeatureItem>
                    <FeatureItem>Basic AV Tools</FeatureItem>
                    <FeatureItem>Equipment Reviews</FeatureItem>
                    <FeatureItem>Job Board Access</FeatureItem>
                    <FeatureItem>Email Support</FeatureItem>
                  </ul>
                  <PricingButton noCardRequired={true}>
                    Join Free
                  </PricingButton>
                </div>
              </div>
            </div>

            <div className="w-full p-6 relative">
              <div
                className="transform-gpu overflow-hidden rounded-2xl p-px transition duration-500 hover:-translate-y-2"
                style={{
                  backgroundImage:
                    "url('https://res.cloudinary.com/eldoraui/image/upload/v1734021310/advanced-gradient_un8eg6.jpg')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="h-full rounded-2xl bg-white border border-brand/30 overflow-hidden shadow-xl">
                  <div
                    className="p-12"
                    style={{
                      backgroundImage:
                        "url('https://res.cloudinary.com/eldoraui/image/upload/v1734021310/advanced-gradient_un8eg6.jpg')",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="pr-9">
                      <h4 className="mb-6 text-6xl tracking-tighter text-white">
                        Professional
                      </h4>
                      <div className="mb-2">
                        <p className="text-xl font-semibold tracking-tighter text-white">
                          $29/mo
                        </p>
                        <p className="text-sm font-semibold">(Most Popular)</p>
                      </div>
                      <p className="tracking-tight text-white text-sm">
                        Advanced features for serious AV professionals and growing teams.
                      </p>
                    </div>
                  </div>
                  <div className="p-12 pb-11">
                    <ul className="-m-1.5 mb-11 text-sm">
                      <FeatureItem>Everything in Individual</FeatureItem>
                      <FeatureItem>Advanced AV Tools</FeatureItem>
                      <FeatureItem>AVKart Marketplace Access</FeatureItem>
                      <FeatureItem>Training Programs</FeatureItem>
                      <FeatureItem>Priority Support</FeatureItem>
                    </ul>
                    <PricingButton noCardRequired={true}>
                      Start Professional Plan
                    </PricingButton>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full p-6 ">
              <div className="flex h-full transform-gpu flex-col justify-between rounded-2xl border border-grey/20 bg-white transition duration-500 hover:-translate-y-2 shadow-lg">
                <div className="border-transparent-white p-12 ">
                  <div className="pr-9">
                    <h4 className="mb-6 text-6xl tracking-tighter">Enterprise</h4>
                    <p className="mb-2 text-xl font-semibold tracking-tighter">
                      Custom Pricing
                    </p>
                    <p className="tracking-tight text-sm">
                      Tailored solutions for large AV companies, educational institutions, and enterprise clients.
                    </p>
                  </div>
                </div>
                <div className="p-12 pb-11">
                  <PricingButton>Contact Sales</PricingButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </Container>
  );
}

const FeatureItem = ({ children }: { children: string }) => {
  return (
    <li className="flex items-center py-1.5">
      <CheckIcon className="mr-3 size-3 text-green-400" />
      <span className="font-medium tracking-tight text-primary-text">
        {children}
      </span>
    </li>
  );
};

const PricingButton = ({
  children,
  href,

  noCardRequired,
}: {
  children: string;
  href?: string;
  noCardRequired?: boolean;
}) => {
  return (
    <div className="">
      <a
        className="inline-block w-full rounded-lg border border-brand bg-brand text-white px-5 py-4 text-center font-semibold tracking-tight transition duration-200 hover:scale-105 hover:bg-blue-600 mb-4 text-sm"
        href={href ?? ""}
      >
        {children}
      </a>

      <p className="text-center">
        {noCardRequired ? (
          <span className="text-sm tracking-tight text-primary-text ">
            No credit card required
          </span>
        ) : (
          <span className="text-sm tracking-tight text-primary-text">
            Contact for more details
          </span>
        )}
      </p>
    </div>
  );
};
