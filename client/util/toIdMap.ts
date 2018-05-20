/**
 * Transforms a list of id-based items into a
 * map of id to item.
 *
 * @param list The list to transform
 */
export function toIdMap<T extends { id: string }>(
	list: T[],
): { [id: string]: T } {
	return list.reduce(
		(map, value) => ({
			...map,
			[value.id]: value,
		}),
		{},
	);
}
