import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  subItems?: {
    icon?: ReactNode;
    title: string;
    description: string;
  }[];
}

export function ServiceCard({ icon, title, description, subItems }: ServiceCardProps) {
  return (
    <div className={`bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group ${subItems ? 'md:col-span-2 lg:col-span-2' : ''}`}>
      {/* Main Content */}
      <div className="flex flex-col h-full">
        {/* Icon Container */}
        <div className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-muted rounded-lg group-hover:bg-primary transition-colors">
          <div className="text-primary group-hover:text-foreground transition-colors">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-poppins font-bold text-lg text-foreground mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Sub Items */}
        {subItems && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-auto pt-6 border-t border-border">
            {subItems.map((item, index) => (
              <div key={index} className="space-y-2">
                {item.icon && (
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                )}
                <h4 className="font-poppins font-bold text-sm text-foreground">{item.title}</h4>
                <p className="text-xs text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Accent */}
        {!subItems && (
          <div className="mt-auto pt-4">
            <div className="h-1 w-0 bg-primary group-hover:w-8 transition-all duration-300 rounded-full" />
          </div>
        )}
      </div>
    </div>
  );
}
