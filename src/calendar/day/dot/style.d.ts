import { Theme } from '../../../commons/types';
export default function styleConstructor(theme?: Theme): {
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
