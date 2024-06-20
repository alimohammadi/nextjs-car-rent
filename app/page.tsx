import Booking from "./components/Booking/Booking";

export default function Home() {
  return (
    <section className="grid md:grid-cols-3">
      <div>
        <Booking />
      </div>
      <div className="col-span-2 max-md:order-first">Map</div>
    </section>
  );
}
