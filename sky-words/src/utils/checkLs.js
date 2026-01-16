export const checkLs = () => {
    try {
        const userInfo = localStorage.getItem("userInfo");
        if (userInfo) {
            return JSON.parse(userInfo);
        }
        return null;
    } catch (error) {
        console.error("Ошибка при чтении из localStorage:", error);
        return null;
    }
};