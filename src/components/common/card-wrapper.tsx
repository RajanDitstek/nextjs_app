"use client";

import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui";
import { BackButton, Header, Social } from "@/components/common";

type CardWrapperProps = React.PropsWithChildren<{
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}>;

export function CardWrapper(props: CardWrapperProps) {
  const { backButtonHref, backButtonLabel, headerLabel, children, showSocial } =
    props;
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>

      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
}
