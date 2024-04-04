export const formatDate = (date: Date, isTime: boolean = true): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    let timePart = '';

    if (isTime) {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        timePart = ` о ${hours}.${minutes}`;
    }

    return `${day}.${month}.${year}${timePart}`;
};
