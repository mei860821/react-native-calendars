import { Theme } from '../../../commons/types';
export default function styleConstructor(theme?: Theme): {
    wrapper: {
        alignItems: "center";
        alignSelf: "stretch";
        marginLeft: number;
    };
    base: {
        width: number;
        height: number;
        alignItems: "center";
    };
    fillers: {
        position: "absolute";
        height: number;
        flexDirection: "row";
        left: number;
        right: number;
    };
    leftFiller: {
        height: number;
        flex: number;
    };
    rightFiller: {
        height: number;
        flex: number;
    };
    text: {
        marginTop: number;
        fontSize: any;
        fontFamily: any;
        fontWeight: any;
        color: any;
        backgroundColor: string;
    };
    today: {
        backgroundColor: any;
    };
    todayText: {
        fontWeight: "500";
        color: any;
    };
    selectedText: {
        color: any;
    };
    disabledText: {
        color: any;
    };
    quickAction: {
        backgroundColor: string;
        borderWidth: number;
        borderColor: string;
    };
    quickActionText: {
        marginTop: number;
        color: any;
    };
    firstQuickAction: {
        backgroundColor: any;
    };
    firstQuickActionText: {
        color: string;
    };
    naText: {
        color: string;
    };
};
