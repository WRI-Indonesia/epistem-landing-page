import AuthStep from "@/components/auth/AuthStep";

export default function Page() {
  return (
    <div className="lg:pt-22 bg-white">
      <div className="grid grid-cols-2 p-6">
        <AuthStep />
        <div></div>
      </div>
    </div>
  );
}
