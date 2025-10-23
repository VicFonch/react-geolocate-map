import type { FC } from "react";
import { MapView } from "./components/MapView";
import type { LatLngTuple } from "leaflet";

export const App: FC = () => {
  const position: LatLngTuple = [51.505, -0.09];
  return <MapView posix={position} />;
};
