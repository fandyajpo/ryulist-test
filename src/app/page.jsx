import Page from "@/components/home";
import { Suspense } from "react";
import Loading from "./loading";

const Pages = () => {
  return (
    // <p>Hai</p>

    <Suspense fallback={<Loading />}>
      <Page />
    </Suspense>
  );
};

export default Pages;
