import { getEffectsPanel } from "../utils/gets.ts";
import { Listener } from "./index.ts";

const UpdateWorldTime: Listener = {
    listen: () => {
        Hooks.on("updateWorldTime", () => {
            getEffectsPanel()?.refresh();
        });
    },
};

export { UpdateWorldTime };
