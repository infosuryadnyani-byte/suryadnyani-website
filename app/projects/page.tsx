import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { AnimatedCounter } from "@/components/utility/animated-counter";
import Image from "next/image";

export default function Projects() {

  const projects = [
    {
      image: "/projects/rooptopsolar.jpeg",
      title: "Residential Rooftop Solar Installation",
      location: "Mumbai, Maharashtra",
      capacity: "5 kWp",
    },
    {
      image: "/projects/commericalsolar.jpg",
      title: "Commercial Solar Power System",
      location: "Navi Mumbai, Maharashtra",
      capacity: "50 kWp",
    },
    {
      image: "/projects/industrial.jpeg",
      title: "Industrial Solar Installation",
      location: "Pune, Maharashtra",
      capacity: "200 kWp",
    },
    {
      image: "/projects/hospital.png",
      title: "Hospital Solar Project",
      location: "Thane, Maharashtra",
      capacity: "75 kWp",
    },
    {
      image: "/projects/school-solar.jpg",
      title: "School Solar Installation",
      location: "Belapur, Maharashtra",
      capacity: "30 kWp",
    },
    {
      image: "/projects/corporate.jpeg",
      title: "Corporate Office Solar System",
      location: "Panvel, Maharashtra",
      capacity: "100 kWp",
    },
  ];

  const impacts = [
    {
      value: 40,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      value: 975,
      suffix: " kWp",
      label: "Capacity Installed",
    },
    {
      value: 800,
      suffix: "+",
      label: "Happy Customers",
    },
  ];

  const environmental = [
    {
      value: "975+",
      unit: "Tons",
      label: "CO2 Emissions Avoided",
    },
    {
      value: "250M+",
      unit: "kWh",
      label: "Clean Energy Generated",
    },
    {
      value: "₹500Cr+",
      unit: "Saved",
      label: "Customer Savings",
    },
  ];

  const timeline = [
    {
      year: "2009",
      title: "Company Founded",
      description:
        "Suryadnyani Renewable Energy was established with a mission to promote solar energy adoption.",
    },
    {
      year: "2015",
      title: "100+ Installations",
      description:
        "Achieved milestone of successfully completing over 100 solar installations.",
    },
    {
      year: "2018",
      title: "10 MW Capacity",
      description:
        "Reached cumulative installation capacity of 10 MW across Maharashtra.",
    },
    {
      year: "2022",
      title: "50 MW Milestone",
      description:
        "Expanded operations with over 50 MW installed capacity.",
    },
    {
      year: "2024",
      title: "Market Leader",
      description:
        "Recognized as a trusted solar EPC company in Maharashtra.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-64 bg-gradient-to-r from-primary via-primary-dark to-primary-darker text-foreground flex items-center pt-20">

        <div className="max-w-7xl mx-auto px-6 text-center py-12">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
            Our Projects
          </h1>

          <p className="text-lg max-w-2xl mx-auto">
            Explore our successful solar installations across residential, commercial, and industrial sectors.
          </p>

        </div>

      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project, index) => (

              <div
                key={index}
                className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden"
              >

                <div className="relative h-48">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="p-6">

                  <h3 className="font-bold text-lg mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    Location: {project.location}
                  </p>

                  <p className="text-yellow-500 font-semibold mt-1">
                    Capacity: {project.capacity}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Our Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {impacts.map((item, index) => (

              <div key={index} className="bg-white p-8 rounded shadow text-center">

                <AnimatedCounter end={item.value} suffix={item.suffix} />

                <p className="mt-2 text-gray-600">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Environmental */}
      <section className="py-20 bg-black text-white">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            Environmental Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {environmental.map((item, index) => (

              <div key={index} className="bg-white/10 p-8 rounded">

                <h3 className="text-4xl font-bold text-yellow-400">
                  {item.value}
                </h3>

                <p className="text-gray-400">
                  {item.unit}
                </p>

                <p>
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Our Growth Journey
          </h2>

          <div className="space-y-8">

            {timeline.map((item, index) => (

              <div key={index}>

                <p className="text-yellow-500 font-bold text-xl">
                  {item.year}
                </p>

                <h3 className="font-bold text-lg">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20 bg-yellow-400 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Become Part of Our Solar Revolution
        </h2>

        <p className="mb-6">
          Start saving on electricity and switch to clean solar energy today.
        </p>

        <a
          href="/contact"
          className="bg-black text-yellow-400 px-8 py-4 rounded font-bold"
        >
          Start Your Project Today
        </a>

      </section>

      <Footer />

      <WhatsAppButton />

    </>
  );
}
