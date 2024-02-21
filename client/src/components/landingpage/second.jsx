import Card from "./card";

const items = [
  {
    title: "Centralized",
    description:
      "Swift insights into patient health and resource use for informed decision-making.",
    imglink: "/icons/centralized.png",
  },
  {
    title: "Real Time data",
    description:
      "Streamlined sharing of comprehensive patient records among healthcare providers for improved care coordination.",
    imglink: "/icons/realtime.png",
  },
  {
    title: "Efficiency Enhancing",
    description: "Optimized workflows and automated tasks for streamlined communication and resource allocation.",
    imglink: "/icons/centralized.png",
  },
];

function Second() {
  return (
    <>
      <div className="grid place-items-center">
        <h1 className="text-2xl font-bold">Why Nexus?</h1>
      </div>
      <div className="grid grid-cols-3 place-items-center gap-x-20 px-20 ">
        {items.map((item, index) => (
          <Card
            key={index}
            imglink={item.imglink}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default Second;
