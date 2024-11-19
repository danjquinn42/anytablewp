import {defineStore} from "pinia";

function getRandomUUID() {
    return self.crypto.randomUUID();
}
export const useTextStore = defineStore("text", {
    state: () => ({
        section: [{ id: getRandomUUID(), text: ""}]
    }),
    actions: {

    }
})
