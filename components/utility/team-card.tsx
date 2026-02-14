import Image from 'next/image';

interface TeamCardProps {
  name: string;
  designation: string;
  description: string;
  image: string;
}

export function TeamCard({ name, designation, description, image }: TeamCardProps) {
  return (
    <div className="group">
      {/* Image Container */}
      <div className="mb-4 relative h-64 overflow-hidden rounded-lg bg-muted">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <p className="text-white text-sm p-4 font-medium">{description}</p>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-1">
        <h3 className="font-poppins font-bold text-lg text-foreground">
          {name}
        </h3>
        <p className="text-primary font-medium text-sm">
          {designation}
        </p>
      </div>
    </div>
  );
}
