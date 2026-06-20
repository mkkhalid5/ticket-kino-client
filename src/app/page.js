import Banner from "@/components/ui/Banner";
import LatestTicket from "@/components/ui/LatestTicket";
import OurService from "@/components/ui/OurService";
import { getLatestTicket } from "@/lib/api/latest-tickets";

export default async function Home() {
  const latestTicket = await getLatestTicket();
  return (
    <div>
      <Banner />
      <LatestTicket latestTicket={latestTicket} />
      <OurService />
    </div>
  );
}
