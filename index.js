document.querySelector(".readOrUnread").onclick = () => {
    document.querySelector(".numberOfNotifications").innerHTML = 0;
    document.querySelectorAll(".notification.unread").forEach(notification => {
        notification.classList.remove("unread");
        notification.querySelector("#unreadSign").remove();
    })
};
document.querySelectorAll(".notification").forEach(notification => {
    notification.onclick = () => {
        notification.classList.remove("unread");
        let numberOfNotifications = parseInt(document.querySelector(".numberOfNotifications").innerHTML);
        if(numberOfNotifications > 0) {
            notification.querySelector("#unreadSign").remove();
            document.querySelector(".numberOfNotifications").innerHTML = (numberOfNotifications - 1);
        }
    }
});