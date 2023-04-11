import Calendar from "./calendar";
export default async function CalendarPage() {
  const response = await import(`../../public/calendar.json`);
  let calendar = response.default;
  return (
    <>
      <Calendar data={calendar}/>
    </>
  );
}
