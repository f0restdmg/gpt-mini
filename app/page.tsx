import Link from "next/link";

import { Button } from "@/components/ui/button";

const Page = () => (
  <div className="flex justify-center items-center h-screen">
    <Button>
      <Link href="/login">Войти</Link>
    </Button>
  </div>
);

export default Page;
