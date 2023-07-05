async function getEmbeddings(input) {
    // const OPENAI_API_KEY = 'your-api-key';
    const OPENAI_API_KEY = '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';

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
    };

    const data = {
        "model": "text-embedding-ada-002",
        "input": input
    };

    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    };

    try {
        const response = await fetch('https://api.openai.com/v1/embeddings', requestOptions);
        const data = await response.json();
        const vectList = data.data[0].embedding;
        console.log(vectList);

        return vectList; // 返回 vectList
    } catch (error) {
        console.error(error);
        throw error; // 抛出错误
    }
}

function calculateSimilarity() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;

    var similarity = calculateSimilarityExternally(input1, input2);

    document.getElementById("result").innerHTML = "Similarity: " + similarity;
}

function calculateSimilarityExternally(text1, text2) {
    console.log(getEmbeddings(text1))
    console.log(getEmbeddings(text2))

    return 0.75;
}
