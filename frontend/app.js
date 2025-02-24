document.getElementById('generateBtn').addEventListener('click', async () => {
    const length = document.getElementById('length').value;

    try {
        const response = await fetch(`http://localhost:3000/generate?length=${length}`);
        if (!response.ok) throw new Error('Failed to fetch');

        const data = await response.json();
        document.getElementById('password').value = data.password;
    } catch (error) {
        console.error('Error:', error);
    }
});

document.getElementById('generateBtn').addEventListener('click', async () => {
    const length = document.getElementById('length').value;

    try {
        const response = await fetch(`http://localhost:3000/generate?length=${length}`);
        if (!response.ok) throw new Error('Failed to fetch API');

        const data = await response.json();
        console.log("Generated Password:", data.password); // ✅ Debugging log
        document.getElementById('password').value = data.password;
    } catch (error) {
        console.error("Error fetching API:", error);
    }
});
