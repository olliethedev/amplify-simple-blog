import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface RedirectProps {
  to: string;
}

export const Redirect = ({ to }: RedirectProps) => {
  const { push } = useRouter();

  useEffect(() => {
    push(to);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <p></p>;
};
