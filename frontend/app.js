document.getElementById('generateBtn').addEventListener('click', async () => {
    const length = document.getElementById('length').value;

    try {
        const response = await fetch(`http://localhost:3000/generate?length=${length}`);
        if (!response.ok) throw new Error('Failed to fetch API');

        const data = await response.json();
        console.log("Generated Password:", data.password); //debug log
        document.getElementById('password').value = data.password;
    } catch (error) {
        console.error("Error fetching API:", error);
    }
});

document.getElementById('copyBtn').addEventListener('click', () => {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
});
