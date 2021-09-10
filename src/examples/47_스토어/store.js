import { readable, writable, derived, get } from 'svelte/store';

export const r = readable(1);
export const w = writable(7);
export const d = derived(w, $w => $w + 1);

get(r) // 1
get(w) // 7
get(d) // 8
