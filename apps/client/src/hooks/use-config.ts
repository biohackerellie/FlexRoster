import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import { Theme } from "../lib/themes";

type Config = {
  theme: Theme["name"];
};

const configAtom = atomWithStorage<Config>("config", {
  theme: "Mulberry",
});

export function useConfig() {
  return useAtom(configAtom);
}
