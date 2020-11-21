const cleanSize = (text) => {
    if (text.startsWith("US")) {
        return text.substring(3);
    }
    else {
        switch (text) {
            case 'xs':
                return 'XS';
            case 'small':
                return 'S';
            case 'medium':
                return 'M';
            case 'large':
                return 'L';
            case 'xl':
                return 'XL';
            default:
                return text;
        }
    }
}

export default cleanSize;