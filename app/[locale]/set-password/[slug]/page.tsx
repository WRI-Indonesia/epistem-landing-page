import AuthStep from "@/components/auth/AuthStep";
import SetPassword from "@/components/auth/SetPassword";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="bg-white lg:pt-22">
      <div className="grid min-h-screen grid-cols-1 gap-6 p-6 lg:grid-cols-2">
        <AuthStep />
        <SetPassword slug={slug} />
      </div>
    </div>
  );
}
