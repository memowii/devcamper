import { IconStore } from "../../common/components/IconStore";

export const AcceptedSymbol = ({ accepted }) =>
  accepted
    ? IconStore("faCheck", "text-success")
    : IconStore("faTimes", "text-danger");
