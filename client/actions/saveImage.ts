import domToImage, { Options } from 'dom-to-image';

import { CAPTURE_NODE_ID, CAPTURE_HIDDEN_CLASSNAME } from '../constants';
import { Config } from '../types';

const test = true;

/**
 * Generates a png image from a DOM node.
 *
 * @returns A Promise to a string representing the png image.
 */
const takeImage = (options: Config): Promise<string> => {
	// dom-to-image does not work in IE or Safari, need to send to api for processing
	if (
		test ||
		navigator.userAgent.indexOf('MSIE') !== -1 ||
		navigator.userAgent.indexOf('Safari') !== -1
	) {
		return fetch('/image', {
			method: 'POST',
			body: JSON.stringify(options),
			headers: {
				'content-type': 'application/json',
			},
		}).then(res => res.text());
	}

	return takeImageLocal();
};

function takeImageLocal(): Promise<string> {
	const node = document.getElementById(CAPTURE_NODE_ID);

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
}

(window as any).takeImageLocal = takeImageLocal;

/**
 * Downloads an image of the current editor state.
 */
export const saveImage = (config: Config) =>
	takeImage(config).then(triggerDownload);

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

export const insertImage = (config: Config) =>
	takeImage(config).then(triggerInsertion);

export const triggerInsertion = (img: string) => {
	Word.run(context => {
		context.document.body.insertInlinePictureFromBase64(
			img.slice(img.indexOf(',') + 1),
			'Start',
		);

		return context.sync();
	});
};
