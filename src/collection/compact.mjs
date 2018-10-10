import filter from "./filter.mjs";
import identity from "../utility/identity.mjs";

const compact = filter(identity);

export default compact;
