import { JSX as JSX_2 } from 'react/jsx-runtime';

/**
 * Wrapper component for the chat box.
 *
 * @returns The rendered chat box wrapped in a SocketProvider.
 */
export declare const ChatBox: (props: Omit<Props, 'children'>) => JSX_2.Element;

export declare type Props = {
    children: React.ReactNode;
    channelId?: string;
    onEndBot?: () => void;
    className?: string;
    isTest?: boolean;
    onClose?: () => void;
    isShowClose?: boolean;
    isForLiveChat?: boolean;
    userId?: string;
    customStyles?: {
        color: string;
        buttonSize: number;
        position: {
            y: number;
            x: number;
        };
        windowSize: {
            width: number;
            height: number;
        };
        logoUrl?: string | undefined;
        name?: string | undefined;
    };
    isForPreview?: boolean;
    isForManager?: boolean;
    adminId?: string;
};

export { }
