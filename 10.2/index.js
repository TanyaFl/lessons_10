window.onload = () => {
    const container = document.getElementById('container');
    const table = document.createElement('table');
    table.classList.add('my-table');

    let current = 0;

    for (let i = 1; i <= 10; i++) {
        const row = document.createElement('tr');
        for (let j = current + 1; j <= 10 + current; j++) {
            const td = document.createElement('td');
            td.textContent = j;
            row.appendChild(td);
        }

        current += 10;
        table.appendChild(row);
    }

    container.appendChild(table);
};