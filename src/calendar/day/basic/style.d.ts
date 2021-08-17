import { Theme } from '../../../commons/types';
export default function styleConstructor(theme?: Theme): {
    container: {
        alignSelf: "stretch";
        alignItems: "center";
    };
    base: {
        width: number;
        height: number;
        alignItems: "center";
    };
    text: any;
    alignedText: {
        marginTop: number;
    };
    selected: {
        backgroundColor: any;
        borderRadius: number;
    };
    today: {
        backgroundColor: any;
        borderRadius: number;
    };
    todayText: {
        color: any;
    };
    selectedText: {
        color: any;
    };
    disabledText: {
        color: any;
    };
    dot: any;
    visibleDot: {
        opacity: number;
        backgroundColor: any;
    };
    selectedDot: {
        backgroundColor: any;
    };
    disabledDot: {
        backgroundColor: any;
    };
    todayDot: {
        backgroundColor: any;
    };
};
