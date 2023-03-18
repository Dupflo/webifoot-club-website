import Header from "@/components/common/header";
import Field from "../../assets/staff/field.jpg"
import Presentation from "@/components/staff/presentation";
export default async function StaffPage() {
  const response = await import(`../../pages/api/app.json`);
  let header = response.default.header;
  return (
    <>
      <Header title={header.staff.title} subtitle={header.staff.subtitle} image={Field} />
      <Presentation staff={response.default.staff} />
    </>
  );
}
