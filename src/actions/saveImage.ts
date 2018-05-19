import domToImage, { Options } from 'dom-to-image';

import { CAPTURE_NODE_ID, CAPTURE_HIDDEN_CLASSNAME } from '../constants';

const takeImage = (id: string = CAPTURE_NODE_ID) => {
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

export const saveImage = () => {
	const link = document.createElement('a');
	takeImage().then(url => {
		link.download = `carbonite.png`;
		link.href = url;
		document.body.appendChild(link);
		link.click();
		link.remove();
	});
};
