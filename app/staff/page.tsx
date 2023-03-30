import Card from "@/components/common/card";
import Header from "@/components/common/header/header";
export default async function StaffPage() {
  const response = await import(`../../pages/api/staff.json`);
  const staff = response.default;
  return (
    <>
      <Header title={staff.header.title} subtitle={staff.header.subtitle} image={staff.header.image} />

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
