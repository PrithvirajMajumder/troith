export default interface ListItemProps {
    title: string;
    subtitle?: string;
    avatar?: ListItemAvatarProps;
    onPress?: () => void;
    onLongPress?: () => void;
    hasAccent?: boolean;
    accentColor?: string;
}

export interface ListItemIconProps {
    type: ListItemIconType;
    name: string;
    color?: string;
}

export interface ListItemAvatarProps {
    icon?: ListItemIconProps;
    img?: string;
}

type ListItemIconType = 'material' | 'fontAwesome' | 'ionicon' | string;