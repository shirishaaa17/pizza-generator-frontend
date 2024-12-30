 document.getElementById('pizzaForm').addEventListener('submit', async function(e) {
            e.preventDefault();

            const size = document.getElementById('size').value;
            const toppings = document.getElementById('toppings').value;
            const cheese = document.getElementById('cheese').value;

            const response = await fetch('http://localhost:8080/generate-bill', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    size: size,
                    toppings: parseInt(toppings),
                    cheese: cheese === 'yes'
                })
            });

            if (response.ok) {
                const data = await response.json();
                document.getElementById('billDetails').innerText = `Total: Rs. ${data.total}`;
            } else {
                document.getElementById('billDetails').innerText = 'Error generating bill. Please try again.';
            }
        });
