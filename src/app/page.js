import AdvertiseTicket from "@/components/ui/AdvertiseTicket";
import Banner from "@/components/ui/Banner";
import LatestTicket from "@/components/ui/LatestTicket";
import OurService from "@/components/ui/OurService";
import { getAdvertiseTicket, getLatestTicket } from "@/lib/api/latest-tickets";

export default async function Home() {
  const latestTicket = await getLatestTicket();
  const advertiseTicket = await getAdvertiseTicket();
  return (
    <div>
      <Banner />
      <AdvertiseTicket advertiseTicket={advertiseTicket} />
      <LatestTicket latestTicket={latestTicket} />
      <OurService />
    </div>
  );
}
