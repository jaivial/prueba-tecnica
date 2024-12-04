// src/components/VideoPlayer/BreadCrumb.tsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

// SRP: UI component: responsible for just displaying final HTML.
const BreadCrumb: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Breadcrumb className="max-w-[1280px] mx-auto py-10 animate-fadeIn">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="text-white text-xl font-light hover:text-slate-300 hover:underline" href="/">
            Inicio
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash size={48} className="text-white font-bold" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="text-white text-xl font-bold">{title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumb;
