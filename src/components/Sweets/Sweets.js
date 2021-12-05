import { AvailableSweets } from "./AvailableSweets";
import { SweetsSummary } from "./SweetsSummary";

export const Sweets = (props) => {
    return (
        <>
            <SweetsSummary />
            <AvailableSweets />
        </>
    );
};
