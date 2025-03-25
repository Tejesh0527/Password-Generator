function generatePassword() {
    let dictionary = "";
    
    if (document.getElementById("lowercaseCb").checked) {
        dictionary += "abcdefghijklmnopqrstuvwxyz";
    }
    if (document.getElementById("uppercaseCb").checked) {
        dictionary += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (document.getElementById("digitsCb").checked) {
        dictionary += "0123456789";
    }
    if (document.getElementById("specialsCb").checked) {
        dictionary += "!@#$%^&*()_+-={}[];<>:";
    }

    const length = document.getElementById("lengthRange").value;
    if (length < 1 || dictionary.length === 0) {
        document.getElementById("password").value = "Select options!";
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const pos = Math.floor(Math.random() * dictionary.length);
        password += dictionary[pos];
    }

    document.getElementById("password").value = password;
}

document.getElementById("generate-btn").addEventListener("click", generatePassword);

document.getElementById("lengthRange").addEventListener("input", (e) => {
    document.getElementById("lengthValue").textContent = e.target.value;
    generatePassword();
});

document.getElementById("copy-btn").addEventListener("click", () => {
    const password = document.getElementById("password").value;
    navigator.clipboard.writeText(password).then(() => {
        document.getElementById("copy-btn").textContent = "Copied!";
        setTimeout(() => {
            document.getElementById("copy-btn").textContent = "Copy";
        }, 1000);
    });
});

generatePassword();
