import { Store } from 'redux';
import { Dispatch } from 'react-redux';

import domToImage, { Options } from 'dom-to-image';

import {
	CAPTURE_NODE_ID,
	CAPTURE_HIDDEN_CLASSNAME,
	BACKGROUND_COLOR_ID,
} from '../../constants';
import { ApplicationState } from '../index';

export function saveImage() {
	return (dispatch: Dispatch, getStore: () => Store<ApplicationState>) => {
		dispatch({
			type: 'image.saveImage.request',
		});

		takeImage(getStore).then(
			img => {
				triggerDownload(img);

				dispatch({
					type: 'image.saveImage.success',
					payload: img,
				});

				return img;
			},
			error => {
				dispatch({
					type: 'image.saveImage.failure',
					payload: error,
				});
			},
		);
	};
}

export function insertImage() {
	return (dispatch: Dispatch, getStore: () => Store<ApplicationState>) => {
		dispatch({
			type: 'image.insertImage.request',
		});

		takeImage(getStore).then(
			img =>
				triggerInsertion(img).then(() => {
					dispatch({
						type: 'image.insertImage.success',
						payload: img,
					});
					return img;
				}),
			error => {
				dispatch({
					type: 'image.insertImage.failure',
					payload: error,
				});
			},
		);
	};
}

/**
 * Generates a png image from a DOM node.
 */
function takeImage(getStore: () => Store<ApplicationState>) {
	// dom-to-image does not work in IE or Safari, need to send to api for processing
	return !document.implementation.hasFeature(
		'w3.org/TR/SVG11/feature#Extensibility',
		'1.1',
	)
		? takeImageRemote(getStore())
		: takeImageLocal();
}

function takeImageRemote(state: Store<ApplicationState>): Promise<string> {
	return fetch('/image', {
		method: 'POST',
		body: JSON.stringify(state),
		headers: {
			'content-type': 'application/json',
		},
	}).then(res => res.text());
}

function takeImageLocal(): Promise<string> {
	const node = document.getElementById(CAPTURE_NODE_ID);
	const bgNode = document.getElementById(BACKGROUND_COLOR_ID);

	if (!node || !bgNode) {
		throw new Error('Could not find the node to capture');
	}

	const scale = 2;
	const height = node.offsetHeight * scale;
	const width = node.offsetWidth * scale;
	const bgcolor = bgNode.style.backgroundColor;

	const config: Options = {
		style: {
			transform: `scale(${scale})`,
			'transform-origin': 'center',
		},
		bgcolor: bgcolor || undefined,
		filter: (n: any) => {
			if (n.className) {
				return String(n.className).indexOf(CAPTURE_HIDDEN_CLASSNAME) < 0;
			}

			return true;
		},
		width,
		height,
	};

	return domToImage.toPng(node, config);
}

// Currently we set this so that it can be accessed by Puppeteer
// when accessed over remote API
(window as any).takeImageLocal = takeImageLocal;

/**
 * Triggers the download of a string as a png file.
 *
 * @param url String representing an image to download
 * @param name Optional. The filename to use for the downloaded image.
 * 		Defaults to 'carbonite.png'
 */
const triggerDownload = (url: string, name: string = 'carbonite.png') => {
	const link = document.createElement('a');

	link.download = name;
	link.href = url;

	document.body.appendChild(link);

	link.click();
	link.remove();
};

const triggerInsertion = (img: string) => {
	return Word.run(context => {
		context.document.body.insertInlinePictureFromBase64(
			// Slice to remove prefix before base64 data
			img.slice(img.indexOf(',') + 1),
			'Start',
		);

		return context.sync();
	});
};
