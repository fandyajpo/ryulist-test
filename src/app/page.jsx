import Page from "@/components/home";
import { Suspense } from "react";
import Loading from "./loading";

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Page />
    </Suspense>
  );
};

export default Page;
