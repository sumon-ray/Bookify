import OurBooksBanner from "./OurBooksBanner";
import Trending from "./Trending";
import Writers from "./Writers";

export default function page() {
    return (
        <div className="space-y-6 pb-14">
            <OurBooksBanner />
            <Writers />
            <Trending />
        </div>
    )
}
