export default function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const showTime =
                today.getHours()
        + ':' + today.getMinutes()
        + ":" + today.getSeconds();
    return `${showTime}   ${month}/${date}/${year}`;
}
