
export default {
    welcomeText: "Добро подаловать в проект!",
    apiServerHost: (function () {
        console.log(window.location.host)
        const hostname = window.location.host
        return hostname
    })()
}