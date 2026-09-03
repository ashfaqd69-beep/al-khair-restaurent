* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #111;
    color: white;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 8%;
}

.logo {
    font-size: 25px;
}

ul {
    display: flex;
    list-style: none;
    gap: 25px;
}

a {
    color: white;
    text-decoration: none;
}

.hero {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.hero h1 {
    font-size: 60px;
    margin-bottom: 20px;
}

.hero p {
    font-size: 20px;
    margin-bottom: 30px;
}

button {
    padding: 14px 30px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
}

#about {
    padding: 80px 10%;
    text-align: center;
}

#about h2 {
    font-size: 35px;
    margin-bottom: 15px;
}

footer {
    text-align: center;
    padding: 30px;
}