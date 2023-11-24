import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  where: string;
};
export default function Redirect({ where }: Props) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(where);
  });
  return <></>;
}
