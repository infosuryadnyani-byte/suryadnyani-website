import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { User, Shield, Briefcase, Users } from "lucide-react";

export default function Management() {

  const boardOfDirectors = [
    {
      name: "Mr. Dhiraj Chandrakant Sagavekar",
      role: "Managing Director",
      description:
        "Visionary leader with extensive experience in renewable energy sector and business development.",
    },
    {
      name: "Mr. Anmol Arvind Jadhav",
      role: "Director",
      description:
        "Strategic thinker driving innovation and growth in solar energy solutions.",
    },
  ];

  const coreTeam = [
    {
      name: "Ms. Kimaya Ovalekar",
      role: "Administration Manager",
      description:
        "Managing administrative operations and ensuring smooth business workflows.",
    },
    {
      name: "Mr. Amar Apage",
      role: "Health and Safety Manager",
      description:
        "Ensuring workplace safety standards and regulatory compliance.",
    },
    {
      name: "Technical Team Lead",
      role: "Engineering Manager",
      description:
        "Leading technical implementation and quality assurance.",
    },
    {
      name: "Operations Manager",
      role: "Project Operations",
      description:
        "Overseeing project execution and maintenance operations.",
    },
  ];

  const partners = [
    {
      name: "Adv. Harekrishna Mishra",
      role: "Legal Advisor",
      description:
        "Legal expertise and documentation support.",
    },
    {
      name: "Swayam Bansode & Associates",
      role: "Financial & Tax Advisor",
      description:
        "Financial planning and tax consultancy services.",
    },
    {
      name: "Jalna Enterprises",
      role: "Chartered Accountant",
      description:
        "Financial planning and tax consultancy services.",
    },
    {
      name: "Dinesh Shah & Associates",
      role: "Financial Consultant",
      description:
        "Financial advisory and accounting services.",
    },
    {
      name: "Navarch",
      role: "Design Consultant",
      description:
        "Architectural and design consultancy.",
    },
    {
      name: "Sunpowerz",
      role: "Legal Consultant",
      description:
        "Legal consultancy and liaison services.",
    },
    {
      name: "Acti Renewable Energy Pvt Ltd",
      role: "Technical Advisor",
      description:
        "Renewable energy technical expertise.",
    },
    {
      name: "MS Enterprises",
      role: "Installation Expert",
      description:
        "Installation expertise.",
    },
    {
      name: "Sunshine Energies",
      role: "Installation Expert",
      description:
        "Installation expertise.",
    },
    {
      name: "Cosmo Enterprises ",
      role: "Installation Expert",
      description:
        "Installation expertise.",
    },
    {
      name: "S&T Web Works",
      role: "Website Development",
      description:
        "Website Development.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-64 bg-gradient-to-r from-primary via-primary-dark to-primary-darker text-foreground flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 text-center py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
            Our Management
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Meet the expert team driving solar innovation across Maharashtra
          </p>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Board of Directors
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {boardOfDirectors.map((member, index) => (

              <div key={index} className="p-6 shadow rounded-lg text-center">

                <User className="mx-auto mb-4 text-yellow-500" size={48} />

                <h3 className="font-bold text-lg">
                  {member.name}
                </h3>

                <p className="text-yellow-500 font-semibold">
                  {member.role}
                </p>

                <p className="text-gray-600 mt-2">
                  {member.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Core Team */}
      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Core Team
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {coreTeam.map((member, index) => (

              <div key={index} className="p-6 shadow rounded-lg text-center">

                <Users className="mx-auto mb-4 text-yellow-500" size={40} />

                <h3 className="font-bold">
                  {member.name}
                </h3>

                <p className="text-yellow-500">
                  {member.role}
                </p>

                <p className="text-gray-600 text-sm mt-2">
                  {member.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Partners */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Associated & Partners
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {partners.map((partner, index) => (

              <div key={index} className="p-6 shadow rounded-lg text-center">

                <Briefcase className="mx-auto mb-4 text-yellow-500" size={40} />

                <h3 className="font-bold">
                  {partner.name}
                </h3>

                <p className="text-yellow-500">
                  {partner.role}
                </p>

                <p className="text-gray-600 text-sm mt-2">
                  {partner.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
