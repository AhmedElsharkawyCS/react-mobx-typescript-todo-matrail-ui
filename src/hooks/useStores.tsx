import { useContext } from "react";
import { RootStoreContext } from "../stores/RootStores";

export const useStores = () => useContext(RootStoreContext);
