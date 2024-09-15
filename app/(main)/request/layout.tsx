import Breadcrumb from "@/app/components/Generics/Breadcrumb";
import Wrapper from "@/app/components/Generics/Wrapper";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import { PropsWithChildren } from "react";

const layout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <section>
      <Breadcrumb crumbs={[{ href: "", text: "Request Quote" }]} />
      <Wrapper>
        <ContentSpacing />
        {children}
        <ContentSpacing />
      </Wrapper>
    </section>
  );
};

export default layout;
