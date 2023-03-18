import Card from "./card";


export default function Presentation(props: any) {
  let staff = props.staff;
  
  return (
    <div className=" bg-primary">
      <div className="max-w-container ajust-y">
        <div className="z-30 flex flex-col items-center justify-center gap-3 xl:flex-row">
          {staff.map((el: any) => (
            <Card role={el.role} name={el.name} about={el.about} id={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
