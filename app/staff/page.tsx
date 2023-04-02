import Card from "@/components/common/card";
import Header from "@/components/common/header/header";
export default async function StaffPage() {
  const response = await import(`../../public/staff.json`);
  const staff = response.default;
  return (
    <>
      <Header data={staff.header} />

      <div className=" bg-primary">
        <div className="max-w-container ajust-y">
          <div className="z-30 flex flex-col items-center justify-center gap-3 xl:flex-row">
            {staff.card.map((el: any) => (
              <Card data={el} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
