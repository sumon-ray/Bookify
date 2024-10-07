import AllBooks from "./AllBooks";
import Categories from "./Categories";
import OurBooksBanner from "./OurBooksBanner";
import Writers from "./Writers";

export default function page() {
    return (
        <div className="space-y-6 pb-14">
            <OurBooksBanner />
            <Writers />
            <Categories />
            <AllBooks />
        </div>
    )
}
