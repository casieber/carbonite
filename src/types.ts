import * as monaco from 'monaco-editor';
import { RGBColor } from 'react-color';

export type EditorConfig = monaco.editor.IEditorConstructionOptions;

export type Color = RGBColor;

export type MonacarbonConfig = {
	backgroundColor: string | Color;
	editor: EditorConfig;
}