import BharatBolegaPost from "@/components/BharatBolegaPost";
import BuisnessofbrandPost from "@/components/BuisnessofbrandPost";
import RaisinahillPost from "@/components/RaisinahillPost";

export default function Home() {
  return (
    <main className="py-24"> 
      <RaisinahillPost/>
      <BharatBolegaPost/> 
      <BuisnessofbrandPost/>
    </main>
  );
}
