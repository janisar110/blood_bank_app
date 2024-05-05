const passwordGenerator = () => {
    const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < 30; i++) {
        const randomIndex = Math.floor(Math.random() * str.length);
        password += str[randomIndex];
    }
    return password;
    
}

export default passwordGenerator