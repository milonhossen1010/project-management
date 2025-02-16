import Link from "next/link";
import {CgMenuBoxed} from "react-icons/cg"
export default function Logo({ text }) {
  return (
    <h2>
      <Link href="/" className="text-2xl font-bold flex items-center gap-2">
        <CgMenuBoxed className="text-accent" /> {text}
      </Link>    
    </h2>
  );
  
}