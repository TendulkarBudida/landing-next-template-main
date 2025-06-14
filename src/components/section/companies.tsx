import { Container } from "../container";
import Image from "next/image";

// Sponsor logos from the public/Sponsors folder
const sponsors = [  
  { 
    id: 1, 
    name: "Wilyer Main", 
    src: "/Sponsors/wilyer-main-logo-2025.png",
    alt: "Wilyer Main Logo"
  },
  // { 
  //   id: 2, 
  //   name: "BARCO", 
  //   src: "/Sponsors/BARCO.png",
  //   alt: "BARCO Logo"
  // },
  // { 
  //   id: 3, 
  //   name: "EPSON", 
  //   src: "/Sponsors/EPSON.png",
  //   alt: "EPSON Logo"
  // },
  // { 
  //   id: 4, 
  //   name: "Extron", 
  //   src: "/Sponsors/Extron.png",
  //   alt: "Extron Logo"
  // },
  // { 
  //   id: 5, 
  //   name: "Legrand AV", 
  //   src: "/Sponsors/Legrand-AV.png",
  //   alt: "Legrand AV Logo"
  // },
  // { 
  //   id: 6, 
  //   name: "NETGEAR AV", 
  //   src: "/Sponsors/NETGEAR_AV.png",
  //   alt: "NETGEAR AV Logo"
  // },
  // { 
  //   id: 7, 
  //   name: "Exertis Almo", 
  //   src: "/Sponsors/Exertis_Almo.png",
  //   alt: "Exertis Almo Logo"
  // },  { 
  //   id: 8, 
  //   name: "Comprehensive Connectivity", 
  //   src: "/Sponsors/Comprehensive_Connectivity.jpg",
  //   alt: "Comprehensive Connectivity Logo"
  // },
  { 
    id: 9, 
    name: "Hirexbot", 
    src: "/Sponsors/Hirexbot.png",
    alt: "Hirexbot Logo"
  },
  { 
    id: 10, 
    name: "Zoapi", 
    src: "/Sponsors/Zoapi.png",
    alt: "Zoapi Logo"
  },
];

export function Companies() {
  return (
    <>
      <Container className="mt-16">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          {/* <p className="text-sm lg:text-md text-brand font-bold text-center mb-2">
            Our Sponsors
          </p> */}
          <h1 className="tracking-tight text-3xl md:text-4xl lg:text-6xl text-center font-bold mb-4 text-brand">
            Our Sponsors
          </h1>
        </div>
        <div className="flex items-center max-w-[70rem] mx-auto my-5 overflow-hidden mask-image-custom">
          <div className="flex animate-infinite-scroll [--animation-delay:15s]">            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="flex items-center mx-6 sm:mx-8 flex-shrink-0">
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  width={200}
                  height={100}
                  className="h-16 sm:h-20 md:h-24 min-h-[80px] sm:min-h-[100px] md:min-h-[120px] min-w-[120px] max-w-[200px] w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
              </div>
            ))}
            {sponsors.map((sponsor) => (
              <div key={`${sponsor.id}-duplicate-1`} className="flex items-center mx-6 sm:mx-8 flex-shrink-0">
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  width={200}
                  height={100}
                  className="h-16 sm:h-20 md:h-24 min-h-[80px] sm:min-h-[100px] md:min-h-[120px] min-w-[120px] max-w-[200px] w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
              </div>
            ))}
            {sponsors.map((sponsor) => (
              <div key={`${sponsor.id}-duplicate-2`} className="flex items-center mx-6 sm:mx-8 flex-shrink-0">
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  width={200}
                  height={100}
                  className="h-16 sm:h-20 md:h-24 min-h-[80px] sm:min-h-[100px] md:min-h-[120px] min-w-[120px] max-w-[200px] w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
