import domToImage, { Options } from 'dom-to-image';

import { CAPTURE_NODE_ID, CAPTURE_HIDDEN_CLASSNAME } from '../constants';

/**
 * Generates a png image from a DOM node.
 *
 * @param id Optional. ID of the DOM node to take an image of.
 * @returns A Promise to a string representing the png image.
 */
const takeImage = (id: string = CAPTURE_NODE_ID): Promise<string> => {
	const node = document.getElementById(id);

	if (!node) {
		throw new Error('Could not find the node to capture');
	}

	const config: Options = {
		filter: (n: any) => {
			if (n.className) {
				return String(n.className).indexOf(CAPTURE_HIDDEN_CLASSNAME) < 0;
			}

			return true;
		},
	};

	return domToImage.toPng(node, config);
};

/**
 * Downloads an image of the current editor state.
 */
export const saveImage = () => takeImage().then(triggerDownload);

/**
 * Triggers the download of a string as a png file.
 *
 * @param url String representing an image to download
 * @param name Optional. The filename to use for the downloaded image.
 * 		Defaults to 'carbonite.png'
 */
export const triggerDownload = (
	url: string,
	name: string = 'carbonite.png',
) => {
	const link = document.createElement('a');

	link.download = name;
	link.href = url;

	document.body.appendChild(link);

	link.click();
	link.remove();
};
