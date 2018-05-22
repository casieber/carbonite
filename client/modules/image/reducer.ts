import { ImageState, ImageAction } from './types';

const initialState: ImageState = {
	processing: false,
};

export default function imageReducer(
	state: ImageState = initialState,
	action: ImageAction,
): ImageState {
	switch (action.type) {
		case 'image.embed':
		case 'image.save':
		default:
			return state;
	}
}
