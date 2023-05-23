import Link from "next/link";
import { MainLayout } from "../../components/layout/MainLayout";

export default function Contact() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <h1 className={"title"}>
        Ir a <Link href="/">Home!</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/contact/index.jsx</code>
      </p>
    </MainLayout>
  );
}
