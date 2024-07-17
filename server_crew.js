(async() => {

    const res1 = await fetch('https://challenger.code100.dev/login', {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
            body: JSON.stringify({
                "email": "ws2-round4@code100.dev",
                "password":"8CH7-9K4V-XIXO"
            })
    })
    const body = await res1.json()
    console.log(body)
    const token = body.token

    console.log(token)

    const res2 = await fetch('https://challenger.code100.dev/getpuzzle', {
        headers: {
            "Authorization": `Bearer ${token}`
        }

    })

    const res = await fetch('https://devrel.wearedevelopers.com/code100-puzzles/009-zagreb/crews.json');
    const data = await res.json();

    const output = [];
    data.map(val => {
        if (val.age > 25) {
            if (val.job) {
                output.push(val.job);
            }
        }
    })
    
    const result = [...new Set(output)].sort();
    
    await fetch('https://challenger.code100.dev/postanswer', {
        method:"POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "content-type": "application/json"
        },
        body:JSON.stringify({
            answer: anagrams
        })
    })
})();
